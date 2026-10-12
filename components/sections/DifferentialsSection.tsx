import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Cog,
  DraftingCompass,
  Minimize2,
  ShieldCheck,
  Target,
  Workflow,
  Wrench,
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
    title: "Abordagem orientada ao negócio",
    description:
      "Entendemos o contexto, os objetivos e os desafios do negócio antes de propor qualquer solução tecnológica.",
    icon: Target,
  },
  {
    title: "Engenharia antes da implementação",
    description:
      "Planejamos arquitetura, fluxos e decisões técnicas antes de iniciar o desenvolvimento para reduzir riscos e retrabalho.",
    icon: DraftingCompass,
  },
  {
    title: "Foco em simplicidade",
    description:
      "Criamos soluções claras, objetivas e sustentáveis, priorizando facilidade de uso, manutenção e evolução.",
    icon: Minimize2,
  },
  {
    title: "Integração entre sistemas",
    description:
      "Conectamos ferramentas, plataformas e processos para reduzir silos e trabalho manual, além de centralizar informações.",
    icon: Workflow,
  },
  {
    title: "Automação de processos",
    description:
      "Automatizamos tarefas repetitivas para aumentar produtividade, reduzir erros operacionais e liberar a equipe para o trabalho principal.",
    icon: Cog,
  },
  {
    title: "Uso responsável de IA",
    description:
      "Aplicamos inteligência artificial apenas quando ela gera valor real, sempre com foco em qualidade, controle e confiabilidade.",
    icon: BrainCircuit,
  },
  {
    title: "Desenvolvimento sob medida",
    description:
      "Desenvolvemos soluções adaptadas às necessidades específicas de cada negócio, respeitando seu contexto, processos e objetivos.",
    icon: Wrench,
  },
  {
    title: "Preocupação com manutenção futura",
    description:
      "Construímos sistemas preparados para evoluir com segurança, documentação adequada e facilidade de manutenção.",
    icon: ShieldCheck,
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
          title="A Conjuga diferencia-se por:"
          lead="Sempre partindo do problema de negócio, nunca da tecnologia."
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
