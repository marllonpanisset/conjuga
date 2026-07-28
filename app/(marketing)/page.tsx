import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
  Grid,
} from "@/components/ui";
import { Button } from "@/components/ui/Button";

import {
  ServiceCard,
  NicheCard,
  CaseCard,
  ProcessStep,
  CTASection,
  StatsBlock,
} from "@/components/sections";
import { HomeHero } from "@/components/sections/HomeHero";

import { services } from "@/content/servicos";
import { niches } from "@/content/nichos";
import { caseStudies } from "@/content/projetos";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sites, sistemas e automações para empresas",
  description:
    "Desenvolvemos sites profissionais, sistemas personalizados e automações para empresas que querem atrair clientes, otimizar processos e crescer com tecnologia.",
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
    value: "10+",
    label: "anos de experiência em tecnologia",
  },
  {
    value: "100%",
    label: "projetos desenvolvidos sob medida",
  },
  {
    value: "Web",
    label: "sites e sistemas modernos",
  },
  {
    value: "IA",
    label: "automação inteligente de processos",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <HomeHero
        eyebrow="Sites, sistemas e automações para empresas"
        title="Criamos tecnologia que ajuda empresas a vender mais e trabalhar melhor"
        description="Desenvolvemos sites profissionais, sistemas personalizados e automações para empresas que querem atrair clientes, otimizar processos e crescer com tecnologia."
        actions={
          <>
            <Button href="/contato" size="lg">
              Solicitar orçamento <ArrowRight size={18} />
            </Button>

            <Button href="/servicos" variant="secondary" size="lg">
              Ver soluções
            </Button>
          </>
        }
      />

      <Section className="py-0">
        <Container>
          <StatsBlock stats={stats} />
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-3 md:pt-2">
              Serviços
            </Text>

            <div className="md:col-span-8 md:col-start-5">
              <Heading as="h2" className="max-w-2xl">
                Soluções digitais para cada fase do seu negócio
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Da presença digital aos sistemas personalizados, desenvolvemos
                tecnologia alinhada aos objetivos, processos e necessidades de
                cada empresa.
              </Text>
            </div>
          </div>

          <Grid cols={4} className="mt-12 md:mt-16">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface className="py-24 md:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-3 md:pt-2">
              Método
            </Text>

            <div className="md:col-span-8 md:col-start-5">
              <Heading as="h2" className="max-w-2xl">
                Antes do código, entendemos o negócio
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Cada projeto começa com entendimento do problema. A tecnologia
                entra como ferramenta para construir uma solução eficiente e
                alinhada à realidade da empresa.
              </Text>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
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

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-3 md:pt-2">
              Soluções por segmento
            </Text>

            <div className="md:col-span-8 md:col-start-5">
              <Heading as="h2" className="max-w-2xl">
                Tecnologia criada para diferentes segmentos
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Cada empresa possui processos, objetivos e necessidades
                diferentes. Desenvolvemos soluções considerando o contexto de
                cada negócio.
              </Text>
            </div>
          </div>

          <Grid cols={3} className="mt-12 md:mt-16">
            {niches.map((niche) => (
              <NicheCard key={niche.slug} niche={niche} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface className="py-24 md:py-32">
        <Container>
          <div className="grid gap-5 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-3 md:pt-2">
              Projetos
            </Text>

            <div className="md:col-span-8 md:col-start-5">
              <Heading as="h2" className="max-w-2xl">
                Soluções criadas para diferentes negócios
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Projetos de interfaces, sistemas e experiências digitais
                desenvolvidos para demonstrar como desafios podem ser
                transformados em soluções eficientes.
              </Text>
            </div>
          </div>

          <Grid cols={3} className="mt-12 md:mt-16">
            {caseStudies.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <CTASection
          title="Pronto para transformar sua ideia em uma solução digital?"
          description="Conte seu objetivo e vamos encontrar a melhor tecnologia para sua empresa."
          actions={
            <Button href="/contato" size="lg">
              Solicitar orçamento
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
