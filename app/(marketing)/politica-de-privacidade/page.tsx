import type { Metadata } from "next";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text } from "@/components/ui";
import { Hero } from "@/components/sections";

import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Política de Privacidade",
  description:
    "Saiba quais dados o site da Conjuga recebe pelo formulário de contato e como funcionam o armazenamento e a análise de navegação.",
  path: "/politica-de-privacidade",
});

const sections = [
  {
    title: "1. Sobre esta política",
    content: (
      <Text className="mt-3">
        Esta política explica como a Conjuga trata dados pessoais relacionados
        à navegação e às solicitações enviadas pelo site. Para dúvidas ou
        solicitações sobre privacidade, use o canal de contato indicado ao final
        desta página.
      </Text>
    ),
  },
  {
    title: "2. Dados recebidos pelo formulário",
    content: (
      <>
        <Text className="mt-3">
          O formulário recebe nome, e-mail, serviço de interesse e mensagem.
          Empresa e telefone são opcionais. Para enviar, a pessoa também
          precisa confirmar que leu e concorda com esta política.
        </Text>
        <Text className="mt-3">
          O serviço de contato também usa temporariamente o endereço IP
          disponível na solicitação para limitar tentativas e evitar envios
          duplicados. A janela de controle é de 60 segundos; os identificadores
          usados nesses controles ficam na memória do processo e não fazem
          parte do registro de lead persistido.
        </Text>
      </>
    ),
  },
  {
    title: "3. Finalidades",
    content: (
      <>
        <Text className="mt-3">
          Os dados enviados pelo formulário são usados para receber e responder
          a solicitação, compreender a necessidade informada e preparar uma
          proposta quando houver interesse em seguir. Os controles temporários
          de IP e duplicidade servem para proteger o formulário contra abuso.
        </Text>
        <Text className="mt-3">
          O formulário registra a confirmação de leitura desta política e a
          data associada ao envio. Essa confirmação é independente da escolha
          de aceitar ou recusar a análise de navegação.
        </Text>
      </>
    ),
  },
  {
    title: "4. Armazenamento e compartilhamento",
    content: (
      <>
        <Text className="mt-3">
          A aplicação está configurada para armazenar solicitações em uma tabela
          de leads no Supabase. O registro inclui os campos enviados pelo
          formulário, a confirmação de leitura, a origem do envio e as datas de
          criação e confirmação.
        </Text>
        <Text className="mt-3">
          Se um destino de webhook estiver configurado no ambiente, a aplicação
          também encaminha os dados da solicitação para esse serviço externo,
          por exemplo para integração do processo de contato. O fornecedor e as
          condições do destino dependem da configuração operacional.
        </Text>
        <Text className="mt-3">
          A aplicação não define prazo de retenção nem exclusão automática dos
          registros de leads. Para solicitar acesso, correção ou exclusão,
          quando aplicável, entre em contato pelo canal de privacidade. A
          solicitação será avaliada conforme as obrigações legais pertinentes.
        </Text>
      </>
    ),
  },
  {
    title: "5. Análise de navegação e eventos",
    content: (
      <>
        <Text className="mt-3">
          O site pode carregar Google Analytics somente quando a ferramenta
          estiver configurada no ambiente e a pessoa aceitar cookies de
          análise. Se a pessoa recusar, o componente de Google Analytics não é
          carregado pela aplicação.
        </Text>
        <Text className="mt-3">
          Quando habilitados, os eventos de conversão do site informam ações
          como clique em contato, início do formulário e envio confirmado. O
          código da aplicação envia o nome do evento, sem incluir nome, empresa,
          e-mail, telefone ou mensagem nos parâmetros desses eventos. Dados
          técnicos tratados pelo Google Analytics dependem da configuração e
          dos termos do serviço.
        </Text>
      </>
    ),
  },
  {
    title: "6. Cookies e preferências",
    content: (
      <>
        <Text className="mt-3">
          O aviso de privacidade oferece as opções “Aceitar” e “Recusar” para a
          análise de navegação. A preferência é guardada no armazenamento local
          do navegador. A aplicação não usa um cookie próprio para guardar essa
          escolha.
        </Text>
        <Text className="mt-3">
          O Google Analytics só é carregado após aceitação e quando há um
          identificador configurado. A escolha não pode ser reaberta por um
          controle permanente do site no momento. Para exibir o aviso novamente
          e escolher outra opção, remova os dados locais deste site nas
          configurações do navegador.
        </Text>
      </>
    ),
  },
  {
    title: "7. Serviços externos e links",
    content: (
      <>
        <Text className="mt-3">
          Além do Supabase, do Google Analytics quando habilitado e de um
          eventual destino de webhook, o site contém links para serviços como
          WhatsApp, Instagram e LinkedIn. Se você acessar ou enviar dados
          diretamente a esses serviços, o tratamento também estará sujeito às
          práticas e políticas dos respectivos fornecedores.
        </Text>
      </>
    ),
  },
  {
    title: "8. Segurança",
    content: (
      <>
        <Text className="mt-3">
          A aplicação valida e sanitiza os campos do formulário, limita o
          tamanho das solicitações e aplica controles temporários contra
          excesso e duplicidade de envios. O acesso ao Supabase é feito por
          módulo server-side.
        </Text>
        <Text className="mt-3">
          Esses controles não permitem afirmar que todos os aspectos de
          segurança, acesso, backup ou armazenamento dos fornecedores estejam
          configurados de uma forma específica. Nenhum sistema conectado à
          internet permite garantir segurança absoluta.
        </Text>
      </>
    ),
  },
  {
    title: "9. Direitos e solicitações",
    content: (
      <>
        <Text className="mt-3">
          Você pode solicitar, conforme aplicável, confirmação de tratamento,
          acesso, correção, informações sobre compartilhamento, oposição,
          bloqueio ou eliminação de dados e revogação de consentimento quando
          essa for a base aplicável.
        </Text>
        <Text className="mt-3">
          Envie sua solicitação para{" "}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="link-underline text-signal-strong"
          >
            {siteConfig.links.email}
          </a>
          . Não é necessário enviar senha, documento ou outros dados além dos
          necessários para localizar e analisar a solicitação. A Conjuga poderá
          pedir informações adicionais para confirmar a identidade de quem faz
          o pedido.
        </Text>
      </>
    ),
  },
  {
    title: "10. Atualizações e contato",
    content: (
      <>
        <Text className="mt-3">
          Esta política pode ser atualizada para refletir mudanças verificadas
          no tratamento de dados. A data da revisão mais recente está indicada
          nesta página.
        </Text>
        <Text className="mt-3">
          Para dúvidas sobre privacidade e proteção de dados, escreva para{" "}
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="link-underline text-signal-strong"
          >
            {siteConfig.links.email}
          </a>
          .
        </Text>
      </>
    ),
  },
];

export default function PoliticaPrivacidadePage() {
  return (
    <PageWrapper>
      <Hero
        eyebrow="Informações legais"
        title="Política de Privacidade"
        description="Entenda como o site da Conjuga trata os dados enviados pelo formulário de contato e como funcionam as preferências de análise de navegação."
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
