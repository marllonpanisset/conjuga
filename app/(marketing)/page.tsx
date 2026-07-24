import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
  Divider,
  Grid,
} from "@/components/ui";
import { Button } from "@/components/ui/Button";

import {
  Hero,
  ServiceCard,
  NicheCard,
  CaseCard,
  ProcessStep,
  CTASection,
  StatsBlock,
} from "@/components/sections";

import { FadeIn } from "@/components/motion";

import { services } from "@/content/servicos";
import { niches } from "@/content/nichos";
import { caseStudies } from "@/content/projetos";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fyrmma — Estúdio digital de engenharia e tecnologia",
  description:
    "Desenvolvimento web, sistemas personalizados e automações sob medida para empresas que precisam transformar desafios de negócio em soluções digitais.",
  path: "/",
});

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos seu negócio, processos e objetivos para identificar o problema correto antes de definir a solução.",
  },
  {
    title: "Arquitetura",
    description:
      "Planejamos estrutura, tecnologia e experiência para criar uma base sólida antes do desenvolvimento.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construímos soluções personalizadas com código limpo, performance e escalabilidade.",
  },
  {
    title: "Evolução contínua",
    description:
      "Acompanhamos melhorias e novas necessidades conforme sua empresa cresce e novos desafios surgem.",
  },
];

const stats = [
  {
    value: "4",
    label: "linhas de solução digital",
  },
  {
    value: "6",
    label: "segmentos atendidos",
  },
  {
    value: "100%",
    label: "desenvolvimento sob medida",
  },
  {
    value: "1",
    label: "estúdio, um único processo",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Estúdio digital de engenharia"
        title="Transformamos desafios de negócio em soluções digitais sob medida"
        description="Criamos sites, sistemas e automações para empresas que precisam melhorar sua presença digital, organizar processos e criar novas oportunidades."
        actions={
          <>
            <Button href="/contato" size="lg">
              Solicitar diagnóstico <ArrowRight size={18} />
            </Button>

            <Button href="/servicos" variant="secondary" size="lg">
              Conhecer soluções
            </Button>
          </>
        }
      />

      <Section>
        <Container>
          <StatsBlock stats={stats} />
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <FadeIn>
            <Text variant="caption">Serviços</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Tecnologia aplicada aos desafios reais do seu negócio
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Da presença digital aos sistemas personalizados, desenvolvemos
              tecnologia alinhada aos objetivos e processos de cada empresa.
            </Text>
          </FadeIn>

          <Grid cols={4} className="mt-12">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <FadeIn>
            <Text variant="caption">Método</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Antes do código, entendemos o negócio
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Cada projeto começa com entendimento do problema. A tecnologia
              entra como ferramenta para construir uma solução eficiente e
              alinhada à realidade da empresa.
            </Text>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.title}
                index={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Text variant="caption">Soluções por segmento</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Soluções pensadas para diferentes desafios de negócio
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Cada empresa possui processos, objetivos e necessidades
              diferentes. Desenvolvemos soluções considerando o contexto de cada
              negócio.
            </Text>
          </FadeIn>

          <Grid cols={3} className="mt-12">
            {niches.map((niche) => (
              <NicheCard key={niche.slug} niche={niche} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <FadeIn>
            <Text variant="caption">Projetos</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Exemplos de soluções aplicadas a diferentes cenários
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Conceitos de interfaces, sistemas e experiências digitais criados
              para demonstrar como diferentes desafios podem ser transformados
              em soluções.
            </Text>
          </FadeIn>

          <Grid cols={3} className="mt-12">
            {caseStudies.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Tem um desafio digital para resolver?"
          description="Conte o contexto da sua empresa e vamos analisar o caminho mais adequado para transformar essa necessidade em uma solução."
          actions={
            <Button href="/contato" size="lg">
              Solicitar diagnóstico
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
