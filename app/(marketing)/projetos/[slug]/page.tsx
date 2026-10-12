import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Tag } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { caseStudies, getCaseBySlug } from "@/content/projetos";
import { getServiceBySlug } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/projetos/${caseStudy.slug}`,
  });
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const caseStudy = getCaseBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const relatedService = getServiceBySlug(caseStudy.serviceSlug);

  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Projetos",
            path: "/projetos",
          },
          {
            name: caseStudy.title,
            path: `/projetos/${caseStudy.slug}`,
          },
        ])}
      />

      <Hero
        eyebrow={caseStudy.segment}
        title={caseStudy.title}
        description={caseStudy.summary}
      />

      <Section tone="raised">
        <Container>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex min-h-[9rem] flex-col justify-between gap-6 bg-surface p-6">
              <dt className="label-mono">Contexto do projeto</dt>
              <span className="font-display text-[1.0625rem] font-medium text-text-primary">
                {caseStudy.client}
              </span>
            </div>

            <div className="flex min-h-[9rem] flex-col justify-between gap-6 bg-surface p-6">
              <dt className="label-mono">Segmento</dt>
              <span className="flex flex-wrap gap-2">
                <Tag>{caseStudy.segment}</Tag>
              </span>
            </div>

            {relatedService && (
              <div className="flex min-h-[9rem] flex-col justify-between gap-6 bg-surface p-6">
                <dt className="label-mono">Solução aplicada</dt>
                <span className="font-display text-[1.0625rem] font-medium text-text-primary">
                  {relatedService.name}
                </span>
              </div>
            )}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">O case</Text>
            </div>

            <div className="max-w-2xl lg:col-span-9">
              <div className="border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Contexto
                </Heading>
                <Text variant="lead" className="mt-4">
                  {caseStudy.context}
                </Text>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Problema
                </Heading>
                <Text variant="lead" className="mt-4">
                  {caseStudy.problem}
                </Text>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Solução
                </Heading>
                <Text variant="lead" className="mt-4">
                  {caseStudy.solution}
                </Text>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Tecnologias utilizadas
                </Heading>
                <div className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </div>

              {caseStudy.results && (
                <div className="mt-12 border-t border-border pt-8">
                  <Heading as="h2" className="text-heading-m">
                    Resultados
                  </Heading>
                  <Text variant="lead" className="mt-4">
                    {caseStudy.results}
                  </Text>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Tem um desafio parecido?"
        description="Conte o problema e o contexto da sua empresa para avaliarmos a solução mais adequada à sua necessidade."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conte seu desafio
          </Button>
        }
      />
    </PageWrapper>
  );
}
