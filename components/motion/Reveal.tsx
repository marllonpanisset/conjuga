"use client";

import { m } from "framer-motion";
import type { ElementType, ReactNode } from "react";

import { easeSignature, motionTokens } from "@/lib/motion";
import { useMounted } from "./useMounted";

type MotionTag = typeof m.div;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos, usado para compor sequências. */
  delay?: number;
  /** Elemento renderizado — preserva a semântica do conteúdo. */
  as?: ElementType;
  /** Deslocamento vertical inicial. Padrão: 20px. */
  y?: number;
}

/**
 * Revelação padrão ao entrar na viewport: fade + deslocamento vertical curto.
 *
 * A animação roda uma única vez. Respeita `prefers-reduced-motion` via
 * useReducedMotion do Framer Motion, que desativa as variantes iniciais.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  y = motionTokens.offset.y,
}: RevealProps) {
  const mounted = useMounted();

  if (!mounted) {
    const StaticTag = as as ElementType;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const Component = m[as as "div"] as MotionTag;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{
        duration: motionTokens.duration.base,
        delay,
        ease: easeSignature,
      }}
    >
      {children}
    </Component>
  );
}
