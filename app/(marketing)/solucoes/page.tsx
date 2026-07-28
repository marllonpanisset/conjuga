import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";
import { Hero, NicheCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";

import { niches } from "@/content/nichos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Soluções por segmento",
  description:
    "Soluções digitais personalizadas para clínicas, advocacia, contabilidade, consultorias, serviços locais e negócios B2B.",
  path: "/solucoes",
});

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
        eyebrow="Soluções por segmento"
        title="Tecnologia aplicada às necessidades de cada negócio"
        description="Cada empresa possui desafios específicos. A Fyrmma cria soluções digitais considerando o contexto, os processos e os objetivos de cada segmento."
      />

      <Section>
        <Container>
          <Grid cols={3}>
            {niches.map((niche) => (
              <NicheCard key={niche.slug} niche={niche} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Sua empresa tem um desafio específico?"
          description="Conte o contexto do seu negócio e vamos identificar a solução digital mais adequada."
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
