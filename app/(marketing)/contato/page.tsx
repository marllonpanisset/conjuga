import type { Metadata } from "next";
import Link from "next/link";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero, ContactForm } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Conte o desafio da sua empresa. A Conjuga analisa sua operação e propõe a solução mais adequada para organizar processos, fortalecer a presença digital e preparar o negócio para evoluir.",
  path: "/contato",
});

const processSteps = [
  {
    title: "Diagnóstico",
    description:
      "Entendemos como o negócio funciona, onde estão os gargalos e quais tarefas geram atrito.",
  },
  {
    title: "Planejamento",
    description:
      "Definimos a solução mais simples capaz de resolver o problema antes de escolher a tecnologia.",
  },
  {
    title: "Implantação",
    description:
      "Implantamos, configuramos e validamos a solução com foco em qualidade, segurança e facilidade de evolução.",
  },
  {
    title: "Evolução contínua",
    description:
      "Acompanhamos novas necessidades para que o ativo digital evolua junto com a operação.",
  },
];

const contactChannels = [
  {
    title: "WhatsApp",
    description:
      "Converse diretamente sobre o seu projeto e tire dúvidas iniciais.",
    value: "(21) 98788-1633",
    href: "https://wa.me/5521987881633",
    external: true,
  },
  {
    title: "E-mail",
    description:
      "Envie informações detalhadas sobre sua empresa e seu projeto.",
    value: "contato@conjuga.com.br",
    href: "mailto:contato@conjuga.com.br",
    external: false,
  },
  {
    title: "Instagram",
    description: "Acompanhe conteúdos, novidades e bastidores da Conjuga.",
    value: "@conjuga.br",
    href: "https://instagram.com/conjuga.br",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Acompanhe novidades, artigos e atualizações da Conjuga.",
    value: "/company/conjuga-br",
    href: "https://www.linkedin.com/company/conjuga-br",
    external: true,
  },
];

