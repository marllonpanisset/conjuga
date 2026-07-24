import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/layout";
import {
  Container,
  Section,
  Heading,
  Text,
  Grid,
  Divider,
} from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, FeatureGrid, CaseCard, CTASection } from "@/components/sections";
import { Icon } from "@/components/ui/Icon";
import { services, getServiceBySlug } from "@/content/servicos";
import { caseStudies } from "@/content/projetos";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
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

  const relatedCases = caseStudies.filter(
    (c) => c.serviceSlug === service.slug,
  );

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
              {
                name: service.name,
                path: `/servicos/${service.slug}`,
              },
            ]),
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              service.name,
              service.heroDescription,
              `/servicos/${service.slug}`,
            ),
          ),
        }}
      />

      <Hero
        eyebrow={service.name}
        title={service.heroTitle}
        description={service.heroDescription}
        actions={
          <Button href="/contato" size="lg">
            Solicitar proposta
          </Button>
        }
      />

      <Section surface>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Icon icon={service.icon} size={28} className="mx-auto" />
            <Heading as="h2" className="mt-5">
              O problema que resolvemos
            </Heading>
            <Text variant="lead" className="mt-4">
              {service.problem}
            </Text>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="caption">O que está incluso</Text>
          <Heading as="h2" className="mt-3 max-w-lg">
            Como entregamos esse serviço
          </Heading>
          <div className="mt-10">
            <FeatureGrid items={service.includes} />
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <Text variant="caption">Stack técnica</Text>
          <Heading as="h2" className="mt-3 max-w-lg">
            Tecnologia usada nesse serviço
          </Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            {service.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-[6px] border border-border px-3 py-1.5 font-mono text-[0.8125rem] text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {relatedCases.length > 0 && (
        <>
          <Divider />
          <Section>
            <Container>
              <Text variant="caption">Cases relacionados</Text>
              <Heading as="h2" className="mt-3 max-w-lg">
                Esse serviço em ação
              </Heading>
              <Grid cols={3} className="mt-10">
                {relatedCases.map((c) => (
                  <CaseCard key={c.slug} caseStudy={c} />
                ))}
              </Grid>
            </Container>
          </Section>
        </>
      )}

      <Section>
        <CTASection
          title={`Pronto para começar com ${service.name.toLowerCase()}?`}
          description="Conte o contexto da sua empresa e receba uma proposta objetiva."
          actions={
            <Button href="/contato" size="lg">
              Solicitar proposta
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
