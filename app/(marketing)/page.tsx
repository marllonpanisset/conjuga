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
  title: "Sites profissionais para empresas de serviços",
  description:
    "Desenvolvemos sites profissionais, sistemas web e automações para empresas. Soluções digitais pensadas para as necessidades do seu negócio.",
  path: "/",
});

const homeServiceOrder = [
  "presenca-digital",
  "sistemas-web",
  "automacao",
] as const;

const homeServiceDescriptions: Record<
  (typeof homeServiceOrder)[number],
  string
> = {
  "presenca-digital":
    "Sites profissionais para apresentar sua empresa, seus serviços e facilitar o contato com seus clientes.",
  "sistemas-web":
    "Sistemas web personalizados para organizar informações, processos e atividades do seu negócio.",
  automacao:
    "Integrações e automações para reduzir tarefas manuais e conectar ferramentas utilizadas pela sua empresa.",
};

const homeServices = homeServiceOrder.flatMap((slug) => {
  const service = services.find((item) => item.slug === slug);

  return service
    ? [{ ...service, shortDescription: homeServiceDescriptions[slug] }]
    : [];
});

const businessSignals = [
  "Informações importantes espalhadas entre diferentes ferramentas.",
  "Tarefas repetitivas que consomem tempo da equipe.",
  "Processos difíceis de acompanhar e organizar.",
  "Uma presença digital que não representa bem a empresa.",
];

const featuredProject = caseStudies.find(
  (project) => project.slug === "portfolio-tais",
);

export default function HomePage() {
  return (
    <PageWrapper withGrid={false}>
      <div className="theme-ops">
        <HomeHero
          eyebrow="Engenharia de software para empresas de serviços"
          title="Sua empresa merece uma presença digital profissional."
          description="Desenvolvemos sites que apresentam seus serviços com clareza, fortalecem a confiança na sua empresa e facilitam o contato com potenciais clientes."
          complement="Cada projeto começa com uma conversa para entender seu negócio e definir a solução adequada."
          actions={
            <>
              <TrackedContactCta bloco="hero" />

              <Button href="/servicos" variant="ghost" size="lg">
                Conheça nossos serviços
              </Button>
            </>
          }
        />

        <Section rule>
          <Container>
            <SectionHeader
              label="Sinais da operação"
              title="Sua empresa ainda perde tempo com processos que poderiam ser mais simples?"
              lead="Informações espalhadas, tarefas repetitivas e processos difíceis de acompanhar podem tornar a rotina da empresa mais trabalhosa. Identificar esses desafios é o primeiro passo para encontrar soluções que façam sentido para o seu negócio."
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

                  <Text className="max-w-3xl text-text-primary">
                    {signal}
                  </Text>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        <Section rule>
          <Container>
            <SectionHeader
              label="Serviços"
              title="Soluções digitais para as necessidades do seu negócio."
              lead="Desenvolvemos sites, sistemas web e automações a partir dos desafios da sua empresa — com soluções pensadas para sua realidade, sem complexidade desnecessária."
              actions={
                <Button href="/servicos" variant="ghost" size="md">
                  Conheça nossos serviços <ButtonArrow size={15} />
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
                label="Projeto em destaque"
                title="Um site profissional com gerenciamento de conteúdo."
                lead="Desenvolvemos um portfólio profissional com CMS e painel administrativo para facilitar o gerenciamento de projetos e mídias."
                actions={
                  <a
                    href="https://taissales.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-small font-medium text-signal-strong"
                  >
                    Acessar o projeto{" "}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                }
              />

              <div className="mt-10 lg:mt-14">
                <CaseCard caseStudy={featuredProject} />

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="label-mono px-2.5 py-1">
                    CMS personalizado
                  </span>

                  <span className="label-mono px-2.5 py-1">
                    Painel administrativo
                  </span>
                </div>
              </div>
            </Container>
          </Section>
        )}

        <DifferentialsSection />

        <CTASection
          title="Vamos conversar sobre o que sua empresa precisa?"
          description="Conte sobre seu negócio e o que você gostaria de melhorar. Vamos entender sua necessidade e avaliar como podemos ajudar."
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