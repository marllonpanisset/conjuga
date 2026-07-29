import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";

import { Hero, ServiceCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";

import { services } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Sistemas web, automações, integrações e inteligência artificial aplicada para empresas de serviços. Presença digital como serviço complementar e porta de entrada para empresas que estruturam sua base digital.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Serviços",
            path: "/servicos",
          },
        ])}
      />

      <Hero
        eyebrow="Serviços"
        title="Engenharia de software construída para desafios reais de negócio"
        description="Partimos do problema para definir sistemas web, automações, integrações e soluções com inteligência artificial aplicada. A presença digital é um serviço complementar e uma porta de entrada para empresas que ainda estão estruturando sua base digital."
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
          title="Não sabe qual solução faz sentido?"
          description="Conte o problema e o contexto da sua empresa para identificarmos a solução mais adequada ao seu momento."
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
