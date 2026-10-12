import type { Metadata } from "next";

import { Hero } from "@/components/sections";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description:
    "Conheça os termos de uso do site da Conjuga e as condições para utilização de nossos conteúdos, formulários e serviços digitais.",
  path: "/termos-de-uso",
});

const sections = [
  {
    title: "1. Objetivo",
    content: (
      <>
        <Text className="mt-3">
          Estes Termos de Uso estabelecem as condições para utilização do site
          institucional da Conjuga, bem como dos conteúdos, formulários e demais
          recursos disponibilizados aos visitantes.
        </Text>
      </>
    ),
  },
  {
    title: "2. Utilização do site",
    content: (
      <>
        <Text className="mt-3">
          O conteúdo deste site possui caráter exclusivamente informativo e tem
          como objetivo apresentar a empresa, seus serviços e sua forma de
          atuação.
        </Text>

        <Text className="mt-3">
          O envio de um formulário de contato ou a navegação pelo site não cria
          qualquer vínculo contratual entre a Conjuga e o visitante.
        </Text>

        <Text className="mt-3">
          O tratamento de dados pessoais decorrente da utilização do site é
          disciplinado pela Política de Privacidade da Conjuga, que complementa
          estes Termos de Uso.
        </Text>
      </>
    ),
  },
  {
    title: "3. Propostas comerciais",
    content: (
      <>
        <Text className="mt-3">
          Qualquer prestação de serviços dependerá da análise do contexto da
          empresa, da definição do escopo e da formalização de proposta
          comercial específica entre as partes.
        </Text>
      </>
    ),
  },
  {
    title: "4. Propriedade intelectual",
    content: (
      <>
        <Text className="mt-3">
          Salvo indicação em contrário, todo o conteúdo deste site, incluindo
          textos, identidade visual, ilustrações, código-fonte, componentes e
          demais materiais, pertence à Conjuga e está protegido pela legislação
          aplicável.
        </Text>

        <Text className="mt-3">
          Não é permitida a reprodução, distribuição ou utilização desse
          conteúdo sem autorização prévia, exceto nos casos previstos em lei.
        </Text>
      </>
    ),
  },
  {
    title: "5. Disponibilidade",
    content: (
      <>
        <Text className="mt-3">
          A Conjuga poderá alterar, atualizar ou descontinuar qualquer conteúdo,
          funcionalidade ou serviço apresentado neste site, a qualquer momento e
          sem aviso prévio.
        </Text>
      </>
    ),
  },
  {
    title: "6. Limitação de responsabilidade",
    content: (
      <>
        <Text className="mt-3">
          Embora sejam adotadas boas práticas para manter as informações
          atualizadas e o funcionamento adequado do site, não garantimos
          disponibilidade contínua, ausência de interrupções ou inexistência de
          erros técnicos.
        </Text>
      </>
    ),
  },
  {
    title: "7. Alterações destes termos",
    content: (
      <>
        <Text className="mt-3">
          Estes Termos de Uso poderão ser atualizados periodicamente para
          refletir alterações legais, técnicas ou operacionais.
        </Text>

        <Text className="mt-3">
          A data da última atualização estará sempre disponível nesta página.
        </Text>
      </>
    ),
  },
];

export default function TermosDeUsoPage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Informações legais"
        title="Termos de Uso"
        description="Conheça as condições para utilização do site da Conjuga, incluindo responsabilidades, direitos e regras aplicáveis aos visitantes."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Text variant="caption">Vigência</Text>
              <p className="mt-4 max-w-[16ch] font-display text-[1.0625rem] font-medium leading-snug text-text-primary">
                Última atualização: 6 de agosto de 2026.
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <div className="divide-y divide-border border-t border-border">
                {sections.map((section) => (
                  <section key={section.title} className="py-9 first:pt-0">
                    <Heading as="h2" className="text-heading-m">
                      {section.title}
                    </Heading>

                    {section.content}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
