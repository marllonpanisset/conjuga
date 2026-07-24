import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ContactPayload>;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "Preencha nome, e-mail e mensagem para enviar o contato." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }

  // Ponto de integração: conectar aqui a um provedor de e-mail transacional
  // (Resend, SendGrid, etc.) ou a um CRM. Mantido como placeholder para não
  // acoplar a arquitetura a um provedor específico nesta etapa do projeto.
  console.log("[contato] novo lead recebido:", {
    name: body.name,
    email: body.email,
    company: body.company,
    service: body.service,
  });

  return NextResponse.json({ success: true });
}
