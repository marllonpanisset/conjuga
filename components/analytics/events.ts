import { getStoredConsent } from "./cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: [string, string, ...unknown[]]) => void;
  }
}

/**
 * Nomes dos eventos de conversão do site.
 *
 * Convenção: `origem_ação` em minúsculas, sem espaços e sem dados pessoais.
 * A página é implícita (o GA registra `page_location`); o nome carrega o
 * bloco de origem para distinguir funis no relatório.
 */
export const analyticsEvents = {
  /** Clique no CTA principal do hero da Home. */
  ctaContatoHero: "cta_contato_hero",
  /** Clique no CTA do bloco final da Home. */
  ctaContatoFinal: "cta_contato_final",
  /** Primeira interação com o formulário de contato. */
  formContatoInicio: "form_contato_inicio",
  /** Envio do formulário confirmado pelo servidor. */
  formContatoSucesso: "form_contato_sucesso",
} as const;

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents];

/**
 * Envia um evento ao Google Analytics somente quando o rastreamento é
 * permitido: ambiente de navegador, consentimento de cookies aceito e
 * `gtag` carregado (depende de `NEXT_PUBLIC_GA_MEASUREMENT_ID`).
 *
 * Fora dessas condições a chamada é ignorada em silêncio — inclusive no
 * SSR — para nunca rastrear sem consentimento nem quebrar a página.
 */
export function trackEvent(eventName: AnalyticsEventName): void {
  if (typeof window === "undefined") return;
  if (getStoredConsent() !== "accepted") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName);
}
