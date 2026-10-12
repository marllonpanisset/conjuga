"use client";

import { m, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import { easeSignature, motionTokens } from "@/lib/motion";
import { useMounted } from "./useMounted";

interface RuleFillProps {
  className?: string;
  /** Atraso em segundos dentro da sequência da seção. */
  delay?: number;
  /** Cor da régua. */
  tone?: "signal" | "ink";
}

/**
 * Régua que se desenha quando entra na viewport.
 *
 * Usada para marcar progressão — passos de um método, itens de uma lista —
 * sem introduzir caixas ou sombras.
 */
export function RuleFill({ className, delay = 0, tone = "signal" }: RuleFillProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useMounted();

  if (reduceMotion || !mounted) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "block h-px w-full",
          tone === "signal" ? "bg-signal" : "bg-[#15181d]",
          className,
        )}
      />
    );
  }

  return (
    <m.span
      aria-hidden="true"
      className={cn(
        "block h-px w-full origin-left",
        tone === "signal" ? "bg-signal" : "bg-[#15181d]",
        className,
      )}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
      transition={{
        duration: motionTokens.duration.slow,
        delay,
        ease: easeSignature,
      }}
    />
  );
}
