import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Grid } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, CTASection, ServiceCard } from "@/components/sections";
import { AlertCircle } from "lucide-react";
import { niches, getNicheBySlug } from "@/content/nichos";
import { services } from "@/content/servicos";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return niches.map((niche) => ({ nicho: niche.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ nicho: string }> }): Promise<Metadata> {
  const { nicho } = await params;
  const niche = getNicheBySlug(nicho);
  if (!niche) return {};
  return buildMetadata({
    title: `Soluções para ${niche.name}`,
    description: niche.heroDescription,
    path: `/solucoes/${niche.slug}`,
  });
}

export default async function NichoPage({ params }: { params: Promise<{ nicho: string }> }) {
  const { nicho } = await params;
  const niche = getNicheBySlug(nicho);
  if (!niche) notFound();

  const relatedServices = services.filter((s) => niche.relatedServiceSlugs.includes(s.slug));

  return (
    <PageWrapper>
      <Hero
        eyebrow={niche.name}
        title={niche.heroTitle}
        description={niche.heroDescription}
        actions={
          <Button href="/contato" size="lg">
            Falar com especialista
          </Button>
        }
      />

      <Section surface>
        <Container>
          <Text variant="caption">Dores comuns</Text>
          <Heading as="h2" className="mt-3 max-w-lg">
            O que costuma travar a presença digital nesse segmento
          </Heading>
          <div className="mt-10 flex flex-col gap-6">
            {niche.painPoints.map((pain) => (
              <div key={pain} className="flex items-start gap-3">
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-signal-strong" />
                <Text variant="body">{pain}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Text variant="caption">Nossa abordagem</Text>
            <Heading as="h2" className="mt-3">
              Como a Fyrmma resolve isso
            </Heading>
            <Text variant="lead" className="mt-4">
              {niche.solution}
            </Text>
          </div>
        </Container>
      </Section>

      {relatedServices.length > 0 && (
        <Section surface>
          <Container>
            <Text variant="caption">Serviços relacionados</Text>
            <Heading as="h2" className="mt-3 max-w-lg">
              Como entregamos essa solução
            </Heading>
            <Grid cols={2} className="mt-10">
              {relatedServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <Section>
        <CTASection
          title={`Pronto para modernizar a presença digital do seu ${niche.name.toLowerCase()}?`}
          description="Conte sua situação atual e receba uma proposta objetiva de solução."
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
