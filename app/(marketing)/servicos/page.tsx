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
    "Landing Pages, Sites Institucionais, Sistemas Web Personalizados e Automações e Integrações — soluções digitais sob medida da Fyrmma.",

  path: "/servicos",
});

/**
 * Generates Service listing structured data.
 *
 * ItemList helps search engines understand that this page
 * contains a collection of available services.
 */
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
      {/* Breadcrumb structured data improves navigation understanding. */}
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

      {/* Service collection structured data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesListJsonLd()),
        }}
      />

      <Hero
        eyebrow="Serviços"
        title="Quatro linhas de solução, um único padrão de engenharia"
        description="Cada serviço resolve um problema específico de presença digital — sempre desenvolvido sob medida, nunca adaptado de um template."
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
          title="Não sabe qual serviço resolve seu problema?"
          description="Conte sua situação atual e indicamos a solução mais adequada."
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
