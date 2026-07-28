import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero, ContactForm } from "@/components/sections";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Conte o desafio da sua empresa para a Fyrmma. Desenvolvemos sites, sistemas e automações sob medida para melhorar processos e oportunidades digitais.",
  path: "/contato",
});

const processSteps = [
  {
    title: "1. Entendemos o contexto",
    description:
      "Analisamos seu negócio, objetivos e processos atuais para compreender onde a tecnologia pode gerar impacto.",
  },
  {
    title: "2. Identificamos oportunidades",
    description:
      "Avaliamos o cenário e definimos quais soluções fazem sentido para sua necessidade, sem desenvolver algo desnecessário.",
  },
  {
    title: "3. Construímos a solução adequada",
    description:
      "Criamos sites, sistemas ou automações alinhados ao momento da sua empresa.",
  },
];

export default function ContatoPage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Contato"
        title="Vamos entender o próximo desafio digital da sua empresa"
        description="Conte sobre sua empresa, seus processos e o que você deseja melhorar. Vamos analisar o cenário e indicar o caminho mais adequado para sua necessidade."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
            <div className="min-w-0">
              <Heading as="h3">Conte seu desafio</Heading>

              <Text variant="muted" className="mt-3">
                Seja para criar uma nova presença digital, organizar processos
                internos ou desenvolver uma solução personalizada, queremos
                entender primeiro o problema antes de indicar a tecnologia.
              </Text>

              <div className="mt-8">
                <Heading as="h3">Como funciona</Heading>

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
                <Heading as="h3">Prefere outro canal?</Heading>

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
