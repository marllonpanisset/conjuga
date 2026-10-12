import { cn } from "@/lib/utils";

/**
 * Régua horizontal do sistema. Usada para separar blocos de conteúdo sem
 * introduzir caixas ou sombras.
 */
export function Divider({ className }: { className?: string }) {
  return <div role="separator" className={cn("h-px w-full bg-border", className)} />;
}
