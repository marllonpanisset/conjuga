import type { Metadata } from "next";
import {
  CircleOff,
  DraftingCompass,
  ListChecks,
  Minimize2,
  Target,
} from "lucide-react";
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
    "Conheça a Fyrmma, empresa de engenharia de software que transforma problemas operacionais em soluções simples e evolutivas.",
  path: "/sobre",
});

const principles = [
  {
    title: "Entendimento antes da tecnologia",
    description:
      "Antes de desenvolver qualquer solução, entendemos objetivos, processos e desafios para identificar a solução mais adequada ao problema e ao contexto do negócio.",
  },
  {
    title: "Soluções pensadas para cada negócio",
    description:
      "Cada empresa possui uma realidade diferente. Criamos soluções de software sob medida considerando os processos, o contexto e as necessidades específicas de cada negócio.",
  },
  {
    title: "Tecnologia aplicada a objetivos reais",
    description:
      "Aplicamos tecnologia para reduzir tarefas repetitivas, eliminar gargalos e tornar operações mais eficientes.",
  },
];

const differentiators = [
  {
    title: "Engenharia de software",
    description:
      "Projetamos soluções considerando arquitetura, integrações, manutenção e evolução contínua.",
    icon: DraftingCompass,
  },
  {
    title: "Foco no problema",
    description:
      "O ponto inicial é sempre a necessidade do negócio. A tecnologia entra como ferramenta para resolver.",
    icon: Target,
  },
  {
    title: "Processo transparente",
    description:
      "Cada etapa é construída com clareza, desde o entendimento inicial até a entrega da solução.",
    icon: ListChecks,
  },
  {
    title: "Simplicidade e evolução",
    description:
      "Priorizamos soluções fáceis de entender, manter e expandir, sem complexidade desnecessária.",
    icon: Minimize2,
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
        eyebrow="Sobre a Fyrmma"
        title="Engenharia de software para empresas de serviços"
        description="A Fyrmma transforma operações manuais em processos digitais mais eficientes por meio de software, automação, integrações e inteligência artificial aplicada."
      />

      <Section surface>
        <Container>
          <div className="max-w-3xl">
            <Text variant="caption">Posicionamento</Text>

            <Heading as="h2" className="mt-3">
              Parceiros de engenharia de software para empresas de serviços
            </Heading>

            <Text variant="lead" className="mt-4">
              A Fyrmma desenvolve sistemas web, automações, integrações e
              soluções com inteligência artificial aplicada para resolver
              problemas operacionais.
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
                Como a Fyrmma se posiciona
              </Heading>

              <Text
                variant="muted"
                className="mt-3 max-w-xl leading-relaxed text-text-secondary"
              >
                Partimos do problema de negócio para traduzir desafios
                operacionais em soluções de engenharia de software. A tecnologia
                é o instrumento para gerar eficiência, organização, produtividade
                e previsibilidade.
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
                Como a Fyrmma não se posiciona
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

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:mt-16 lg:grid-cols-3">
            {principles.map((item, index) => (
              <article
                key={item.title}
                className="
                  h-full min-h-[220px]
                  bg-surface p-6
                  md:p-8
                  lg:min-h-[240px] lg:p-10
                "
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

      <Section surface>
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-2 md:pt-2">
              Diferenciais
            </Text>

            <div className="md:col-span-8 md:col-start-4 lg:col-span-7">
              <Heading as="h2" className="max-w-2xl">
                O que orienta nossas entregas
              </Heading>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-5">
            {differentiators.map(
              ({ title, description, icon: Icon }, index) => {
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article
                    key={title}
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
                      {number}
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
                      <Icon
                        size={20}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>

                    <Heading as="h3" className="mt-6 max-w-md">
                      {title}
                    </Heading>

                    <Text
                      variant="muted"
                      className="mt-3 max-w-xl leading-relaxed text-text-secondary"
                    >
                      {description}
                    </Text>
                  </article>
                );
              },
            )}
          </div>
        </Container>
      </Section>

      <Section>
        <CTASection
          title="Tem um processo ou oportunidade para melhorar?"
          description="Conte o contexto da sua empresa e vamos avaliar a solução mais adequada para o seu momento."
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
