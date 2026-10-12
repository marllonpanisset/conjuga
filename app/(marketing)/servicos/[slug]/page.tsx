import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Network, ShieldCheck, Target } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Button, ButtonArrow } from "@/components/ui";
import { Hero, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { Icon } from "@/components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

import { services, getServiceBySlug } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

const benefitIcons = [Target, ShieldCheck, Network];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.heroDescription,
    path: `/servicos/${service.slug}`,
  });
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

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
          {
            name: service.name,
            path: `/servicos/${service.slug}`,
          },
        ])}
      />

      <JsonLd
        data={serviceJsonLd({
          name: service.name,
          description: service.heroDescription,
          path: `/servicos/${service.slug}`,
        })}
      />

      <Hero
        eyebrow={service.name}
        title={service.heroTitle}
        description={service.heroDescription}
        actions={
          <Button href="/contato" size="lg">
            Conte seu desafio <ButtonArrow />
          </Button>
        }
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">O problema</Text>
            </div>

            <div className="lg:col-span-9">
              <p className="mx-auto flex max-w-3xl items-start gap-5 text-center font-display text-display-m font-medium tracking-[-0.022em] text-balance text-text-primary sm:items-center sm:text-left">
                <Icon
                  icon={service.icon}
                  size={26}
                  className="hidden shrink-0 sm:inline-flex"
                />
                {service.problem}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Benefícios</Text>
              <Heading as="h2" className="mt-4 text-heading-m lg:max-w-[12ch]">
                O que muda na operação
              </Heading>
            </div>

            <div className="lg:col-span-9">
              <Stagger as="ul" className="border-t border-border">
                {service.benefits.map((benefit, index) => {
                  const BenefitIcon = benefitIcons[index] ?? Target;

                  return (
                    <StaggerItem
                      as="li"
                      key={benefit}
                      className="group flex items-start gap-6 border-b border-border py-7"
                    >
                      <span className="item-index pt-1.5">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="mt-0.5 text-signal transition-transform duration-300 ease-[var(--ease-signature)] group-hover:-translate-y-0.5">
                        <BenefitIcon size={18} strokeWidth={1.5} aria-hidden="true" />
                      </span>

                      <Heading as="h3" className="text-heading-m">
                        {benefit}
                      </Heading>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">O que entregamos</Text>
              <Heading as="h2" className="mt-4 text-heading-m lg:max-w-[12ch]">
                O que está incluído
              </Heading>
            </div>

            <Stagger
              as="ul"
              className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border lg:col-span-9 md:grid-cols-2 lg:grid-cols-3"
            >
              {service.includes.map((item, index) => (
                <StaggerItem
                  as="li"
                  key={item}
                  className="flex min-h-[13rem] flex-col justify-between gap-10 bg-surface p-6 lg:p-8"
                >
                  <span className="item-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <Heading as="h3" className="max-w-[22ch] text-heading-s">
                    {item}
                  </Heading>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Como trabalhamos</Text>
              <Heading as="h2" className="mt-4 text-heading-m lg:max-w-[12ch]">
                Etapas do trabalho
              </Heading>
            </div>

            <div className="lg:col-span-9">
              <Stagger as="ol" className="border-t border-border">
                {service.process.map((step, index) => (
                  <StaggerItem
                    as="li"
                    key={step}
                    className="group flex items-baseline gap-6 border-b border-border py-5"
                  >
                    <span className="item-index transition-colors duration-200 group-hover:text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[1.0625rem] font-medium tracking-[-0.008em] text-text-primary transition-colors duration-200 group-hover:text-signal-strong">
                      {step}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal delay={0.1} className="mt-10 max-w-2xl">
                <Heading as="h3" className="text-heading-m">
                  Uma solução preparada para acompanhar o crescimento da empresa
                </Heading>

                <Text variant="lead" className="mt-5">
                  Nosso objetivo não é criar dependência tecnológica, mas
                  desenvolver soluções organizadas e fáceis de manter.
                </Text>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Quer aplicar ${service.name} na sua operação?`}
        description="Descreva o processo que mais consome tempo hoje e avaliamos por onde começar."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conversar com a Conjuga <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
