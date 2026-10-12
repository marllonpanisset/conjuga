import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: "body" | "lead" | "muted" | "caption" | "label";
}

const variantStyles: Record<NonNullable<TextProps["variant"]>, string> = {
  body: "text-[length:var(--step-body)] leading-[1.65] text-text-secondary",
  lead: "lede",
  muted: "text-[length:var(--step-small)] leading-[1.6] text-text-muted",
  /** Rótulo técnico monospaciado, sempre em caixa alta. */
  caption: "label-mono",
  label: "label-mono text-text-secondary",
};

export function Text({
  as = "p",
  children,
  className,
  variant = "body",
}: TextProps) {
  const Tag = as as ElementType;

  return (
    <Tag className={cn(variantStyles[variant], className)}>{children}</Tag>
  );
}
