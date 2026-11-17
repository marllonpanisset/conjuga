import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout/PageWrapper";
import { ArrowUpRight } from "lucide-react";
import {
  Button,
  ButtonArrow,
  Container,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";
import {
  CaseCard,
  CTASection,
  DifferentialsSection,
  HomeHero,
  ServiceIndex,
} from "@/components/sections";
import { Stagger, StaggerItem } from "@/components/motion";
import { TrackedContactCta } from "@/components/analytics/TrackedContactCta";

import { services } from "@/content/servicos";
import { caseStudies } from "@/content/projetos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engenharia de software para empresas",
  description:
    "A Conjuga ajuda empresas a organizar e evoluir suas operações com presença digital, sistemas web e automações. Atendimento remoto em todo o Brasil.",
  path: "/",
});

const homeServiceOrder = [
  "presenca-digital",
  "sistemas-web",
  "automacao",
] as const;

const homeServiceDescriptions: Record<(typeof homeServiceOrder)[number], string> = {
  "presenca-digital":
    "Sites institucionais, landing pages e experiências digitais.",
  "sistemas-web":
    "Sistemas personalizados, painéis administrativos, portais e aplicações web.",
  automacao:
    "Integrações e automações para reduzir tarefas manuais e conectar ferramentas.",
};

const homeServices = homeServiceOrder.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);

  return service
    ? [{ ...service, shortDescription: homeServiceDescriptions[slug] }]
    : [];
});

const businessSignals = [
  "Informações espalhadas em diferentes ferramentas.",
  "Tarefas repetitivas que consomem tempo.",
  "Processos difíceis de acompanhar e organizar.",
  "Presença digital que já não acompanha a empresa.",
];

const featuredProject = caseStudies.find(
  (project) => project.slug === "portfolio-tais",
);

export default function HomePage() {
  return (
    <PageWrapper withGrid={false}>
      <div className="theme-ops">
        <HomeHero
          eyebrow="Engenharia de software para empresas"
          title="Começamos pelo que sua empresa precisa hoje."
          description="Organizamos e evoluímos operações com presença digital, sistemas web e automações."
          complement="Entendemos o desafio do seu negócio antes de definir a tecnologia."
          actions={
            <>
              <TrackedContactCta bloco="hero" />

              <Button href="/servicos" variant="ghost" size="lg">
                Conheça as soluções
              </Button>
            </>
          }
        />

        <Section rule>
          <Container>
            <SectionHeader
              label="Sinais da operação"
              title="Seu negócio ainda depende de processos manuais?"
              lead="Cada empresa tem um contexto próprio. Estas são algumas situações que podem indicar uma oportunidade de organizar melhor a operação."
            />

            <Stagger as="ul" className="mt-12 border-t border-border">
              {businessSignals.map((signal, index) => (
                <StaggerItem
                  as="li"
                  key={signal}
                  className="flex items-start gap-6 border-b border-border py-5 sm:items-center"
                >
                  <span className="item-index pt-1 text-signal sm:pt-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Text className="max-w-3xl text-text-primary">{signal}</Text>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        <Section rule>
          <Container>
            <SectionHeader
              label="Serviços"
              title="Três áreas para necessidades diferentes"
              lead="A solução começa pelo que sua empresa precisa e é definida a partir do contexto do negócio."
              actions={
                <Button href="/servicos" variant="ghost" size="md">
                  Conheça as soluções <ButtonArrow size={15} />
                </Button>
              }
            />

            <div className="mt-14 lg:mt-20">
              <ServiceIndex
                services={homeServices}
                actionLabels={{
                  "presenca-digital": "Conheça Presença Digital",
                  "sistemas-web": "Conheça Sistemas Web",
                  automacao: "Conheça Automações de Processos",
                }}
              />
            </div>
          </Container>
        </Section>

        {featuredProject && (
          <Section tone="raised" rule>
            <Container>
              <SectionHeader
                label="Projeto desenvolvido"
                title="Um projeto publicado pela Conjuga"
                lead="O site de portfólio profissional de Taís inclui CMS próprio e painel administrativo."
                actions={
                  <a
                    href="https://taissales.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-small font-medium text-signal-strong"
                  >
                    Acessar o site <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                }
              />

              <div className="mt-10 lg:mt-14">
                <CaseCard caseStudy={featuredProject} />
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="label-mono px-2.5 py-1">
                    Gerenciamento de projetos
                  </span>
                  <span className="label-mono px-2.5 py-1">
                    Gerenciamento de mídias
                  </span>
                </div>
              </div>
            </Container>
          </Section>
        )}

        <DifferentialsSection />

        <CTASection
          title="Qual necessidade sua empresa quer resolver?"
          description="Conte um pouco sobre seu negócio e o desafio que deseja superar. Vamos entender o contexto e avaliar como podemos ajudar."
          actions={
            <>
              <TrackedContactCta bloco="final" />
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-small">
                <a
                  href="https://wa.me/5521985097290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[#f4f1ea]/75 hover:text-[#f4f1ea]"
                >
                  WhatsApp: (21) 98509-7290
                </a>
                <a
                  href="mailto:contato@conjuga.com.br"
                  className="link-underline text-[#f4f1ea]/75 hover:text-[#f4f1ea]"
                >
                  contato@conjuga.com.br
                </a>
              </div>
            </>
          }
        />
      </div>
    </PageWrapper>
  );
}
