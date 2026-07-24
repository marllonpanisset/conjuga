import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";
import { Hero, CaseCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Projetos",
  description: "Cases reais de landing pages, sites institucionais, sistemas web e automações desenvolvidos pela Fyrmma.",
  path: "/projetos",
});

export default function ProjetosPage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Projetos"
        title="Resultado real em projetos reais"
        description="Cada projeto nasce de um problema específico. Veja como transformamos presença digital em ferramenta de negócio."
      />

      <Section>
        <Container>
          <Grid cols={3}>
            {caseStudies.map((c) => (
              <CaseCard key={c.slug} caseStudy={c} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Quer ser o próximo case de sucesso?"
          description="Conte o contexto da sua empresa e vamos planejar a solução ideal."
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
