import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Grid } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn } from "@/components/motion";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "Conheça a Fyrmma, empresa de engenharia digital que transforma problemas operacionais em soluções simples e evolutivas.",
  path: "/sobre",
});

const principles = [
  {
    title: "Entendimento antes da tecnologia",
    description:
      "Antes de desenvolver qualquer solução, entendemos objetivos, processos e desafios para identificar o caminho mais adequado.",
  },
  {
    title: "Soluções pensadas para cada negócio",
    description:
      "Cada empresa possui uma realidade diferente. Criamos experiências digitais considerando contexto, público e necessidades específicas.",
  },
  {
    title: "Tecnologia aplicada a objetivos reais",
    description:
      "Aplicamos tecnologia para resolver problemas específicos, melhorar processos e criar oportunidades reais para empresas.",
  },
];

const differentiators = [
  {
    title: "Engenharia digital",
    description:
      "Projetamos soluções considerando arquitetura, performance e evolução, não apenas páginas isoladas.",
  },
  {
    title: "Foco no problema",
    description:
      "O ponto inicial é sempre a necessidade do negócio. A tecnologia entra como ferramenta para resolver.",
  },
  {
    title: "Processo transparente",
    description:
      "Cada etapa é construída com clareza, desde o entendimento inicial até a entrega da solução.",
  },
  {
    title: "Simplicidade e evolução",
    description:
      "Priorizamos soluções fáceis de entender, manter e expandir, sem complexidade desnecessária.",
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
        eyebrow="Sobre a Fyrmma"
        title="Engenharia digital orientada aos problemas do negócio"
        description="A Fyrmma transforma operações manuais em processos digitais mais eficientes por meio de software, automação, integrações e inteligência artificial aplicada."
      />

      <Section surface>
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <Text variant="caption">Nossa abordagem</Text>

              <Heading as="h2" className="mt-3">
                Tecnologia começa entendendo o negócio
              </Heading>

              <Text variant="lead" className="mt-4">
                Antes do código existe um problema para resolver. Nosso trabalho
                começa entendendo objetivos, processos e oportunidades para
                construir soluções digitais alinhadas à realidade de cada
                empresa.
              </Text>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Text variant="caption">Princípios</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Como pensamos cada projeto
            </Heading>
          </FadeIn>

          <Grid cols={3} className="mt-10">
            {principles.map((item) => (
              <div key={item.title}>
                <Heading as="h3">{item.title}</Heading>

                <Text variant="muted" className="mt-3">
                  {item.description}
                </Text>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <FadeIn>
            <Text variant="caption">Diferenciais</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              O que orienta nossas entregas
            </Heading>
          </FadeIn>

          <Grid cols={2} className="mt-10">
            {differentiators.map((item) => (
              <div key={item.title}>
                <Heading as="h3">{item.title}</Heading>

                <Text variant="muted" className="mt-3">
                  {item.description}
                </Text>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Tem um processo ou oportunidade para melhorar?"
          description="Conte o contexto da sua empresa e vamos avaliar a solução mais adequada para o seu momento."
          actions={
            <Button href="/contato" size="lg">
              Conversar com a Fyrmma
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
