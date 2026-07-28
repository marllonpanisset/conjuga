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
        rounded-[20px]
        border
        border-border/60
        bg-surface/90
        backdrop-blur-sm
        p-7
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        transition-[border-color,background-color,box-shadow]
        duration-300
        ease-out
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}
