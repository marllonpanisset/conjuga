"use client";

import { Button, ButtonArrow } from "@/components/ui/Button";
import { analyticsEvents, trackEvent } from "./events";

/**
 * CTA principal "Conte seu desafio" com rastreamento de conversão.
 *
 * Vive num Client Component dedicado porque a página Home é renderizada no
 * servidor: `onClick` não pode atravessar a fronteira server→client como
 * prop. O bloco de origem (`hero` ou `final`) é string serializável e define
 * qual evento é enviado, sem carregar dados pessoais.
 */
export function TrackedContactCta({ bloco }: { bloco: "hero" | "final" }) {
  const eventName =
    bloco === "hero"
      ? analyticsEvents.ctaContatoHero
      : analyticsEvents.ctaContatoFinal;

  return (
    <Button
      href="/contato"
      size="lg"
      variant="accent"
      onClick={() => trackEvent(eventName)}
    >
      Conte seu desafio <ButtonArrow />
    </Button>
  );
}
