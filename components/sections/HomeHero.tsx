import type { ReactNode } from "react";

import { Reveal, RevealText, Stagger, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface HomeHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions: ReactNode;
}

/**
 * Etapas reais do método, nas mesmas palavras usadas na seção Método.
 * O painel ilustra o processo de trabalho — sem status, métricas ou prazos.
 */
const operationStages = [
  "Entendimento do contexto",
  "Planejamento",
  "Implantação",
  "Suporte e evolução contínua",
];

interface OperationPanelProps {
  stages: string[];
}

/**
 * Painel de operação: as etapas do método em formato de console,
 * com numeração de estágio. Leitura estática sem JavaScript.
 */
function OperationPanel({ stages }: OperationPanelProps) {
  return (
    <div className="border border-border-strong bg-surface">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5 sm:px-6">
        <p className="label-mono">Método de operação</p>
        <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />
      </div>

      <Stagger as="ol" className="divide-y divide-border">
        {stages.map((stage, index) => (
          <StaggerItem
            as="li"
            key={stage}
            className="group flex items-baseline gap-4 px-5 py-4 transition-colors duration-200 hover:bg-surface-elevated sm:gap-5 sm:px-6"
          >
            <span className="item-index text-signal">
              S{index + 1}
            </span>
            <span className="text-[0.9375rem] font-medium leading-snug text-text-primary">
              {stage}
            </span>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="border-t border-border px-5 py-3.5 sm:px-6">
        <p className="label-mono">Do entendimento à operação</p>
      </div>
    </div>
  );
}

/**
 * Abertura da Home (Sala de Operações).
 *
 * Composição assimétrica: título e CTAs à esquerda, painel do processo de
 * engenharia à direita. Sem grade decorativa, sem glows.
 */
export function HomeHero({
  eyebrow,
  title,
  description,
  actions,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Container className="relative py-[clamp(4rem,9vw,7.5rem)]">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal y={10}>
              <Badge marked>{eyebrow}</Badge>
            </Reveal>

            <Heading
              as="h1"
              className="ops-display mt-8 max-w-[22ch] text-balance font-display text-display-xl"
            >
              <RevealText text={title} mode="mount" stagger={0.05} />
            </Heading>

            <Reveal delay={0.15} y={14}>
              <Text variant="lead" className="mt-8 max-w-xl">
                {description}
              </Text>
            </Reveal>

            <Reveal delay={0.25} y={14}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.3}
            y={18}
            className="lg:col-span-5"
          >
            <OperationPanel stages={operationStages} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
