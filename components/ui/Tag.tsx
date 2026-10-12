import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  className?: string;
}

/** Etiqueta compacta para metadados (segmento, tecnologia, categoria). */
export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[var(--radius-xs)] border border-border bg-surface px-2.5 py-1 font-mono text-[0.75rem] leading-none tracking-[0.02em] text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
