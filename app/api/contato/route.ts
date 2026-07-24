import { NextResponse } from "next/server";
import { services } from "@/content/servicos";
import {
  contactDelivery,
  ContactDeliveryNotConfiguredError,
  type ContactSubmission,
} from "./contact-delivery";

export const runtime = "nodejs";

const MAX_REQUEST_BODY_SIZE = 16_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_TRACKED_CLIENTS = 10_000;

const fieldLimits = {
  name: 120,
  email: 254,
  company: 160,
  service: 80,
  message: 5_000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const serviceSlugs = new Set(services.map((service) => service.slug));
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

class ValidationError extends Error {}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sanitizeSingleLine(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeMessage(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim();
}

function requiredString(value: unknown, field: keyof typeof fieldLimits): string {
  if (typeof value !== "string") {
    throw new ValidationError("Dados de contato inválidos.");
  }

  const sanitized = field === "message" ? sanitizeMessage(value) : sanitizeSingleLine(value);

  if (!sanitized || sanitized.length > fieldLimits[field]) {
    throw new ValidationError("Revise os campos obrigatórios e tente novamente.");
  }

  return sanitized;
}

function optionalString(value: unknown, field: "company" | "service"): string | undefined {
  if (value === undefined || value === "") return undefined;
  if (typeof value !== "string") {
    throw new ValidationError("Dados de contato inválidos.");
  }

  const sanitized = sanitizeSingleLine(value);
  if (sanitized.length > fieldLimits[field]) {
    throw new ValidationError("Dados de contato inválidos.");
  }

  return sanitized || undefined;
}

function parseContactSubmission(value: unknown): ContactSubmission {
  if (!isRecord(value)) {
    throw new ValidationError("Dados de contato inválidos.");
  }

  const name = requiredString(value.name, "name");
  const email = requiredString(value.email, "email").toLowerCase();
  const message = requiredString(value.message, "message");
  const company = optionalString(value.company, "company");
  const service = optionalString(value.service, "service");

  if (!emailPattern.test(email)) {
    throw new ValidationError("Informe um e-mail válido.");
  }

  if (service && !serviceSlugs.has(service)) {
    throw new ValidationError("O serviço selecionado é inválido.");
  }

  return { name, email, company, service, message };
}

function getClientIdentifier(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const forwardedAddress = forwardedFor?.split(",")[0]?.trim();

  return forwardedAddress || request.headers.get("x-real-ip") || "unknown";
}

function takeRateLimitToken(clientIdentifier: string): number | null {
  const now = Date.now();

  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(key);
  }

  const current = rateLimitStore.get(clientIdentifier);
  if (!current) {
    if (rateLimitStore.size >= MAX_TRACKED_CLIENTS) {
      const oldestClient = rateLimitStore.keys().next().value;
      if (oldestClient) rateLimitStore.delete(oldestClient);
    }

    rateLimitStore.set(clientIdentifier, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return Math.ceil((current.resetAt - now) / 1_000);
  }

  current.count += 1;
  return null;
}

export async function POST(request: Request) {
  const retryAfter = takeRateLimitToken(getClientIdentifier(request));
  if (retryAfter !== null) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde alguns instantes e tente novamente." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Formato de solicitação inválido." }, { status: 415 });
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_REQUEST_BODY_SIZE) {
      return NextResponse.json({ error: "A mensagem excede o tamanho permitido." }, { status: 413 });
    }
    body = JSON.parse(rawBody) as unknown;
  } catch {
    return NextResponse.json({ error: "Envie dados JSON válidos." }, { status: 400 });
  }

  if (isRecord(body) && typeof body.website === "string" && body.website.trim()) {
    // Honeypots devem parecer uma resposta bem-sucedida para não orientar bots.
    return NextResponse.json({ success: true });
  }

  try {
    const contact = parseContactSubmission(body);
    await contactDelivery.deliver(contact);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (error instanceof ContactDeliveryNotConfiguredError) {
      return NextResponse.json(
        { error: "O envio de contatos está temporariamente indisponível." },
        { status: 503 }
      );
    }

    console.error("Falha ao entregar contato", error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
