import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  /** Marca a badge com o sinal de cor, usada em rótulos de estado. */
  marked?: boolean;
}

/**
 * Rótulo de seção (eyebrow) no estilo de anotação técnica: monospaciado,
 * caixa alta, com ou sem marcador de cor.
 */
export function Badge({ children, className, marked = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-[length:var(--step-label)] font-medium uppercase tracking-[0.14em] text-text-muted",
        className,
      )}
    >
      {marked && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal"
        />
      )}
      {children}
    </span>
  );
}
