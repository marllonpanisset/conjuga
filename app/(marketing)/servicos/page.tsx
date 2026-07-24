import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";

import { Hero, ServiceCard, CTASection } from "@/components/sections";

import { Button } from "@/components/ui/Button";

import { services } from "@/content/servicos";

import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",

  description:
    "Conheça as soluções digitais da Fyrmma: landing pages, sites institucionais, sistemas personalizados e automações para empresas.",

  path: "/servicos",
});

function servicesListJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "ItemList",

    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: service.name,

      url: `https://fyrmma.com/servicos/${service.slug}`,
    })),
  };
}

export default function ServicosPage() {
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
                name: "Serviços",
                path: "/servicos",
              },
            ]),
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesListJsonLd()),
        }}
      />

      <Hero
        eyebrow="Serviços"
        title="Soluções digitais construídas para diferentes desafios do negócio"
        description="Estruturamos experiências digitais, sistemas e automações considerando o contexto de cada empresa, seus processos e seus objetivos."
      />

      <Section>
        <Container>
          <Grid cols={2}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Qual solução faz sentido para sua empresa?"
          description="Conte o contexto do seu negócio e vamos identificar o caminho digital mais adequado para sua necessidade."
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
