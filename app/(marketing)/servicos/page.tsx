import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid } from "@/components/ui";
import { Hero, ServiceCard, CTASection } from "@/components/sections";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/servicos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Landing Pages, Sites Institucionais, Sistemas Web Personalizados e Automações e Integrações — soluções digitais sob medida da Fyrmma.",
  path: "/servicos",
});

export default function ServicosPage() {
  return (
    <PageWrapper>
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
