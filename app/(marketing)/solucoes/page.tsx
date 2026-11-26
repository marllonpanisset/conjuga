
import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import {
  Button,
  ButtonArrow,
  Container,
  Heading,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";
import { CTASection, Hero } from "@/components/sections";
import { Stagger, StaggerItem } from "@/components/motion";
import { JsonLd } from "@/components/seo/JsonLd";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Soluções",
  description:
    "Conheça as soluções digitais da Conjuga para hospedagens e clínicas. Tecnologia aplicada às necessidades de cada negócio.",
  path: "/solucoes",
});

const solutions = [
  {
    name: "Hospedagens",
    description:
      "Soluções digitais para pousadas, hotéis, chalés e outros negócios de hospedagem. Apresente sua estrutura, organize informações e melhore a experiência dos visitantes.",
    href: "/solucoes/hospedagens",
  },
  {
    name: "Clínicas",
    description:
      "Soluções digitais para clínicas e negócios da área da saúde. Fortaleça sua presença digital, apresente seus serviços e encontre novas formas de organizar processos.",
    href: "/solucoes/clinicas",
  },
] as const;

export default function SolucoesPage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Soluções",
            path: "/solucoes",
          },
        ])}
      />

      <Hero
        eyebrow="Soluções"
        title="Tecnologia aplicada à realidade de cada negócio."
        description="Cada segmento possui desafios próprios. Desenvolvemos soluções digitais considerando as necessidades, os processos e os objetivos de cada operação."
        actions={
          <Button href="/contato" size="lg">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />

      <Section tone="raised" rule>
        <Container>
          <SectionHeader
            label="Soluções por segmento"
            title="Conheça as áreas em que atuamos"
            lead="Entendemos as particularidades de cada negócio para desenvolver soluções digitais alinhadas à sua realidade."
          />

          <Stagger
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border sm:grid-cols-2 lg:mt-16"
          >
            {solutions.map((solution, index) => (
              <StaggerItem
                as="li"
                key={solution.href}
                className="flex min-h-[18rem] flex-col justify-between gap-8 bg-surface p-6 lg:p-8"
              >
                <div>
                  <span className="item-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Heading as="h2" className="mt-5 text-heading-m">
                    {solution.name}
                  </Heading>

                  <Text className="mt-4 max-w-xl">
                    {solution.description}
                  </Text>
                </div>

                <div className="border-t border-border pt-5">
                  <Button
                    href={solution.href}
                    size="md"
                    variant="secondary"
                  >
                    Conhecer solução <ButtonArrow size={15} />
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Text variant="muted" className="mt-6 max-w-3xl">
            Cada projeto é desenvolvido de acordo com as necessidades e o
            escopo definido para cada negócio.
          </Text>
        </Container>
      </Section>

      <CTASection
        title="Seu negócio tem outros desafios?"
        description="Conte um pouco sobre sua operação. Vamos entender suas necessidades antes de definir a tecnologia e o escopo da solução."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
