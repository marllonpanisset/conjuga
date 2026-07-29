import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { PageWrapper } from "@/components/layout/PageWrapper";
import {
  Container,
  Section,
  Heading,
  Text,
  Grid,
} from "@/components/ui";
import { Button } from "@/components/ui/Button";

import { CTASection } from "@/components/sections/CTASection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProcessStep } from "@/components/sections/ProcessStep";
import { ServiceCard } from "@/components/sections/ServiceCard";

import { services } from "@/content/servicos";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Engenharia de software para empresas de serviços",
  description:
    "Organizamos processos, automatizamos tarefas e criamos soluções digitais sob medida para empresas de serviços.",
  path: "/",
});

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos como o negócio funciona, onde estão os gargalos e quais tarefas geram atrito.",
  },
  {
    title: "Arquitetura",
    description:
      "Definimos a solução mais simples capaz de resolver o problema antes de escolher a tecnologia.",
  },
  {
    title: "Desenvolvimento",
    description:
      "Construímos e validamos a solução com foco em qualidade, segurança, acessibilidade e manutenção.",
  },
  {
    title: "Evolução contínua",
    description:
      "Acompanhamos novas necessidades para que o ativo digital evolua junto com a operação.",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <HomeHero
        eyebrow="Engenharia de software para empresas de serviços"
        title="Transformamos processos manuais em operações digitais mais eficientes"
        description="Criamos sistemas web, automações, integrações e aplicações de inteligência artificial que ajudam empresas a ganhar organização, produtividade e previsibilidade."
        actions={
          <>
            <Button href="/contato" size="lg">
              Solicitar diagnóstico <ArrowRight size={18} />
            </Button>

            <Button href="/servicos" variant="secondary" size="lg">
              Conhecer nossos serviços
            </Button>
          </>
        }
      />

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-2 md:pt-2">
              Serviços
            </Text>

            <div className="md:col-span-8 md:col-start-4 lg:col-span-7">
              <Heading as="h2" className="max-w-2xl">
                Soluções definidas a partir do problema do negócio
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Desenvolvemos sistemas web, automações e aplicações de
                inteligência artificial. A presença digital é um serviço
                complementar e uma porta de entrada para empresas que ainda
                estão estruturando sua base digital.
              </Text>
            </div>
          </div>

          <Grid
            cols={4}
            className="mt-12 gap-5 border-t border-border pt-8 md:mt-16 md:pt-10"
          >
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section surface className="py-24 md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-12 md:gap-8">
            <Text variant="caption" className="md:col-span-2 md:pt-2">
              Método
            </Text>

            <div className="md:col-span-8 md:col-start-4 lg:col-span-7">
              <Heading as="h2" className="max-w-2xl">
                Antes do código, entendemos o negócio
              </Heading>

              <Text variant="lead" className="mt-5 max-w-2xl">
                Cada projeto começa com entendimento do problema. A tecnologia
                entra como ferramenta para construir uma solução eficiente e
                alinhada à realidade da empresa.
              </Text>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:mt-16 md:grid-cols-2">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.title}
                index={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DifferentialsSection />

      <Section className="py-24 md:py-32">
        <CTASection
          title="Vamos entender o problema antes de definir a solução?"
          description="Conte como sua operação funciona e quais processos precisam ganhar eficiência."
          actions={
            <Button href="/contato" size="lg">
              Falar com a Fyrmma
            </Button>
          }
        />
      </Section>
    </PageWrapper>
  );
}
