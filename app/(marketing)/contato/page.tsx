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
    value: "(21) 98509-7290",
    href: "https://wa.me/5521985097290",
    external: true,
  },
  {
    title: "E-mail",
    value: "contato@conjuga.com.br",
    href: "mailto:contato@conjuga.com.br",
    external: false,
  },
  {
    title: "Instagram",
    value: "@conjuga.br",
    href: "https://instagram.com/conjuga.br",
    external: true,
  },
  {
    title: "LinkedIn",
    value: "/company/conjuga-br",
    href: "https://www.linkedin.com/company/conjuga-br",
    external: true,
  },
];

const faqItems = [
  {
    question: "Quanto custa desenvolver um site?",
    answer:
      "Landing Pages começam em R$ 2.490, sites institucionais em R$ 4.900 e sites com CMS em R$ 7.900. Sistemas e automações são sob consulta. O investimento final depende do escopo.",
  },
  {
    question: "Qual a diferença entre um site institucional e um site com CMS?",
    answer:
      "O site institucional apresenta a empresa e seus serviços. A oferta com CMS inclui um painel administrativo para gerenciar conteúdos e informações definidos para o projeto.",
  },
  {
    question: "A Conjuga desenvolve sistemas personalizados?",
    answer:
      "Sim. Desenvolvemos sistemas e automações conforme as necessidades operacionais de cada empresa. Os projetos são avaliados individualmente.",
  },
  {
    question: "A hospedagem e o domínio estão incluídos?",
    answer:
      "Não. Domínio, hospedagem e serviços de terceiros são contratados separadamente. A Conjuga pode auxiliar na configuração mediante contratação específica.",
  },
  {
    question: "A Conjuga faz manutenção de sites existentes?",
    answer:
      "Sim. A manutenção de sites começa em R$ 390 por mês, conforme os limites e as condições definidos na contratação.",
  },
  {
    question: "O que está incluído na manutenção mensal?",
    answer:
      "Até duas solicitações por mês, limitadas a duas horas de execução no total. Inclui pequenas atualizações de conteúdo, substituições de imagens, informações de contato, ajustes visuais e correções simples. Horas não utilizadas não acumulam; solicitações adicionais e mudanças estruturais são orçadas à parte. O atendimento ocorre em dias úteis, das 9h às 18h (horário de Brasília), com primeira resposta em até dois dias úteis; o prazo de resolução é informado após análise.",
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo depende da solução, das funcionalidades e do escopo. Ele é definido após entendermos a necessidade.",
  },
  {
    question: "Como funciona a contratação?",
    answer:
      "Primeiro entendemos a necessidade. Depois definimos solução, escopo, investimento e condições. O trabalho começa após a aprovação da proposta e a formalização da contratação.",
  },
  {
    question: "A Conjuga atende empresas de outras cidades?",
    answer:
      "Sim. Os projetos podem ser desenvolvidos remotamente para empresas de diferentes regiões do Brasil.",
  },
  {
    question: "Como solicitar suporte ou melhorias em um projeto existente?",
    answer:
      "Entre em contato e descreva a necessidade. A Conjuga avaliará o escopo, a disponibilidade e as condições de atendimento antes de iniciar o trabalho.",
  },
];

const beforeSending = [
  "Comece descrevendo o problema ou objetivo da empresa.",
  "Não é necessário saber qual solução ou tecnologia utilizar.",
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
        description="Pode ser um site, um processo manual ou ferramentas que não se conectam. Começamos entendendo o negócio."
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
                Explique o contexto da empresa e o que deseja melhorar. Com
                esse contexto, indicamos os próximos passos. Se
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
            Entendemos seu contexto, avaliamos o problema e as prioridades
            da operação e indicamos os próximos passos que fizerem sentido.
          </Text>

          <div className="mt-14">
            <MethodTimeline steps={nextSteps} />
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
            Pelo formulário ou por um dos canais abaixo. Todo contato é
            respondido diretamente pela Conjuga.
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
