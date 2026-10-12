import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";
type HeadingSize = "xl" | "l" | "m" | "s";

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  className?: string;
  /**
   * Sobrescreve o tamanho padrão do nível. Use quando a hierarquia semântica
   * e a escala visual precisam divergir (ex.: h2 com peso de display).
   */
  size?: HeadingSize;
}

const levelStyles: Record<HeadingLevel, string> = {
  h1: "text-[length:var(--step-display-l)] leading-[1.04] tracking-[-0.03em]",
  h2: "text-[length:var(--step-display-m)] leading-[1.12] tracking-[-0.022em]",
  h3: "text-[length:var(--step-heading-m)] leading-[1.25] tracking-[-0.012em]",
  h4: "text-[length:var(--step-heading-s)] leading-[1.3] tracking-[-0.008em]",
};

const sizeStyles: Record<HeadingSize, string> = {
  xl: "text-[length:var(--step-display-xl)] leading-[1.02] tracking-[-0.035em]",
  l: "text-[length:var(--step-display-l)] leading-[1.05] tracking-[-0.03em]",
  m: "text-[length:var(--step-display-m)] leading-[1.12] tracking-[-0.022em]",
  s: "text-[length:var(--step-heading-m)] leading-[1.25] tracking-[-0.012em]",
};

/**
 * Títulos do sistema. O peso é sempre Medium no Space Grotesk: a hierarquia
 * vem do tamanho e do espaçamento, não do negrito.
 */
export function Heading({ as = "h2", children, className, size }: HeadingProps) {
  const Tag = as as ElementType;

  return (
    <Tag
      className={cn(
        "font-display font-medium text-balance text-text-primary",
        size ? sizeStyles[size] : levelStyles[as],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
