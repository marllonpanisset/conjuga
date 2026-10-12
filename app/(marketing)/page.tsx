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
      "Entendemos como o negócio funciona, onde estão os gargalos e quais tarefas geram atrito.",
  },
  {
    title: "Planejamento",
    description:
      "Buscamos definir uma solução simples e adequada ao problema antes de escolher a tecnologia.",
  },
  {
    title: "Implantação",
    description:
      "Implantamos e configuramos a solução, deixando-a pronta para evoluir junto com a operação.",
  },
  {
    title: "Suporte e evolução contínua",
    description:
      "Após a entrega, acompanhamos a solução e a ajustamos conforme a operação muda — escopo definido em proposta.",
  },
];

export default function HomePage() {
  return (
    <PageWrapper withGrid={false}>
      <div className="theme-ops">
        <HomeHero
          eyebrow="Engenharia de software para resolver problemas operacionais"
          title="Começamos pelo que sua empresa precisa hoje."
          description="Construímos a tecnologia para o que ela precisa amanhã. Desenvolvemos sistemas web, automações e integrações para resolver problemas da operação, com inteligência artificial quando fizer sentido. Atendemos empresas de serviços presas em processos manuais, planilhas e ferramentas desconectadas."
          actions={
            <>
              <Button href="/contato" size="lg" variant="accent">
                Conte seu desafio <ButtonArrow />
              </Button>

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
              title="Da presença digital à operação da empresa"
              lead="Um site pode ser o primeiro projeto. A partir do entendimento do negócio, desenvolvemos sistemas web, automações e integrações para resolver os desafios da operação, conforme a necessidade."
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
              lead="Antes de escolher qualquer tecnologia, entendemos como a empresa funciona, identificamos os principais gargalos e definimos por onde começar."
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
                    Vamos avaliar o caminho adequado para o seu negócio?
                  </Heading>
                </div>

                <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-12">
                  <Text className="max-w-xl text-[1.0625rem] leading-[1.6]">
                    Conte como sua empresa funciona hoje e quais desafios
                    deseja resolver. Com esse contexto, podemos avaliar o
                    caminho mais adequado para a sua realidade.
                  </Text>

                  <div className="mt-9">
                    <Button href="/contato" size="lg" variant="accent">
                      Falar com a Conjuga <ButtonArrow />
                    </Button>
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
