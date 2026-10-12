import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /**
   * `paper` é o fundo padrão do documento.
   * `raised` usa uma superfície clara para separar blocos longos.
   * `ink` inverte para tinta escura — reservado para blocos de fechamento.
   */
  tone?: "paper" | "raised" | "ink";
  /** Desenha uma régua horizontal no topo da seção. */
  rule?: boolean;
  /** Rótulo acessível da região, quando ela precisa de nome. */
  "aria-labelledby"?: string;
}

/**
 * Ritmo vertical do site. A respiração entre seções é parte da identidade:
 * blocos amplos, sem cartões empilhados.
 */
export function Section({
  children,
  className,
  id,
  tone = "paper",
  rule = false,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative py-[clamp(4.5rem,9vw,7.5rem)]",
        tone === "raised" && "bg-surface-elevated",
        tone === "ink" && "bg-[#15181d] text-[#f4f1ea]",
        rule && "border-t border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}
