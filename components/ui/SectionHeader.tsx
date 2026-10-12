import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { Heading } from "./Heading";
import { Text } from "./Text";

interface SectionHeaderProps {
  /** Rótulo técnico que identifica o bloco na estrutura da página. */
  label: string;
  title: string;
  /** Parágrafo de abertura, em tamanho de lede. */
  lead?: string;
  /** Ação exibida abaixo do lede, em todos os breakpoints. */
  actions?: ReactNode;
  /** Ocupa a coluna estreita da esquerda em vez de centralizar. */
  layout?: "split" | "stack";
  className?: string;
  titleClassName?: string;
}

/**
 * Cabeçalho canônico de seção.
 *
 * `split` é a composição padrão: rótulo na primeira coluna, título e lede na
 * coluna de leitura. `stack` empilha tudo — Reservado para blocos curtos.
 */
export function SectionHeader({
  label,
  title,
  lead,
  actions,
  layout = "split",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        layout === "split"
          ? "grid gap-6 md:grid-cols-12 md:gap-8"
          : "max-w-3xl",
        className,
      )}
    >
      <div className={cn(layout === "split" && "md:col-span-3 lg:col-span-2")}>
        <Badge marked>{label}</Badge>
      </div>

      <div className={cn(layout === "split" && "md:col-span-9 lg:col-span-8")}>
        <Heading as="h2" className={cn("max-w-3xl", titleClassName)}>
          {title}
        </Heading>

        {lead && (
          <Text variant="lead" className="mt-5 max-w-2xl">
            {lead}
          </Text>
        )}

        {actions && layout === "split" && (
          <div className="mt-8">{actions}</div>
        )}
      </div>
    </div>
  );
}
