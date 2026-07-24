import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Grid } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, CTASection } from "@/components/sections";
import { FadeIn } from "@/components/motion";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description: "Conheça o estúdio digital Fyrmma: engenharia, tecnologia e soluções sob medida para pequenas e médias empresas.",
  path: "/sobre",
});

const differentiators = [
  { title: "Engenharia, não template", description: "Cada projeto é desenvolvido a partir do zero para o problema específico do cliente." },
  { title: "Foco em resultado", description: "O objetivo de qualquer solução é gerar oportunidade real de negócio, não só existir." },
  { title: "Especialização por segmento", description: "Entendemos as dores específicas de cada nicho que atendemos, não tratamos todo cliente como igual." },
  { title: "Tecnologia moderna", description: "Usamos a mesma stack que sustenta produtos SaaS de referência no mercado." },
];

export default function SobrePage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Sobre a Fyrmma"
        title="Um estúdio digital construído em torno de engenharia"
        description="A Fyrmma nasceu para resolver um problema específico: pequenas e médias empresas precisam de presença digital que funcione como ferramenta de negócio — não de mais um site genérico."
      />

      <Section surface>
        <Container>
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <Text variant="caption">Proposta de valor</Text>
              <Heading as="h2" className="mt-3">
                Presença digital que gera resultado real
              </Heading>
              <Text variant="lead" className="mt-4">
                Não vendemos sites — vendemos soluções digitais que transformam presença online em geração de
                oportunidades, autoridade e credibilidade para o seu negócio.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="caption">Diferenciais</Text>
          <Heading as="h2" className="mt-3 max-w-lg">
            O que muda quando o projeto é sob medida
          </Heading>
          <Grid cols={2} className="mt-10">
            {differentiators.map((item) => (
              <div key={item.title}>
                <Heading as="h3">{item.title}</Heading>
                <Text variant="muted" className="mt-2">
                  {item.description}
                </Text>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Quer conhecer melhor como trabalhamos?"
          description="Agende uma conversa e entenda como a Fyrmma pode resolver o problema da sua empresa."
          actions={
            <Button href="/contato" size="lg">
              Falar com a Fyrmma
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
