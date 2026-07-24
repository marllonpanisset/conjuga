import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description: "Política de privacidade da Fyrmma sobre coleta, uso e proteção de dados pessoais.",
  path: "/politica-de-privacidade",
});

export default function PoliticaPrivacidadePage() {
  return (
    <PageWrapper withGrid={false}>
      <Section className="pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Heading as="h1">Política de Privacidade</Heading>
            <Text variant="muted" className="mt-4">
              Última atualização: a definir na publicação.
            </Text>

            <div className="mt-10 flex flex-col gap-8">
              <div>
                <Heading as="h3">1. Dados coletados</Heading>
                <Text variant="body" className="mt-3">
                  Coletamos os dados fornecidos voluntariamente através do formulário de contato, como nome, e-mail,
                  empresa e mensagem, com a finalidade exclusiva de responder à solicitação.
                </Text>
              </div>
              <div>
                <Heading as="h3">2. Uso das informações</Heading>
                <Text variant="body" className="mt-3">
                  As informações são utilizadas apenas para contato comercial referente à solicitação enviada,
                  não sendo compartilhadas com terceiros para fins de marketing.
                </Text>
              </div>
              <div>
                <Heading as="h3">3. Contato</Heading>
                <Text variant="body" className="mt-3">
                  Dúvidas sobre esta política podem ser enviadas para {siteConfig.links.email}.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
