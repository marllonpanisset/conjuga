import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero, ContactForm } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Fale com a Fyrmma, empresa de engenharia de software que desenvolve sistemas web, automações, integrações e soluções com inteligência artificial aplicada.",
  path: "/contato",
});

const processSteps = [
  {
    title: "1. Entendemos o contexto",
    description:
      "Analisamos seu negócio, objetivos e processos atuais para identificar gargalos e oportunidades de melhoria.",
  },
  {
    title: "2. Identificamos oportunidades",
    description:
      "Avaliamos o cenário e definimos quais soluções fazem sentido para sua necessidade, sem desenvolver algo desnecessário.",
  },
  {
    title: "3. Construímos a solução adequada",
    description:
      "Desenvolvemos sistemas web, automações, integrações ou soluções com inteligência artificial aplicada a partir do diagnóstico.",
  },
];

export default function ContatoPage() {
  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Contato",
            path: "/contato",
          },
        ])}
      />

      <Hero
        eyebrow="Contato"
        title="Vamos entender o próximo desafio da sua operação"
        description="Conte sobre sua empresa, seus processos e o que você deseja melhorar. Vamos analisar o problema e o contexto do negócio antes de definir a solução mais adequada."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
            <div className="min-w-0">
              <Heading
                as="h2"
                className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
              >
                Conte seu desafio
              </Heading>

              <Text variant="muted" className="mt-3">
                Seja para desenvolver sistemas web, automações, integrações ou
                soluções com inteligência artificial aplicada, queremos entender
                primeiro o problema antes de indicar a tecnologia.
              </Text>

              <div className="mt-8">
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  Como funciona
                </Heading>

                <div className="mt-5 space-y-6">
                  {processSteps.map((step) => (
                    <div key={step.title}>
                      <Text className="font-medium text-text-primary">
                        {step.title}
                      </Text>

                      <Text variant="muted" className="mt-2">
                        {step.description}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  Prefere outro canal?
                </Heading>

                <Text variant="muted" className="mt-3">
                  Envie um e-mail diretamente para{" "}
                  <a
                    href={`mailto:${siteConfig.links.email}`}
                    className="link-underline break-all text-signal-strong"
                  >
                    {siteConfig.links.email}
                  </a>
                  .
                </Text>
              </div>
            </div>

            <div className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
