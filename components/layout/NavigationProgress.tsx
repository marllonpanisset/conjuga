"use client";

import { usePathname } from "next/navigation";
import { m, useReducedMotion } from "framer-motion";

import { easeSignature } from "@/lib/motion";

/**
 * Régua de progresso da navegação.
 *
 * A barra é identificada pela rota atual: a cada navegação o React remonta o
 * elemento e a animação roda sozinha, sem estado nem efeito. O movimento
 * nasce depois da renderização — não segura a navegação nem cria espera
 * artificial. Desaparece por completo com movimento reduzido.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <m.div
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-signal"
      initial={{ scaleX: 0, opacity: 1 }}
      animate={{ scaleX: 1, opacity: [1, 1, 0] }}
      transition={{
        duration: 0.62,
        times: [0, 0.72, 1],
        ease: easeSignature,
      }}
    />
  );
}
