import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-border bg-surface p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 hover:border-signal/30 hover:shadow-[var(--shadow-card-hover)]",
        className
      )}
    >
      {children}
    </div>
  );
}
