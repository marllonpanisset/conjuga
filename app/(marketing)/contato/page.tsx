import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero, ContactForm } from "@/components/sections";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contato",
  description: "Fale com a Fyrmma e solicite uma proposta de solução digital sob medida para sua empresa.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Contato"
        title="Vamos entender o contexto da sua empresa"
        description="Conte sobre seu negócio, seu processo atual e o que você precisa resolver. Retornamos com uma proposta objetiva."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.3fr]">
            <div>
              <Heading as="h3">Outro canal</Heading>
              <Text variant="muted" className="mt-3">
                Prefere falar diretamente? Envie um e-mail para{" "}
                <a href={`mailto:${siteConfig.links.email}`} className="link-underline text-signal-strong">
                  {siteConfig.links.email}
                </a>
                .
              </Text>
            </div>
            <ContactForm />
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
