import { Container, Heading, Text } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { PageWrapper } from "@/components/layout";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="flex min-h-[70vh] items-center justify-center">
        <Container>
          <div className="mx-auto max-w-md text-center">
            <Text variant="caption">Erro 404</Text>
            <Heading as="h1" className="mt-4">
              Essa página não existe
            </Heading>
            <Text variant="body" className="mt-4">
              O endereço acessado não corresponde a nenhuma página do site. Verifique o link ou volte para a home.
            </Text>
            <Button href="/" className="mt-8">
              Voltar para a home
            </Button>
          </div>
        </Container>
      </div>
    </PageWrapper>
  );
}
