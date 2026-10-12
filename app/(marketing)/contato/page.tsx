import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero, ContactForm, FAQAccordion, MethodTimeline } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Stagger, StaggerItem } from "@/components/motion";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description:
    "Conte o desafio da sua empresa. Vamos entender sua operação, analisar o contexto do negócio e definir a abordagem mais adequada para o seu momento.",
  path: "/contato",
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
      "Após a entrega, o trabalho pode continuar com suporte e ajustes conforme a operação precisa — escopo e condições definidos para cada projeto.",
  },
];

const nextSteps = [
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
    title: "Avaliamos a necessidade",
    description:
      "Consideramos quais soluções podem fazer sentido para o momento da empresa, respeitando prioridades e orçamento.",
  },
  {
    title: "Proposta comercial",
    description:
      "Quando fizer sentido seguir, apresentamos uma proposta com escopo, investimento, prazo e próximos passos.",
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
    description: "Acompanhe novidades e conteúdos da Conjuga.",
    value: "@conjuga.br",
    href: "https://instagram.com/conjuga.br",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Acompanhe novidades e atualizações da Conjuga.",
    value: "/company/conjuga-br",
    href: "https://www.linkedin.com/company/conjuga-br",
    external: true,
  },
];

const faqItems = [
  {
    question: "Ainda não sei qual solução minha empresa precisa.",
    answer:
      "Não tem problema. Começamos entendendo sua operação para definir a solução mais adequada.",
  },
  {
    question: "Quanto custa um projeto?",
    answer:
      "Cada projeto possui um escopo diferente. O investimento é definido após entendermos o contexto, a complexidade e os objetivos da empresa.",
  },
  {
    question: "Quanto tempo leva para receber um retorno?",
    answer:
      "O primeiro retorno acontece em até um dia útil. Esse prazo não inclui orçamento, diagnóstico ou solução; em casos mais complexos, usamos esse primeiro contato para alinhar informações antes da proposta.",
  },
  {
    question: "Existe suporte após a entrega?",
    answer:
      "Após a entrega, a continuidade pode incluir suporte, sustentação e evolução contínua da solução. Escopo e condições são definidos para cada projeto.",
  },
];

const beforeSending = [
  "Comece descrevendo o problema ou objetivo da empresa.",
  "Não é necessário saber qual solução ou tecnologia utilizar.",
  "Você recebe o primeiro retorno em até 1 dia útil.",
  "A proposta será construída após entendermos o contexto do negócio.",
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
        title="Conte o que sua operação precisa resolver."
        description="Pode ser um site, um processo manual, informações em planilhas ou ferramentas que não se conectam. Começamos entendendo o negócio para avaliar a solução adequada hoje e o que pode evoluir amanhã."
      />

      <Section>
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Text variant="caption">Primeira conversa</Text>

              <Heading as="h2" className="mt-4 max-w-[18ch] text-display-m">
                Vamos começar pelo problema
              </Heading>

              <Text className="mt-5 max-w-md">
                Você não precisa decidir qual tecnologia utilizar antes da
                conversa. Explique o contexto da empresa e o que deseja melhorar.
                Com esse contexto, indicamos os próximos passos. Se
                preferir, conheça nossos{" "}
                <Link href="/servicos" className="link-underline text-signal-strong">
                  serviços
                </Link>
                .
              </Text>

              <div className="mt-14">
                <Text variant="caption">Antes de enviar</Text>

                <Heading as="h3" className="mt-4 text-heading-m">
                  O que você precisa saber
                </Heading>

                <Stagger as="ol" className="mt-6 border-t border-border">
                  {beforeSending.map((item, index) => (
                    <StaggerItem
                      as="li"
                      key={item}
                      className="group flex gap-6 border-b border-border py-4"
                    >
                      <span className="item-index pt-1 transition-colors duration-200 group-hover:text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Text className="max-w-sm text-small">{item}</Text>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-[var(--shadow-panel)] sm:p-8 lg:p-10">
                <Text variant="caption">Mensagem</Text>

                <Heading as="h2" className="mt-4 text-heading-m">
                  Conte sobre sua empresa
                </Heading>

                <Text className="mt-4 max-w-md text-small">
                  Descreva sua empresa, como a operação funciona hoje e o que
                  deseja melhorar. Se usa WhatsApp, planilhas ou ferramentas
                  desconectadas, conte também.
                </Text>

                <div className="mt-9">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <Text variant="caption">Próximos passos</Text>

          <Heading as="h2" className="mt-4 max-w-[22ch] text-display-m">
            O que acontece depois do contato?
          </Heading>

          <Text variant="lead" className="mt-6 max-w-2xl">
            Primeiro buscamos entender o contexto da sua empresa, os desafios,
            os processos atuais e o resultado que você deseja alcançar. A partir
            dessa conversa, avaliamos a necessidade e os próximos passos que
            fizerem sentido.
          </Text>

          <div className="mt-14">
            <MethodTimeline steps={nextSteps} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Processo</Text>

              <Heading as="h2" className="mt-4 max-w-[14ch] text-heading-m">
                Como trabalhamos
              </Heading>

              <Text className="mt-5 max-w-xs text-small">
                O processo considera riscos, prioridades e a possibilidade de o
                trabalho continuar com suporte, sustentação e evolução conforme
                as necessidades da operação.
              </Text>
            </div>

            <div className="lg:col-span-9">
              <Stagger as="ol" className="border-t border-border">
                {processSteps.map((step, index) => (
                  <StaggerItem
                    as="li"
                    key={step.title}
                    className="group grid gap-3 border-b border-border py-6 sm:grid-cols-[4rem_1fr] sm:gap-8"
                  >
                    <span className="item-index pt-1.5 transition-colors duration-200 group-hover:text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="max-w-2xl">
                      <Heading as="h3" className="text-heading-s">
                        {step.title}
                      </Heading>

                      <Text className="mt-2 text-small">{step.description}</Text>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <Text variant="caption">Atendimento</Text>

          <Heading as="h2" className="mt-4 max-w-[22ch] text-display-m">
            Escolha como deseja entrar em contato
          </Heading>

          <Text variant="lead" className="mt-6 max-w-2xl">
            Você pode iniciar uma conversa pelo formulário ou utilizar um dos
            canais abaixo. Todos os contatos são respondidos diretamente pela
            Conjuga.
          </Text>

          <Stagger as="ul" className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border md:grid-cols-2">
            {contactChannels.map((channel) => (
              <StaggerItem
                as="li"
                key={channel.title}
                className="group flex flex-col justify-between gap-8 bg-surface p-7 lg:p-9"
              >
                <div>
                  <Heading as="h3" className="text-heading-s">
                    {channel.title}
                  </Heading>

                  <Text className="mt-3 max-w-xs text-small">
                    {channel.description}
                  </Text>
                </div>

                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-small font-medium text-signal-strong"
                >
                  {channel.value}
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-[var(--ease-precise)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <Text variant="caption">Perguntas frequentes</Text>

              <Heading as="h2" className="mt-4 max-w-[16ch] text-heading-m">
                Dúvidas comuns antes de iniciar um projeto
              </Heading>
            </div>

            <div className="lg:col-span-9">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