const faqItems = [
  {
    question: "Ainda não sei qual solução minha empresa precisa.",
    answer:
      "Não. Começamos entendendo o problema da empresa para definir a solução mais adequada.",
  },
  {
    question: "Quanto custa um projeto?",
    answer:
      "Cada projeto recebe um orçamento personalizado conforme escopo, complexidade e objetivos.",
  },
  {
    question: "Quanto tempo leva para receber um retorno?",
    answer:
      "Normalmente respondemos em até um dia útil. Em casos mais complexos, o primeiro retorno serve para alinhar informações antes da proposta.",
  },
  {
    question: "Vocês atendem empresas de todo o Brasil?",
    answer: "Sim. Todo o processo pode ser realizado de forma remota.",
  },
  {
    question: "Existe suporte após a entrega?",
    answer:
      "Sim. Podemos oferecer manutenção e evolução contínua através de contrato específico.",
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
        description="Conte como sua empresa funciona hoje, quais desafios deseja resolver e onde estão os principais gargalos. A partir desse diagnóstico, definimos a solução mais adequada para o seu momento."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
            {/* Diagnóstico */}
            <div className="min-w-0">
              <Text variant="caption">Diagnóstico</Text>

              <Heading
                as="h2"
                className="mt-3 text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
              >
                Vamos começar pelo problema
              </Heading>

              <Text variant="muted" className="mt-3">
                Você não precisa decidir qual tecnologia utilizar antes da
                conversa. Explique o contexto da empresa e o que deseja
                melhorar. A solução será definida a partir desse diagnóstico. Se
                preferir, conheça nossos{" "}
                <Link
                  href="/servicos"
                  className="link-underline text-signal-strong"
                >
                  serviços
                </Link>
                .
              </Text>

              <div className="mt-10">
                <Text variant="caption">Antes de enviar</Text>

                <Heading
                  as="h3"
                  className="mt-3 text-[clamp(1.25rem,2vw,1.5rem)] leading-[1.2]"
                >
                  O que você precisa saber
                </Heading>

                <div className="mt-6 overflow-hidden rounded-[16px] border border-border bg-border">
                  {[
                    "Comece descrevendo o problema ou objetivo da empresa.",
                    "Não é necessário saber qual solução ou tecnologia utilizar.",
                    "O primeiro contato é sem compromisso.",
                    "A proposta será construída após entendermos o contexto do negócio.",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-5 border-b border-border bg-surface p-6 last:border-b-0"
                    >
                      <span
                        className="
                    flex h-9 w-9 shrink-0 items-center justify-center
                    border border-border-strong
                    bg-background
                    font-mono text-[0.6875rem]
                    font-semibold
                    tracking-[0.04em]
                    text-signal-strong
                  "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Text className="self-center">{item}</Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ContactForm */}
            <div className="min-w-0">
              <Text variant="caption">Mensagem</Text>

              <Heading
                as="h2"
                className="mt-3 text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
              >
                Conte sobre sua empresa
              </Heading>

              <Text variant="muted" className="mt-3 max-w-xl">
                Descreva sua empresa, seus desafios e o objetivo que deseja
                alcançar.
              </Text>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <Text variant="caption">Próximos passos</Text>

          <Heading as="h2" className="mt-3 max-w-2xl">
            O que acontece depois do contato?
          </Heading>

          <Text variant="lead" className="mt-5 max-w-2xl">
            Nosso primeiro objetivo é entender o contexto da sua empresa. Antes
            de falar sobre tecnologias, analisamos os desafios, os processos
            atuais e o resultado que você deseja alcançar.
          </Text>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:grid-cols-2">
            {[
              {
                title: "Recebemos sua mensagem",
                description:
                  "Analisamos as informações enviadas para compreender o contexto inicial da empresa.",
              },
              {
                title: "Entendemos o desafio",
                description:
                  "Se necessário, entramos em contato para esclarecer detalhes e compreender melhor os processos envolvidos.",
              },
              {
                title: "Definimos a melhor abordagem",
                description:
                  "Avaliamos quais soluções fazem sentido para o momento da empresa, respeitando prioridades e orçamento.",
              },
              {
                title: "Enviamos uma proposta comercial",
                description:
                  "Enviamos uma proposta com escopo, investimento, prazo e próximos passos para iniciar o projeto.",
              },
            ].map((step, index) => (
              <div key={step.title} className="bg-surface p-6 md:p-8 lg:p-10">
                <span
                  className="
              flex h-9 w-9 items-center justify-center
              border border-border-strong
              bg-background
              font-mono text-[0.6875rem]
              font-semibold
              tracking-[0.04em]
              text-signal-strong
            "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Heading as="h3" className="mt-8">
                  {step.title}
                </Heading>

                <Text className="mt-3">{step.description}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="caption">Processo</Text>

          <Heading as="h2" className="mt-3 max-w-2xl">
            Como trabalhamos
          </Heading>

          <Text variant="lead" className="mt-5 max-w-2xl">
            Todas as soluções seguem um processo estruturado para reduzir
            riscos, organizar prioridades e garantir que a tecnologia acompanhe
            o crescimento da empresa.
          </Text>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="
            relative
            min-h-[220px]
            bg-surface
            p-6
            md:p-8
            lg:min-h-[240px]
            lg:p-10
          "
              >
                <div className="flex h-full flex-col justify-between gap-10">
                  <span
                    className="
                flex h-9 w-9 items-center justify-center
                border border-border-strong
                bg-background
                font-mono text-[0.6875rem]
                font-semibold
                tracking-[0.04em]
                text-signal-strong
              "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <Heading as="h3">{step.title}</Heading>

                    <Text className="mt-3">{step.description}</Text>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section surface>
        <Container>
          <Text variant="caption">Atendimento</Text>

          <Heading as="h2" className="mt-3 max-w-2xl">
            Escolha como deseja entrar em contato
          </Heading>

          <Text variant="lead" className="mt-5 max-w-2xl">
            Você pode iniciar uma conversa pelo formulário ou utilizar um dos
            canais abaixo. Todos os contatos chegam diretamente à Conjuga.
          </Text>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {contactChannels.map((channel) => (
              <div
                key={channel.title}
                className="
            rounded-[16px]
            border border-border
            bg-surface
            p-6
            shadow-[var(--shadow-card)]
          "
              >
                <Heading as="h3">{channel.title}</Heading>

                <Text className="mt-3">{channel.description}</Text>

                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="link-underline mt-6 inline-block font-medium text-signal-strong"
                >
                  {channel.value}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Text variant="caption">Perguntas frequentes</Text>

          <Heading as="h2" className="mt-3 max-w-2xl">
            Dúvidas comuns antes de iniciar um projeto
          </Heading>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[16px] border border-border bg-border md:grid-cols-2">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="
            bg-surface
            p-6
            md:p-8
            lg:p-10
          "
              >
                <span
                  className="
              flex h-9 w-9 items-center justify-center
              border border-border-strong
              bg-background
              font-mono text-[0.6875rem]
              font-semibold
              tracking-[0.04em]
              text-signal-strong
            "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Heading as="h3" className="mt-8">
                  {item.question}
                </Heading>

                <Text className="mt-3">{item.answer}</Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
