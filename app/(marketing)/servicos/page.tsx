import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import {
  Button,
  ButtonArrow,
  Container,
  Section,
  SectionHeader,
  Text,
} from "@/components/ui";

import { Hero, ServiceIndex, CTASection } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { services } from "@/content/servicos";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Serviços",
  description:
    "Conheça como a Conjuga desenvolve sistemas web, automações, integrações e sites para resolver problemas operacionais de empresas de serviços.",
  path: "/servicos",
});

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
        title="Engenharia de software para resolver problemas da operação"
        description="A Conjuga desenvolve sistemas web, automações e integrações para empresas com processos manuais, ferramentas desconectadas e desafios operacionais. Aplicamos inteligência artificial quando fizer sentido. Um site também pode ser o primeiro projeto, quando a empresa precisa estruturar sua presença digital."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-baseline gap-3">
                <span className="item-index text-signal">01</span>
                <Text variant="caption">Antes da tecnologia</Text>
              </div>
            </div>

            <div className="lg:col-span-9">
              <p className="max-w-[26ch] font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.022em] text-balance text-text-primary">
                Você não precisa saber qual tecnologia ou serviço contratar.
              </p>

              <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 sm:gap-12">
                <Text variant="lead" className="max-w-md">
                  A conversa começa pelo contexto, pelos processos e pelos
                  desafios do negócio para compreender qual solução pode ser
                  adequada.
                </Text>

                <Text className="max-w-md">
                  Uma mesma solução pode combinar diferentes serviços para
                  atender às necessidades da empresa de forma integrada.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="raised" rule>
        <Container>
          <SectionHeader
            label="Soluções"
            title="Comece pela necessidade da sua empresa"
            lead="Entendemos o negócio e definimos o que faz sentido agora. Um site pode iniciar o trabalho; sistemas, automações e integrações atendem necessidades operacionais conforme identificadas."
          />

          <div className="mt-14 lg:mt-20">
            <ServiceIndex services={services} />
          </div>
        </Container>
      </Section>

      <Section rule>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex items-baseline gap-3">
                <span className="item-index text-signal">02</span>
                <Text variant="caption">Depois da entrega</Text>
              </div>
            </div>

            <div className="lg:col-span-9">
              <h2 className="max-w-[24ch] font-display text-[clamp(1.75rem,3.6vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.022em] text-balance text-text-primary">
                O trabalho pode continuar após a primeira entrega
              </h2>

              <Text className="mt-8 max-w-2xl text-[1.0625rem] leading-[1.6]">
                Depois de um site ou de outra primeira entrega, a relação pode
                continuar com suporte e ajustes, com escopo definido para cada
                projeto. Conforme
                o contexto do negócio, também podemos desenvolver sistemas,
                automações e integrações para outros problemas da operação.
              </Text>

              <Button
                href="/sobre"
                variant="secondary"
                className="mt-9"
              >
                Entenda como a Conjuga trabalha <ButtonArrow size={15} />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Qual dessas necessidades parece a sua?"
        description="Se você reconheceu algum problema acima, descreva sua operação que indicamos por onde começar."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conversar com a Conjuga <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
