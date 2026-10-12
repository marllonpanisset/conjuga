import type { Metadata } from "next";
import Link from "next/link";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Button, ButtonArrow } from "@/components/ui";
import { Hero, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Stagger, StaggerItem } from "@/components/motion";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "Conheça a Conjuga, empresa brasileira de engenharia de software que ajuda empresas de serviços a organizar processos, fortalecer sua presença digital e evoluir sua operação.",
  path: "/sobre",
});

const principles = [
  {
    title: "Entender antes de construir",
    description:
      "Primeiro a operação e o problema; a solução vem depois.",
  },
  {
    title: "Simplicidade intencional",
    description:
      "Sem complexidade, dependências ou funcionalidades sem justificativa clara.",
  },
  {
    title: "Tecnologia com propósito",
    description:
      "Tecnologia para resolver o problema real, nunca por tendência.",
  },
  {
    title: "Manutenção no longo prazo",
    description:
      "Soluções fáceis de entender, manter e expandir.",
  },
  {
    title: "Decisões com contexto",
    description:
      "Arquitetura e integrações definidas pela realidade de cada negócio.",
  },
];

export default function SobrePage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Sobre",
            path: "/sobre",
          },
        ])}
      />

      <Hero
        eyebrow="Sobre a Conjuga"
        title="Engenharia de software para empresas de serviços"
        description="Desenvolvemos sistemas web, automações e integrações para empresas que precisam organizar processos manuais, conectar ferramentas e evoluir sua operação. Começamos entendendo o negócio. A tecnologia vem depois, de acordo com o problema e o momento de cada empresa."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start lg:col-span-3">
              <Text variant="caption">A empresa</Text>

              <Heading as="h2" className="mt-4 max-w-[20ch] text-heading-m">
                Engenharia de software aplicada ao dia a dia das empresas
              </Heading>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <Text variant="lead" className="max-w-2xl">
                A Conjuga é uma empresa de engenharia de software para
                empresas de serviços com processos manuais e ferramentas
                desconectadas.
              </Text>

              <Text className="mt-6 max-w-2xl">
                Em vez de começar pela tecnologia, entendemos a operação e
                definimos a solução adequada ao momento — preparada para
                evoluir junto com a empresa.
              </Text>

              <Text className="mt-6 max-w-2xl">
                Nosso compromisso é construir soluções claras e fáceis de
                manter, documentadas para acompanhar o crescimento da empresa.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Text variant="caption">Posicionamento</Text>

              <p className="mt-6 max-w-[20ch] font-display text-display-m font-medium leading-[1.12] tracking-[-0.022em] text-balance text-text-primary">
                Tecnologia por necessidade, nunca por tendência.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-border pt-7">
                <Heading as="h3" className="text-heading-m">
                  O que valorizamos
                </Heading>

                <Text className="mt-4 max-w-xl">
                  Cada projeto nasce do contexto da empresa. Priorizamos
                  clareza e simplicidade: tecnologia fácil de manter, que
                  acompanha o crescimento.
                </Text>
              </div>

              <Text variant="muted" className="mt-10">
                Conheça as soluções que desenvolvemos para empresas de serviços
                em nossos{" "}
                <Link href="/servicos" className="link-underline text-signal-strong">
                  serviços
                </Link>
                .
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Princípios</Text>

              <Heading as="h2" className="mt-4 max-w-[16ch] text-heading-m">
                Princípios que orientam nossas decisões
              </Heading>
            </div>

            <div className="lg:col-span-9">
              <Stagger as="ol" className="border-t border-border">
                {principles.map((item, index) => (
                  <StaggerItem
                    as="li"
                    key={item.title}
                    className="group grid gap-3 border-b border-border py-7 sm:grid-cols-[4rem_1fr] sm:gap-8"
                  >
                    <span className="item-index pt-1.5 transition-colors duration-200 group-hover:text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="max-w-2xl">
                      <Heading as="h3" className="text-heading-s">
                        {item.title}
                      </Heading>

                      <Text className="mt-2.5">{item.description}</Text>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Evolução</Text>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <Heading as="h2" className="max-w-[26ch] text-display-m">
                Soluções que evoluem junto com o seu negócio
              </Heading>

              <Text variant="lead" className="mt-7 max-w-2xl">
                Cada empresa está em um momento diferente — presença digital,
                processos ou sistemas internos. O objetivo é uma base que
                evolui sem recomeçar do zero, incorporada de forma gradual.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Vamos entender o próximo desafio da sua empresa?"
        description="Conheça nossos serviços ou conte o desafio da sua empresa para iniciarmos a conversa."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conversar com a Conjuga <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
