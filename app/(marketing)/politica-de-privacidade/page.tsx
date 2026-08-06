import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Entenda como a Conjuga coleta, utiliza, armazena e protege os dados pessoais fornecidos por visitantes e clientes em seu site.",
  path: "/politica-de-privacidade",
});

export default function PoliticaPrivacidadePage() {
  return (
    <PageWrapper withGrid={false}>
      <Section className="pt-20 sm:pt-24 md:pt-32">
        <Container>
          <div className="mx-auto min-w-0 max-w-2xl">
            <Heading as="h1" className="text-balance [overflow-wrap:anywhere]">
              Política de Privacidade
            </Heading>
            <Text variant="muted" className="mt-4">
              Última atualização: 29 de julho de 2026.
            </Text>

            <div className="mt-10 flex flex-col gap-8">
              <div>
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  1. Dados coletados
                </Heading>
                <Text variant="body" className="mt-3">
                  Coletamos os dados fornecidos voluntariamente através do
                  formulário de contato, como nome, e-mail, empresa e mensagem,
                  com a finalidade exclusiva de responder à solicitação.
                </Text>
              </div>
              <div>
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  2. Uso das informações
                </Heading>
                <Text variant="body" className="mt-3">
                  As informações são utilizadas apenas para contato comercial
                  referente à solicitação enviada, não sendo compartilhadas com
                  terceiros para fins de marketing.
                </Text>
              </div>
              <div>
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  3. Contato
                </Heading>
                <Text variant="body" className="mt-3">
                  Dúvidas sobre esta política podem ser enviadas para{" "}
                  {siteConfig.links.email}.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
