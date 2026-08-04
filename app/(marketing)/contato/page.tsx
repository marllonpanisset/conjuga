import type { Metadata } from "next";
import Link from "next/link";

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
    "Fale com a Conjuga, empresa de engenharia de software que desenvolve sistemas web, automações, integrações e soluções com inteligência artificial aplicada.",
  path: "/contato",
});

const processSteps = [
  {
    title: "1. Diagnóstico",
    description:
      "Entendemos como o negócio funciona, onde estão os gargalos e quais tarefas geram atrito.",
  },
  {
    title: "2. Arquitetura",
    description:
      "Definimos a solução mais simples capaz de resolver o problema antes de escolher a tecnologia.",
  },
  {
    title: "3. Desenvolvimento",
    description:
      "Construímos e validamos a solução com foco em qualidade, segurança, acessibilidade e manutenção.",
  },
  {
    title: "4. Evolução contínua",
    description:
      "Acompanhamos novas necessidades para que o ativo digital evolua junto com a operação.",
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
                Você não precisa saber qual tecnologia ou serviço escolher antes
                de conversar. Se quiser conhecer as possibilidades, veja nossos{" "}
                <Link
                  href="/servicos"
                  className="link-underline text-signal-strong"
                >
                  serviços
                </Link>
                .
              </Text>

              <div className="mt-8">
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  Como conduzimos um projeto
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
