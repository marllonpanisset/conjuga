import type { ReactNode } from "react";

import { Reveal } from "@/components/motion";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

interface CTASectionProps {
  title: string;
  description: string;
  actions: ReactNode;
}

/**
 * Bloco de fechamento da jornada.
 *
 * A única superfície escura do site: a inversão marca a passagem para a
 * conversa sem precisar de caixa, sombra ou gradiente.
 */
export function CTASection({ title, description, actions }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface text-text-primary">
      <Container className="py-[clamp(4rem,8vw,7rem)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal y={16} className="lg:col-span-7">
            <p className="label-mono flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-signal"
              />
              Próximo passo
            </p>

            <Heading
              as="h2"
              className="mt-7 max-w-[22ch] font-display text-display-m text-[#f7f5f0]"
            >
              {title}
            </Heading>
          </Reveal>

          <Reveal
            delay={0.1}
            y={14}
            className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12"
          >
            <Text className="max-w-xl text-[1.0625rem] leading-[1.6] text-[#f4f1ea]/70">
              {description}
            </Text>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {actions}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
