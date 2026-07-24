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
    "Desenvolvimento web, sistemas personalizados e automações sob medida para empresas que precisam transformar processos em soluções digitais.",
  path: "/",
});

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Analisamos seu negócio, processos e objetivos para entender o problema correto antes da solução.",
  },
  {
    title: "Arquitetura",
    description:
      "Definimos estrutura, tecnologia e experiência antes de iniciar o desenvolvimento.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construímos soluções personalizadas com código limpo, performance e escalabilidade.",
  },
  {
    title: "Evolução contínua",
    description:
      "Acompanhamos melhorias e novas necessidades conforme seu negócio cresce.",
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
        title="Soluções digitais sob medida para empresas que querem evoluir"
        description="Criamos sites, sistemas e automações personalizados para transformar necessidades reais de negócio em experiências digitais eficientes."
        actions={
          <>
            <Button href="/contato" size="lg">
              Iniciar um projeto <ArrowRight size={18} />
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
              Quatro linhas de solução para construir presença digital, melhorar
              processos e criar ferramentas personalizadas.
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
              Um processo pensado antes do código
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Cada projeto começa entendendo o problema. A tecnologia entra como
              ferramenta para criar uma solução eficiente.
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
              Estratégias digitais adaptadas ao seu mercado
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Cada negócio possui processos e necessidades diferentes.
              Desenvolvemos soluções considerando o contexto de cada segmento.
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
              Estudos de soluções digitais
            </Heading>

            <Text variant="lead" className="mt-4 max-w-xl">
              Explorações de interfaces, sistemas e experiências digitais
              criadas para demonstrar possibilidades de aplicação.
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
          title="Tem um problema digital para resolver?"
          description="Conte o contexto da sua empresa e vamos encontrar a solução mais adequada para sua necessidade."
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
