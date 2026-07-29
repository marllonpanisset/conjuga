import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";
import { Hero, CaseCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Projetos",
  description:
    "Projetos de engenharia de software publicados pela Fyrmma com contexto, problema, solução, tecnologias e resultados verificáveis.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Projetos",
            path: "/projetos",
          },
        ])}
      />

      <Hero
        eyebrow="Projetos"
        title="Experiência demonstrada com transparência"
        description="Publicamos apenas projetos reais, com contexto, problema, solução, tecnologias utilizadas e resultados quando for possível verificá-los."
      />

      <Section>
        <Container>
          <Grid cols={3}>
            {caseStudies.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </Grid>
          {caseStudies.length === 0 && (
            <p className="text-text-secondary">
              Nenhum projeto foi publicado até o momento.
            </p>
          )}
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Tem um desafio parecido?"
          description="Conte o contexto da sua empresa e vamos analisar qual solução digital faz sentido para sua necessidade."
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
