import type { ReactNode } from "react";

import { Reveal, RevealText } from "@/components/motion";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

/**
 * Abertura das páginas internas.
 *
 * Composição editorial — título à esquerda, texto de apoio à direita —
 * deliberadamente diferente do hero assimétrico da Home, para que cada
 * página tenha abertura própria sem sair do mesmo sistema.
 */
export function Hero({ eyebrow, title, description, actions }: HeroProps) {
  return (
    <section className="relative border-b border-border">
      <Container className="py-[clamp(3.5rem,7vw,6rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal y={10}>
              <Badge marked>{eyebrow}</Badge>
            </Reveal>

            <Heading
              as="h1"
              className="ops-display mt-7 max-w-[26ch] font-display text-display-l"
            >
              <RevealText text={title} mode="mount" stagger={0.04} />
            </Heading>
          </div>

          <Reveal
            delay={0.12}
            y={14}
            className="lg:col-span-5 lg:pb-2"
          >
            <Text variant="lead" className="max-w-xl">
              {description}
            </Text>

            {actions && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {actions}
              </div>
            )}
          </Reveal>
        </div>

        <div className="mt-12 flex items-center gap-4 border-t border-border pt-4 lg:mt-16">
          <span className="label-mono">Conjuga</span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
          <span className="label-mono">{eyebrow}</span>
        </div>
      </Container>
    </section>
  );
}
