import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
} from "@/components/ui";

import { Button } from "@/components/ui/Button";
import { Hero, FeatureGrid, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { Icon } from "@/components/ui/Icon";

import { services, getServiceBySlug } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.heroDescription,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) notFound();

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
          {
            name: service.name,
            path: `/servicos/${service.slug}`,
          },
        ])}
      />

      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.heroDescription,
          path: `/servicos/${service.slug}`,
        })}
      />

      <Hero
        eyebrow={service.name}
        title={service.heroTitle}
        description={service.heroDescription}
        actions={
          <Button href="/contato" size="lg">
            Solicitar diagnóstico
          </Button>
        }
      />

      <Section surface>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Icon icon={service.icon} size={28} className="mx-auto" />

            <Heading as="h2" className="mt-5">
              Problemas que esse serviço ajuda a resolver
            </Heading>

            <Text variant="lead" className="mt-4">
              {service.problem}
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="caption">Benefícios</Text>

          <Heading as="h2" className="mt-3 max-w-lg">
            Resultados que orientam a solução
          </Heading>

          <div className="mt-10">
            <FeatureGrid items={service.benefits} />
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <Text variant="caption">Processo</Text>

          <Heading as="h2" className="mt-3 max-w-lg">
            Como conduzimos o trabalho
          </Heading>

          <div className="mt-10">
            <FeatureGrid items={service.process} />
          </div>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Vamos avaliar o melhor caminho para sua empresa?"
          description="Conte o contexto do seu negócio e vamos identificar a solução digital mais adequada para sua necessidade."
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
