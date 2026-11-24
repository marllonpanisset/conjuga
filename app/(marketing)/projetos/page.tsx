import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import { Container, Heading, Section, Tag, Text } from "@/components/ui";
import { Hero, CTASection } from "@/components/sections";
import { Button, ButtonArrow } from "@/components/ui";
import { JsonLd } from "@/components/seo/JsonLd";
import { Reveal } from "@/components/motion";

import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

import type { CaseStudy } from "@/types/case-study";

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

const coverSizes = "(min-width: 768px) 33vw, calc(100vw - 40px)";

/**
 * Linha de projeto da listagem.
 *
 * Reproduz localmente a composição do CaseCard (metadados à esquerda,
 * leitura à direita) para exibir a imagem de apresentação do case sem
 * alterar o card compartilhado com a Home.
 */
function CaseRow({ caseStudy }: { caseStudy: CaseStudy }) {
  const [cover] = caseStudy.images ?? [];

  return (
    <Reveal y={16}>
      <Link
        href={`/projetos/${caseStudy.slug}` as never}
        className="group grid grid-cols-1 gap-5 border-t border-border py-8 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:gap-8"
      >
        <div className="md:col-span-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag>{caseStudy.segment}</Tag>
            {caseStudy.segment !== "Portfólio profissional" && (
              <Tag className="bg-transparent">Estudo de projeto</Tag>
            )}
          </div>

          {cover && (
            <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-elevated">
              <Image
                src={cover.src}
                width={cover.width}
                height={cover.height}
                alt={cover.caption}
                sizes={coverSizes}
                className="h-auto w-full"
              />
            </div>
          )}
        </div>

        <div className="md:col-span-8">
          <Heading
            as="h3"
            className="flex items-center gap-3 text-heading-m transition-colors duration-200 group-hover:text-signal-strong"
          >
            {caseStudy.title}
            <ArrowUpRight
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
              className="shrink-0 text-signal opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-precise)] group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Heading>

          <Text className="mt-3 max-w-2xl">{caseStudy.summary}</Text>

          <span className="label-mono mt-5 inline-block text-text-muted">
            Projeto de {caseStudy.client}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

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
        description="Publicamos projetos reais com autorização do cliente: contexto, problema, solução e resultado."
      />

      <Section>
        <Container>
          {caseStudies.length > 0 ? (
            <div className="border-t border-border">
              {caseStudies.map((c) => (
                <CaseRow key={c.slug} caseStudy={c} />
              ))}
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <Text variant="caption">Publicação responsável</Text>
              </div>

              <div className="lg:col-span-9">
                <h2 className="max-w-[24ch] font-display text-display-m font-medium leading-[1.12] tracking-[-0.022em] text-balance text-text-primary">
                  Cases reais, quando os clientes autorizarem
                </h2>

                <Text variant="lead" className="mt-8 max-w-2xl">
                  Publicamos apenas informações reais e verificáveis — quando
                  houver autorização e resultados para mostrar.
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
        description="Sem um projeto parecido com o seu? Conte como sua operação funciona. Publicamos apenas projetos reais, com autorização dos clientes e informações verificáveis."
        actions={
          <>
            <Button href="/servicos" size="lg" variant="onInk">
              Conhecer nossos serviços <ButtonArrow />
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
