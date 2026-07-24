import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";
import { Hero, NicheCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";

import { niches } from "@/content/nichos";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Soluções por segmento",
  description:
    "Soluções digitais personalizadas para clínicas, advocacia, contabilidade, consultorias, serviços locais e negócios B2B.",
  path: "/solucoes",
});

function solutionsListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: niches.map((niche, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: niche.name,
      url: `https://fyrmma.com/solucoes/${niche.slug}`,
    })),
  };
}

export default function SolucoesPage() {
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              {
                name: "Home",
                path: "/",
              },
              {
                name: "Soluções",
                path: "/solucoes",
              },
            ]),
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsListJsonLd()),
        }}
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
