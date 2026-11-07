import type { Metadata } from "next";
import Link from "next/link";

import { Hero } from "@/components/sections";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description:
    "Condições para utilizar o site institucional da Conjuga, seus conteúdos e canais de contato.",
  path: "/termos-de-uso",
});

const sections = [
  {
    title: "1. Identificação e contato",
    content: (
      <Text className="mt-3">
        Este site é apresentado sob a marca Conjuga. Dúvidas sobre estes Termos
        podem ser enviadas para{" "}
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="link-underline text-signal-strong"
        >
          {siteConfig.links.email}
        </a>
        .
      </Text>
    ),
  },
  {
    title: "2. Utilização do site",
    content: (
      <>
        <Text className="mt-3">
          O site apresenta informações institucionais e comerciais sobre a
          Conjuga e seus serviços. O visitante deve utilizá-lo de forma lícita,
          sem tentar acessar áreas não públicas, interferir no funcionamento ou
          comprometer a segurança do site.
        </Text>
        <Text className="mt-3">
          As informações enviadas pelos canais de contato devem ser verdadeiras
          e relacionadas à solicitação. Navegar pelo site ou enviar uma
          mensagem não cria, por si só, uma contratação.
        </Text>
      </>
    ),
  },
  {
    title: "3. Serviços e propostas comerciais",
    content: (
      <>
        <Text className="mt-3">
          As ofertas e seus valores iniciais estão na página de{" "}
          <Link href="/servicos" className="link-underline text-signal-strong">
            Serviços
          </Link>
          . O valor final depende da necessidade e do escopo definidos em
          proposta específica. Nenhum serviço começa antes da aprovação da
          proposta e da formalização das condições da contratação.
        </Text>
        <Text className="mt-3">
          Manutenção, evolução e suporte são serviços contratados separadamente,
          com limites e disponibilidade definidos na proposta. A manutenção de
          sites tem preço inicial na página de Serviços; seus limites são
          resumidos nas informações comerciais do site e definidos na
          contratação. Projetos desenvolvidos pela Conjuga contam com garantia
          técnica inicial de 30 dias corridos após entrega e aceite para
          defeitos reproduzíveis em funcionalidades entregues e aprovadas,
          quando decorrentes da implementação da Conjuga. A garantia não cobre
          novas funcionalidades, alterações de escopo, mudanças solicitadas
          após aprovação ou falhas de serviços externos, não substitui
          manutenção e não restringe direitos previstos em lei.
        </Text>
        <Text className="mt-3">
          Domínio, hospedagem, licenças e outros serviços de terceiros não
          estão incluídos nos valores dos projetos, salvo quando descritos na
          proposta. A contratação e as condições desses serviços externos são
          definidas com o respectivo fornecedor. A Conjuga pode auxiliar na
          contratação ou configuração mediante contratação específica.
        </Text>
      </>
    ),
  },
  {
    title: "4. Conteúdo e propriedade intelectual",
    content: (
      <Text className="mt-3">
        Textos, marcas, imagens, código e demais materiais disponibilizados
        neste site permanecem sujeitos aos direitos de seus respectivos
        titulares. Não copie, distribua ou utilize materiais sem autorização,
        exceto nas hipóteses permitidas pela legislação aplicável. Conteúdos
        enviados por visitantes ou clientes não transferem à Conjuga direitos
        que não tenham sido expressamente concedidos.
      </Text>
    ),
  },
  {
    title: "5. Links e serviços de terceiros",
    content: (
      <Text className="mt-3">
        O site pode direcionar a serviços externos, como canais de mensagem e
        redes sociais. Esses serviços são operados por terceiros e seguem suas
        próprias condições de uso e políticas de privacidade. A disponibilidade
        e o conteúdo desses ambientes não são controlados pela Conjuga.
      </Text>
    ),
  },
  {
    title: "6. Disponibilidade e alterações",
    content: (
      <Text className="mt-3">
        A Conjuga pode atualizar, modificar ou retirar conteúdos e recursos do
        site. O funcionamento pode sofrer interrupções ou apresentar erros; não
        é possível garantir disponibilidade contínua. Essas condições não
        afastam responsabilidades ou direitos que não possam ser limitados por
        lei.
      </Text>
    ),
  },
  {
    title: "7. Dados pessoais",
    content: (
      <Text className="mt-3">
        O tratamento de dados pessoais relacionado ao site e aos canais de
        contato é explicado na{" "}
        <Link
          href="/politica-de-privacidade"
          className="link-underline text-signal-strong"
        >
          Política de Privacidade
        </Link>
        .
      </Text>
    ),
  },
  {
    title: "8. Alterações destes Termos",
    content: (
      <Text className="mt-3">
        Estes Termos podem ser atualizados para refletir mudanças no site,
        comerciais ou legais. A versão vigente e sua data de atualização ficam
        disponíveis nesta página.
      </Text>
    ),
  },
  {
    title: "9. Contato",
    content: (
      <Text className="mt-3">
        Para dúvidas sobre estes Termos, escreva para{" "}
        <a
          href={`mailto:${siteConfig.links.email}`}
          className="link-underline text-signal-strong"
        >
          {siteConfig.links.email}
        </a>
        .
      </Text>
    ),
  },
];

export default function TermosDeUsoPage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Informações legais"
        title="Termos de Uso"
        description="Condições para utilização do site institucional da Conjuga, seus conteúdos e canais de contato."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Text variant="caption">Vigência</Text>
              <p className="mt-4 max-w-[16ch] font-display text-[1.0625rem] font-medium leading-snug text-text-primary">
                Última atualização: 3 de novembro de 2026.
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
