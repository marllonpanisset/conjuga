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
    "Landing Pages, Sites Institucionais, Sistemas Web Personalizados e Automações e Integrações para empresas que precisam evoluir digitalmente.",
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
        title="Soluções digitais construídas para desafios reais de negócio"
        description="Criamos experiências digitais, sistemas personalizados e automações considerando os objetivos, processos e necessidades específicas de cada empresa."
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
          description="Conte o contexto da sua empresa e vamos identificar o caminho digital mais adequado para o seu momento."
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
