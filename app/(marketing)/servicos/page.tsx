import type { Metadata } from "next";
import Link from "next/link";

import { PageWrapper } from "@/components/layout";
import {
  Button,
  ButtonArrow,
  Container,
  Heading,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";
import { CTASection, Hero } from "@/components/sections";
import { Stagger, StaggerItem } from "@/components/motion";
import { JsonLd } from "@/components/seo/JsonLd";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Landing pages, sites institucionais e com CMS, sistemas, automações e suporte com escopo acordado.",
  path: "/servicos",
});

const primaryOffers = [
  {
    name: "Landing Page",
    description:
      "Página focada em apresentar um produto, serviço ou campanha e gerar contatos.",
    investment: "A partir de R$ 2.490",
  },
  {
    name: "Site Institucional",
    description:
      "Site para apresentar a empresa, seus serviços, diferenciais e canais de contato.",
    investment: "A partir de R$ 4.900",
  },
  {
    name: "Site Profissional com CMS",
    description:
      "Site com painel administrativo para gerenciar conteúdos, projetos e informações.",
    investment: "A partir de R$ 7.900",
  },
  {
    name: "Sistemas e Automações",
    description:
      "Desenvolvimento de sistemas personalizados, integrações e automações para necessidades operacionais.",
    investment: "Sob consulta",
  },
] as const;

const complementaryServices = [
  {
    name: "Manutenção de sites",
    description:
      "Manutenção técnica, atualizações de conteúdo, correções e ajustes básicos. O escopo e os limites de atendimento são definidos na contratação.",
    investment: "A partir de R$ 390/mês",
  },
  {
    name: "Evolução de sites e sistemas",
    description:
      "Melhorias, novas funcionalidades e adaptações em soluções existentes.",
    investment: "Sob consulta",
  },
  {
    name: "Suporte técnico",
    description:
      "Apoio contínuo para demandas técnicas, conforme disponibilidade e escopo contratado.",
    investment: "Sob consulta",
  },
] as const;

const workSteps = [
  "Entendimento da necessidade",
  "Definição da solução e do escopo",
  "Desenvolvimento e implementação",
  "Evolução futura, se contratada em novo escopo",
];

export default function ServicosPage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Serviços",
            path: "/servicos",
          },
        ])}
      />

      <Hero
        eyebrow="Serviços"
        title="Soluções digitais para o seu negócio."
        description="Criamos sites, sistemas e automações para resolver necessidades reais da sua empresa."
        actions={
          <Button href="/contato" size="lg">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />

      <Section tone="raised" rule>
        <Container>
          <SectionHeader
            label="Serviços principais"
            title="Escolha por onde começar"
            lead="A solução e o escopo são definidos a partir da necessidade do seu negócio."
          />

          <Stagger
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border sm:grid-cols-2 lg:mt-16"
          >
            {primaryOffers.map((offer, index) => (
              <StaggerItem
                as="li"
                key={offer.name}
                className="flex min-h-[18rem] flex-col justify-between gap-8 bg-surface p-6 lg:p-8"
              >
                <div>
                  <span className="item-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Heading as="h3" className="mt-5 text-heading-m">
                    {offer.name}
                  </Heading>
                  <Text className="mt-4 max-w-xl">{offer.description}</Text>
                </div>

                <div className="flex flex-col gap-5 border-t border-border pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="label-mono text-text-muted">Investimento</p>
                    <p className="mt-2 text-small font-medium text-text-primary">
                      {offer.investment}
                    </p>
                  </div>
                  <Button href="/contato" size="md" variant="secondary">
                    Conte seu desafio <ButtonArrow size={15} />
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Text variant="muted" className="mt-6 max-w-3xl">
            O CMS está incluído somente na oferta específica. Os valores apresentados são iniciais. O investimento final depende das necessidades e do escopo de cada projeto.
          </Text>

          <Text variant="muted" className="mt-4 max-w-3xl">
            Detalhe de cada área:{" "}
            <Link
              href="/servicos/sistemas-web"
              className="link-underline text-signal-strong"
            >
              Sistemas Web
            </Link>
            {" · "}
            <Link
              href="/servicos/automacao"
              className="link-underline text-signal-strong"
            >
              Automações de Processos
            </Link>
            {" · "}
            <Link
              href="/servicos/presenca-digital"
              className="link-underline text-signal-strong"
            >
              Presença Digital
            </Link>
            .
          </Text>
        </Container>
      </Section>

      <Section rule>
        <Container>
          <SectionHeader
            label="Serviços complementares"
            title="Suporte e evolução"
            lead="A Conjuga também pode apoiar empresas que já possuem sites ou sistemas, além de desenvolver novos projetos. Serviços complementares são contratados à parte, conforme a necessidade e o escopo acordado."
          />

          <Stagger as="ul" className="mt-10 grid gap-x-10 md:grid-cols-2">
            {complementaryServices.map((service, index) => (
              <StaggerItem
                as="li"
                key={service.name}
                className="flex min-h-[8rem] flex-col justify-center gap-4 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-5"
              >
                <div className="flex-1">
                  <span className="item-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Heading as="h3" className="mt-2 text-heading-s">
                    {service.name}
                  </Heading>
                  <Text className="mt-2 max-w-2xl">{service.description}</Text>
                </div>
                <span className="shrink-0 text-small font-medium text-text-primary sm:max-w-[12rem] sm:text-right">
                  {service.investment}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <SectionHeader
            label="Como funciona"
            title="Do entendimento à implementação"
            lead="Cada projeto começa pela necessidade e segue o escopo definido para a contratação."
          />

          <Stagger as="ol" className="mt-12 border-t border-border">
            {workSteps.map((step, index) => (
              <StaggerItem
                as="li"
                key={step}
                className="flex items-baseline gap-6 border-b border-border py-5"
              >
                <span className="item-index text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading as="h3" className="text-heading-m">
                  {step}
                </Heading>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CTASection
        title="Vamos conversar sobre a necessidade da sua empresa?"
        description="Conte seu desafio. Vamos entender o contexto antes de definir a tecnologia e o escopo."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
