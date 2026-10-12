import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/PageWrapper";
import {
  Button,
  ButtonArrow,
  Container,
  Heading,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";
import {
  DifferentialsSection,
  HomeHero,
  MethodTimeline,
  ServiceIndex,
} from "@/components/sections";
import { Reveal } from "@/components/motion";
import { TrackedContactCta } from "@/components/analytics/TrackedContactCta";

import { services } from "@/content/servicos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engenharia de software para empresas de serviços",
  description:
    "A Conjuga desenvolve sistemas web, automações e integrações para resolver problemas operacionais, com inteligência artificial quando fizer sentido. Um site pode ser o primeiro projeto.",
  path: "/",
});

const processSteps = [
  {
    title: "Entendimento do contexto",
    description:
      "Mapeamos como o negócio funciona, onde trava e o que gera atrito.",
  },
  {
    title: "Planejamento",
    description:
      "Definimos a solução mais simples para o problema — antes de escolher tecnologia.",
  },
  {
    title: "Implantação",
    description:
      "Entregamos a solução configurada e funcionando na sua operação.",
  },
  {
    title: "Suporte e evolução contínua",
    description:
      "Acompanhamos e ajustamos depois da entrega, com escopo fechado em proposta.",
  },
];

export default function HomePage() {
  return (
    <PageWrapper withGrid={false}>
      <div className="theme-ops">
        <HomeHero
          eyebrow="Engenharia de software para resolver problemas operacionais"
          title="Começamos pelo que sua empresa precisa hoje."
          description="Desenvolvemos sistemas web, automações e integrações para empresas de serviços presas em processos manuais, planilhas e ferramentas desconectadas."
          actions={
            <>
              <TrackedContactCta bloco="hero" />

              <Button href="/servicos" variant="ghost" size="lg">
                Conhecer nossos serviços
              </Button>
            </>
          }
        />

        <Section rule>
          <Container>
            <SectionHeader
              label="Serviços"
              title="Do site à operação"
              lead="Sistemas web, automações e presença digital — começando pelo seu processo, não pelo catálogo."
              actions={
                <Button href="/servicos" variant="ghost" size="md">
                  Ver todos os serviços <ButtonArrow size={15} />
                </Button>
              }
            />

            <div className="mt-14 lg:mt-20">
              <ServiceIndex services={services} />
            </div>
          </Container>
        </Section>

        <Section tone="raised" rule>
          <Container>
            <SectionHeader
              label="Método"
              title="Antes do código, entendemos o negócio"
            />

            <div className="mt-14 lg:mt-20">
              <MethodTimeline steps={processSteps} />
            </div>
          </Container>
        </Section>

        <DifferentialsSection />

        <Section rule>
          <Container>
            <Reveal y={16}>
              <div className="grid gap-10 border border-border-strong bg-surface px-6 py-12 sm:px-10 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-14">
                <div className="lg:col-span-7">
                  <p className="label-mono flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 bg-signal"
                    />
                    Próximo passo
                  </p>

                  <Heading
                    as="h2"
                    className="ops-display mt-6 max-w-[24ch] font-display text-display-m"
                  >
                    Vamos olhar para a sua operação?
                  </Heading>
                </div>

                <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
                  <Text className="max-w-xl text-[1.0625rem] leading-[1.6]">
                    Conte como sua empresa funciona hoje e o que precisa
                    resolver.
                  </Text>

                  <div className="mt-9">
                    <TrackedContactCta bloco="final" />
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </div>
    </PageWrapper>
  );
}
