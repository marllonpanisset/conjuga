import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import {
  Button,
  ButtonArrow,
  Container,
  Heading,
  Section,
  Tag,
  Text,
} from "@/components/ui";
import { CTASection, Hero } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Stagger, StaggerItem } from "@/components/motion";

import { caseStudies, getCaseBySlug } from "@/content/projetos";
import { getServiceBySlug } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import type { CaseImage } from "@/types/case-study";

/** Larguras de leitura das imagens por breakpoint (srcset do next/image). */
const coverSizes =
  "(min-width: 1280px) 1184px, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)";
const gallerySizes =
  "(min-width: 1280px) 880px, (min-width: 1024px) 75vw, (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)";
const galleryHalfSizes =
  "(min-width: 1280px) 424px, (min-width: 1024px) 37vw, (min-width: 768px) calc(50vw - 48px), calc(100vw - 40px)";

interface CaseFigureProps {
  image: CaseImage;
  sizes: string;
  /** Pré-carrega apenas a imagem de apresentação. */
  priority?: boolean;
}

/**
 * Captura real do projeto apresentada na proporção original.
 *
 * A imagem abre em nova aba para visualização ampliada; a legenda descreve
 * o que a captura mostra e serve de texto alternativo.
 */
function CaseFigure({ image, sizes, priority = false }: CaseFigureProps) {
  return (
    <figure>
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ampliar imagem: ${image.caption}`}
        className="block overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface transition-colors duration-200 hover:border-border-strong"
      >
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.caption}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full"
        />
      </a>

      <figcaption className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <Text variant="muted" className="max-w-2xl">
          {image.caption}
        </Text>

        <a
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline inline-flex shrink-0 items-center gap-1.5 text-small font-medium text-signal-strong"
        >
          Ampliar imagem
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </figcaption>
    </figure>
  );
}

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
  const [cover, ...gallery] = caseStudy.images ?? [];
  const [mainGalleryImage, ...supportingGalleryImages] = gallery;

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
        actions={
          <Button href="/contato" size="lg">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />

      <Section tone="raised" rule>
        <Container>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex min-h-[9rem] flex-col justify-between gap-6 bg-surface p-6">
              <dt className="label-mono">Projeto de</dt>
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
                <Link
                  href={`/servicos/${relatedService.slug}` as never}
                  className="link-underline font-display text-[1.0625rem] font-medium text-text-primary transition-colors duration-200 hover:text-signal-strong"
                >
                  {relatedService.name}
                </Link>
              </div>
            )}
          </dl>
        </Container>
      </Section>

      {cover && (
        <Section rule>
          <Container>
            <CaseFigure image={cover} sizes={coverSizes} priority />
          </Container>
        </Section>
      )}

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Contexto e desafio</Text>
            </div>

            <div className="max-w-2xl lg:col-span-9">
              <div className="border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Um portfólio próprio para reunir e apresentar trabalhos
                </Heading>

                <Text variant="lead" className="mt-4">
                  {caseStudy.context}
                </Text>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <Heading as="h3" className="text-heading-m">
                  O desafio
                </Heading>

                <Text variant="lead" className="mt-4">
                  {caseStudy.problem}
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Solução</Text>
            </div>

            <div className="max-w-2xl lg:col-span-9">
              <div className="border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Site com portfólio e sistema de gerenciamento de conteúdo
                </Heading>

                <Text variant="lead" className="mt-4">
                  {caseStudy.solution}
                </Text>
              </div>

              {caseStudy.results && (
                <div className="mt-12 border-t border-border pt-8">
                  <Heading as="h3" className="text-heading-m">
                    Resultado
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

      {mainGalleryImage && (
        <Section tone="raised" rule>
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <Text variant="caption">Painel administrativo</Text>
              </div>

              <div className="lg:col-span-9">
                <div className="border-t border-border pt-8">
                  <Heading as="h2" className="max-w-2xl text-heading-m">
                    Como o conteúdo é administrado
                  </Heading>
                </div>

                <div className="mt-8">
                  <CaseFigure
                    image={mainGalleryImage}
                    sizes={gallerySizes}
                  />

                  {supportingGalleryImages.length > 0 && (
                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      {supportingGalleryImages.map((image) => (
                        <CaseFigure
                          key={image.src}
                          image={image}
                          sizes={galleryHalfSizes}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {caseStudy.features && caseStudy.features.length > 0 && (
        <Section rule>
          <Container>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-3">
                <Text variant="caption">Funcionalidades</Text>
              </div>

              <div className="lg:col-span-9">
                <div className="border-t border-border pt-8">
                  <Heading as="h2" className="max-w-2xl text-heading-m">
                    O que a plataforma faz
                  </Heading>
                </div>

                <Stagger
                  as="ul"
                  className="mt-8 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border md:grid-cols-2 lg:grid-cols-4"
                >
                  {caseStudy.features.map((feature, index) => (
                    <StaggerItem
                      as="li"
                      key={feature}
                      className="flex min-h-[13rem] flex-col justify-between gap-10 bg-surface p-6 lg:p-8"
                    >
                      <span className="item-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Heading as="h3" className="max-w-[22ch] text-heading-s">
                        {feature}
                      </Heading>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Detalhes do projeto</Text>
            </div>

            <div className="max-w-2xl lg:col-span-9">
              <div className="border-t border-border pt-8">
                <Heading as="h2" className="text-heading-m">
                  Tecnologias e acesso ao projeto
                </Heading>

                <div className="mt-5 flex flex-wrap gap-2">
                  {caseStudy.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
              </div>

              {caseStudy.url && (
                <div className="mt-12 border-t border-border pt-8">
                  <Heading as="h3" className="text-heading-m">
                    Acesse o projeto
                  </Heading>

                  <Text className="mt-4 max-w-2xl">
                    O portfólio está publicado e pode ser visitado
                    diretamente no navegador.
                  </Text>

                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-6 inline-flex items-center gap-2 text-small font-medium text-signal-strong"
                  >
                    Acessar o projeto
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
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
