import type { LucideIcon } from "lucide-react";
import {
  DraftingCompass,
  Minimize2,
  Target,
  Workflow,
} from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { Heading } from "@/components/ui/Heading";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

interface Differential {
  title: string;
  description: string;
  icon: LucideIcon;
}

const differentials: Differential[] = [
  {
    title: "Entender antes de construir",
    description:
      "Soluções sob medida, definidas a partir do seu processo — nunca de um catálogo.",
    icon: Target,
  },
  {
    title: "Projetar antes de programar",
    description:
      "Arquitetura e fluxos definidos antes do código, para reduzir riscos e retrabalho.",
    icon: DraftingCompass,
  },
  {
    title: "Simplicidade que se mantém",
    description:
      "Soluções claras, documentadas e fáceis de manter e evoluir.",
    icon: Minimize2,
  },
  {
    title: "Automação com propósito",
    description:
      "Rotinas automatizadas e ferramentas conectadas; IA apenas quando gera valor real.",
    icon: Workflow,
  },
];

/**
 * Diferenciais como lista institucional régua-a-régua.
 *
 * Os ícones viraram marcas inline de 16px, em vez de chips flutuantes: a
 * seção ganha densidade editorial e escala para qualquer volume de itens.
 */
export function DifferentialsSection() {
  return (
    <Section tone="raised" rule>
      <div className="mx-auto w-full max-w-[var(--page-max)] px-5 sm:px-8 lg:px-12">
        <SectionHeader
          label="Diferenciais"
          title="Como nos diferenciamos"
        />

        <Stagger
          as="ul"
          className="mt-14 grid gap-x-12 gap-y-0 md:mt-16 lg:grid-cols-2 lg:gap-x-16"
        >
          {differentials.map(({ title, description, icon: Icon }, index) => (
            <StaggerItem
              as="li"
              key={title}
              className="group border-b border-border py-7 first:border-t first:border-border lg:py-8"
            >
              <div className="flex items-baseline gap-4">
                <span className="item-index w-8 shrink-0 transition-colors duration-200 group-hover:text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-signal"
                />

                <Heading as="h3" className="text-heading-s">
                  {title}
                </Heading>
              </div>

              <Text className="mt-3 max-w-[52ch] pl-12 text-small sm:pl-12">
                {description}
              </Text>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
