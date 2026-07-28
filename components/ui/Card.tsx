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
        `
        rounded-[16px]
        border
        border-border
        bg-surface
        p-6
        shadow-[0_1px_2px_rgba(0,0,0,0.24),0_12px_28px_-24px_rgba(0,0,0,0.8)]
        transition-[border-color,background-color,box-shadow]
        duration-200
        ease-[var(--ease-signature)]
        md:p-7
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
