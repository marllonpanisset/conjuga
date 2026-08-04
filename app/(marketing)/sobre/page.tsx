import type { Metadata } from "next";
import Link from "next/link";
import { CircleOff, Target } from "lucide-react";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { Hero, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { FadeIn } from "@/components/motion";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Sobre",
  description:
    "Conheça a Conjuga, empresa de engenharia de software que transforma problemas operacionais em soluções simples e evolutivas.",
  path: "/sobre",
});

const principles = [
  {
    title: "Entender antes de construir",
    description:
      "Primeiro entendemos a operação, os processos e o problema que precisa ser resolvido.",
  },
  {
    title: "Simplicidade intencional",
    description:
      "Evitamos complexidade, dependências e funcionalidades que não tenham uma justificativa clara.",
  },
  {
    title: "Software como ferramenta",
    description:
      "A tecnologia é um meio para organizar a operação e resolver problemas do negócio, não um fim.",
  },
  {
    title: "Manutenção no longo prazo",
    description:
      "Priorizamos soluções fáceis de entender, manter e expandir conforme novas necessidades aparecem.",
  },
  {
    title: "Decisões com contexto",
    description:
      "Arquitetura, integrações e escolhas técnicas são definidas a partir da realidade de cada negócio.",
  },
];

export default function SobrePage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Sobre",
            path: "/sobre",
          },
        ])}
      />

      <Hero
        eyebrow="Sobre a Conjuga"
        title="Engenharia de software para empresas"
        description="A Conjuga é uma empresa brasileira de engenharia de software focada em entender operações, organizar processos e entregar sistemas digitais confiáveis."
      />

      <Section surface>
        <Container>
          <div className="max-w-3xl">
            <Text variant="caption">Posicionamento</Text>

            <Heading as="h2" className="mt-3">
              Como pensamos
            </Heading>

            <Text variant="lead" className="mt-4">
              Antes de definir uma solução, buscamos compreender como a empresa
              trabalha, onde estão os gargalos e o que precisa ser organizado.
              Essa análise orienta as decisões de engenharia.
            </Text>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
            <article
              className="
                group h-full
                rounded-[16px] border border-border
                bg-surface p-6
                shadow-[var(--shadow-card)]
                transition-[border-color,background-color,box-shadow]
                duration-200 ease-[var(--ease-signature)]
                hover:border-border-strong
                hover:bg-surface-elevated/50
                hover:shadow-[var(--shadow-card-hover)]
                md:p-8
              "
            >
              <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-text-muted">
                01
              </span>

              <span
                className="
                  mt-5 flex h-11 w-11 items-center justify-center
                  rounded-[12px] border border-border-strong/80
                  bg-background/60 text-signal-strong
                  transition-[border-color,background-color]
                  duration-200 ease-[var(--ease-signature)]
                  group-hover:border-signal/35
                  group-hover:bg-signal-soft
                "
              >
                <Target size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>

              <Heading as="h3" className="mt-6 max-w-md">
                Como a Conjuga se posiciona
              </Heading>

              <Text
                variant="muted"
                className="mt-3 max-w-xl leading-relaxed text-text-secondary"
              >
                Projetamos sistemas considerando o contexto da operação, as
                integrações necessárias e a manutenção futura. O objetivo é
                entregar software claro, confiável e adequado ao problema.
              </Text>
            </article>

            <article
              className="
                group h-full
                rounded-[16px] border border-border
                bg-surface p-6
                shadow-[var(--shadow-card)]
                transition-[border-color,background-color,box-shadow]
                duration-200 ease-[var(--ease-signature)]
                hover:border-border-strong
                hover:bg-surface-elevated/50
                hover:shadow-[var(--shadow-card-hover)]
                md:p-8
              "
            >
              <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-text-muted">
                02
              </span>

              <span
                className="
                  mt-5 flex h-11 w-11 items-center justify-center
                  rounded-[12px] border border-border-strong/80
                  bg-background/60 text-signal-strong
                  transition-[border-color,background-color]
                  duration-200 ease-[var(--ease-signature)]
                  group-hover:border-signal/35
                  group-hover:bg-signal-soft
                "
              >
                <CircleOff size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>

              <Heading as="h3" className="mt-6 max-w-md">
                Como a Conjuga não se posiciona
              </Heading>

              <Text
                variant="muted"
                className="mt-3 max-w-xl leading-relaxed text-text-secondary"
              >
                Não somos uma agência, uma software house genérica ou uma
                consultoria tradicional. Nossa especialidade é resolver
                problemas operacionais comuns a empresas de serviços, sem
                limitar nossa atuação a um único segmento.
              </Text>
            </article>
          </div>

          <Text variant="muted" className="mt-8">
            Conheça as áreas em que essa abordagem é aplicada em nossos{" "}
            <Link
              href="/servicos"
              className="link-underline text-signal-strong"
            >
              serviços
            </Link>
            .
          </Text>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <Text variant="caption">Princípios</Text>

            <Heading as="h2" className="mt-3 max-w-lg">
              Como pensamos cada projeto
            </Heading>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:mt-16 lg:grid-cols-6">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className={`
                  h-full min-h-[220px]
                  bg-surface p-6
                  md:p-8
                  lg:min-h-[240px] lg:p-10
                  ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                `}
              >
                <div className="flex h-full flex-col justify-between gap-10">
                  <div className="shrink-0">
                    <span
                      className="
                        flex h-9 w-9 items-center justify-center
                        border border-border-strong
                        bg-background
                        font-mono text-[0.6875rem] font-semibold
                        tracking-[0.04em]
                        text-signal-strong
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="max-w-md">
                    <Heading as="h3">{item.title}</Heading>

                    <Text
                      variant="muted"
                      className="mt-3 leading-relaxed text-text-secondary"
                    >
                      {item.description}
                    </Text>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Tem um processo ou oportunidade para melhorar?"
          description="Conte o contexto da sua empresa e vamos avaliar a solução mais adequada para o seu momento."
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
