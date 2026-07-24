"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui";
import { services } from "@/content/servicos";

type Status = "idle" | "loading" | "success" | "error";

function getErrorMessage(value: unknown): string {
  if (
    typeof value === "object" &&
    value !== null &&
    "error" in value &&
    typeof value.error === "string"
  ) {
    return value.error;
  }

  return "Não foi possível enviar sua mensagem.";
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let data: unknown;
        try {
          data = await response.json();
        } catch {
          throw new Error("Não foi possível enviar sua mensagem.");
        }

        throw new Error(getErrorMessage(data));
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Erro inesperado ao enviar.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[16px] border border-border bg-surface p-8 text-center">
        <Text variant="body" className="text-text-primary">
          Mensagem enviada. Vamos analisar seu contexto e retornar em breve.
        </Text>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Campo invisível para pessoas e leitores de tela; robôs que o preenchem são descartados pela API. */}
      <div className="absolute h-px w-px overflow-hidden whitespace-nowrap opacity-0" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[0.875rem] text-text-secondary">
            Nome
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className="h-11 w-full rounded-[10px] border border-border bg-surface px-4 text-[0.9375rem] text-text-primary outline-none focus-visible:border-signal"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[0.875rem] text-text-secondary">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            className="h-11 w-full rounded-[10px] border border-border bg-surface px-4 text-[0.9375rem] text-text-primary outline-none focus-visible:border-signal"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-[0.875rem] text-text-secondary">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            maxLength={160}
            autoComplete="organization"
            className="h-11 w-full rounded-[10px] border border-border bg-surface px-4 text-[0.9375rem] text-text-primary outline-none focus-visible:border-signal"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-[0.875rem] text-text-secondary">
            Serviço de interesse
          </label>
          <select
            id="service"
            name="service"
            className="h-11 w-full rounded-[10px] border border-border bg-surface px-4 text-[0.9375rem] text-text-primary outline-none focus-visible:border-signal"
          >
            <option value="">Selecione</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[0.875rem] text-text-secondary">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={5000}
          className="w-full rounded-[10px] border border-border bg-surface px-4 py-3 text-[0.9375rem] text-text-primary outline-none focus-visible:border-signal"
        />
      </div>

      {status === "error" && (
        <div role="alert">
          <Text variant="body" className="text-warning">
            {errorMessage}
          </Text>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-fit">
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </Button>
    </form>
  );
}
