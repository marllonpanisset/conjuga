import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termos de Uso",
  description: "Termos de uso do site institucional da Fyrmma.",
  path: "/termos-de-uso",
});

export default function TermosDeUsoPage() {
  return (
    <PageWrapper withGrid={false}>
      <Section className="pt-20 sm:pt-24 md:pt-32">
        <Container>
          <div className="mx-auto min-w-0 max-w-2xl">
            <Heading as="h1" className="text-balance [overflow-wrap:anywhere]">
              Termos de Uso
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
                  1. Uso do site
                </Heading>
                <Text variant="body" className="mt-3">
                  O conteúdo deste site é fornecido para fins informativos sobre os serviços da Fyrmma e não
                  constitui garantia contratual até a formalização de uma proposta comercial.
                </Text>
              </div>
              <div>
                <Heading
                  as="h2"
                  className="text-[clamp(1.375rem,2.2vw,1.75rem)] leading-[1.2] tracking-[-0.01em]"
                >
                  2. Propriedade intelectual
                </Heading>
                <Text variant="body" className="mt-3">
                  Todo o conteúdo, identidade visual e código deste site pertencem à Fyrmma, salvo indicação
                  contrária.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
