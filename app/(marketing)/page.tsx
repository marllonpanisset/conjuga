import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Divider, Grid } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, ServiceCard, NicheCard, CaseCard, ProcessStep, CTASection, StatsBlock } from "@/components/sections";
import { FadeIn } from "@/components/motion";
import { services } from "@/content/servicos";
import { niches } from "@/content/nichos";
import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Fyrmma — Estúdio digital de engenharia e tecnologia",
  description:
    "Desenvolvimento web, sistemas personalizados e automações sob medida para pequenas e médias empresas. Presença digital que gera resultado real.",
  path: "/",
});

const processSteps = [
  { title: "Diagnóstico", description: "Entendemos seu processo real, seu público e o problema específico que a solução precisa resolver." },
  { title: "Arquitetura", description: "Planejamos a solução — páginas, sistema ou automação — antes de escrever qualquer código." },
  { title: "Desenvolvimento", description: "Construímos sob medida, com engenharia de verdade, não com adaptação de templates prontos." },
  { title: "Evolução contínua", description: "Acompanhamos e evoluímos a solução junto com o crescimento do seu negócio." },
];

const stats = [
  { value: "4", label: "linhas de solução digital" },
  { value: "6", label: "segmentos especializados" },
  { value: "100%", label: "sob medida, sem templates" },
  { value: "1", label: "estúdio, um único ponto de contato" },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Estúdio digital de engenharia"
        title="Presença digital que funciona como ferramenta de negócio"
        description="Desenvolvimento web, sistemas personalizados e automações construídos sob medida — sem templates, sem genérico, sem enrolação de agência."
        actions={
          <>
            <Button href="/contato" size="lg">
              Falar com especialista <ArrowRight size={18} />
            </Button>
            <Button href="/servicos" variant="secondary" size="lg">
              Ver serviços
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
              Quatro formas de resolver problemas reais de presença digital
            </Heading>
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
              Como funciona o processo de trabalho
            </Heading>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.title} index={i + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Text variant="caption">Segmentos</Text>
            <Heading as="h2" className="mt-3 max-w-lg">
              Soluções pensadas para o seu segmento
            </Heading>
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
              Resultado real em projetos reais
            </Heading>
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
          title="Pronto para transformar seu site em ferramenta de negócio?"
          description="Conte o contexto da sua empresa e receba uma proposta de solução sob medida."
          actions={
            <Button href="/contato" size="lg">
              Solicitar proposta
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
