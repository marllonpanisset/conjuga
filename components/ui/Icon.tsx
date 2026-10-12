import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface IconProps {
  icon: LucideIcon;
  className?: string;
  size?: number;
  /**
   * Envolve o ícone em um contêiner com régua própria — usado quando o ícone
   * é o elemento âncora de um bloco. Padrão: true.
   */
  contained?: boolean;
}

export function Icon({
  icon: LucideIconComponent,
  className,
  size = 20,
  contained = true,
}: IconProps) {
  if (!contained) {
    return (
      <LucideIconComponent
        size={size}
        strokeWidth={1.5}
        className={cn("text-signal", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface text-signal",
        className,
      )}
      style={{ width: size + 20, height: size + 20 }}
    >
      <LucideIconComponent size={size} strokeWidth={1.5} />
    </span>
  );
}
