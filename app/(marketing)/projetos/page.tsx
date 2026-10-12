import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Text } from "@/components/ui";
import { Hero, CaseCard, CTASection } from "@/components/sections";
import { Button, ButtonArrow } from "@/components/ui";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Projetos",
  description:
    "Conheça os projetos desenvolvidos pela Conjuga e veja como aplicamos engenharia de software para resolver desafios reais de empresas de serviços.",
  path: "/projetos",
});

/** Estrutura que cada publicação seguirá quando um case for liberado. */
const publicationFields = [
  "Contexto",
  "Problema",
  "Solução",
  "Tecnologias utilizadas",
];

export default function ProjetosPage() {
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
        ])}
      />

      <Hero
        eyebrow="Projetos"
        title="Projetos"
        description="Os projetos serão publicados conforme autorização dos clientes, com contexto, problema, solução, tecnologias utilizadas e resultados quando for possível verificá-los."
      />

      <Section>
        <Container>
          {caseStudies.length > 0 ? (
            <div className="border-t border-border">
              {caseStudies.map((c) => (
                <CaseCard key={c.slug} caseStudy={c} />
              ))}
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <Text variant="caption">Publicação responsável</Text>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-[24ch] font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.022em] text-balance text-text-primary">
                  Projetos serão publicados com autorização dos clientes
                </h2>

                <Text variant="lead" className="mt-8 max-w-2xl">
                  Cada publicação apresentará informações reais e verificáveis
                  sobre o contexto, o problema, a solução e os resultados,
                  quando possível.
                </Text>

                <dl className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                  {publicationFields.map((field, index) => (
                    <div
                      key={field}
                      className="flex min-h-[10rem] flex-col justify-between gap-8 bg-surface p-6"
                    >
                      <span className="item-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <dt className="font-display text-[1.0625rem] font-medium leading-snug tracking-[-0.008em] text-text-primary">
                        {field}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title="Vamos conversar sobre o seu projeto"
        description="Sem case parecido com o seu por aqui? Descreva sua operação — avaliamos se faz sentido uma conversa."
        actions={
          <>
            <Button href="/servicos" size="lg" variant="onInk">
              Conhecer nossos serviços <ButtonArrow />
            </Button>
            <Button
              href="/sobre"
              size="lg"
              className="border-[#f4f1ea]/30 bg-transparent text-[#f4f1ea] hover:border-[#f4f1ea] hover:bg-[#f4f1ea]/10"
            >
              Sobre a Conjuga
            </Button>
            <Button href="/contato" size="lg" variant="onInkGhost">
              Conte seu desafio
            </Button>
          </>
        }
      />
    </PageWrapper>
  );
}
