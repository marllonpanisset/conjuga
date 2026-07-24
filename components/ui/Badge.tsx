import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

/** Eyebrow/rótulo estilo "código" — reforça o posicionamento técnico da marca */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
