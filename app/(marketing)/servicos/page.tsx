import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Grid, Heading, Text } from "@/components/ui";

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

      <Section surface>
        <Container>
          <div className="max-w-3xl">
            <Text variant="caption">Antes da tecnologia</Text>

            <Heading as="h2" className="mt-3">
              Comece pelo problema do negócio
            </Heading>

            <Text variant="lead" className="mt-4">
              Você não precisa saber qual tecnologia ou serviço contratar. O
              diagnóstico parte do contexto, dos processos e dos desafios do
              negócio para definir a solução adequada.
            </Text>

            <Text className="mt-4 max-w-2xl">
              Um mesmo problema pode exigir mais de um serviço trabalhando em
              conjunto.
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={2}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface className="py-14 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <Heading as="h2">
              Uma solução pode envolver mais de um serviço
            </Heading>

            <Text className="mt-4">
              Dependendo do desafio do negócio, sistemas web, automações,
              integrações e inteligência artificial aplicada podem fazer parte
              da mesma solução. A combinação é definida pelo diagnóstico do
              problema e do contexto da empresa.
            </Text>

            <Button href="/sobre" variant="secondary" className="mt-5">
              Entenda como a Conjuga trabalha
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Não sabe qual solução faz sentido?"
          description="Conte o problema e o contexto da sua empresa para identificarmos a solução mais adequada ao seu momento."
          actions={
            <Button href="/contato" size="lg">
              Conversar com a Conjuga
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
