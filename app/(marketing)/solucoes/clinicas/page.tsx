
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2Icon,
  FolderIcon,
  Workflow,
  Globe,
  PanelsTopLeft,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { PageWrapper } from "@/components/layout";
import {
  Container,
  Section,
  Button,
  ButtonArrow,
} from "@/components/ui";
import { Hero, CTASection } from "@/components/sections";
import { EditorialListSection } from "@/components/sections/EditorialListSection";

export const metadata: Metadata = buildMetadata({
  title: "Soluções Digitais para Clínicas | Conjuga",
  description:
    "Sites, sistemas web e automações personalizadas para clínicas e consultórios que desejam organizar processos e fortalecer sua presença digital.",
  path: "/solucoes/clinicas",
});

export default function ClinicasPage() {
  return (
    <PageWrapper withGrid={false}>
      <Hero
        eyebrow="Soluções para Clínicas"
        title="Presença digital e organização para quem cuida da saúde."
        description="Desenvolvemos sites e sistemas para clínicas de fisioterapia, odontologia, estética e consultórios que desejam apresentar suas especialidades e profissionais, facilitar processos administrativos e organizar fluxos de trabalho com tecnologia."
      />

      {/* Desafios do setor */}
      <EditorialListSection
        label="Desafios do setor"
        title="Operações que exigem organização e conformidade."
        items={[
          {
            text: "Presença digital desatualizada ou inexistente que dificulta a descoberta da clínica.",
            icon: Building2Icon,
          },
          {
            text: "Dificuldade de apresentar especialidades, profissionais e estrutura de forma clara e organizada.",
            icon: FolderIcon,
          },
          {
            text: "Processos administrativos repetitivos e ferramentas de comunicação pouco integradas.",
            icon: Workflow,
          },
        ]}
      />

      {/* Como a Conjuga pode ajudar */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Presença Digital */}
            <div className="h-full flex flex-col">
              <div className="flex items-baseline gap-2 mb-3">
                <Globe
                  className="h-5 w-5 text-signal shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-medium text-text-primary">
                  Presença Digital
                </span>
              </div>

              <div className="flex flex-col items-start gap-5 flex-1">
                <p className="text-text-secondary text-small">
                  Sites e landing pages para apresentar especialidades,
                  profissionais, estrutura, localização e horários de
                  funcionamento. Fotos do ambiente, introdução da equipe e
                  formulário de contato.
                </p>

                <Link
                  href="/servicos/presenca-digital"
                  className="mt-auto rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5"
                >
                  Ver serviço
                </Link>
              </div>
            </div>

            {/* Sistemas Web */}
            <div className="h-full flex flex-col">
              <div className="flex items-baseline gap-2 mb-3">
                <PanelsTopLeft
                  className="h-5 w-5 text-signal shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-medium text-text-primary">
                  Sistemas Web
                </span>
              </div>

              <div className="flex flex-col items-start gap-5 flex-1">
                <p className="text-text-secondary text-small">
                  Desenvolvimento personalizado para necessidades
                  administrativas identificadas durante o levantamento da
                  operação. Cada funcionalidade é definida conforme a
                  viabilidade e o escopo do projeto.
                </p>

                <Link
                  href="/servicos/sistemas-web"
                  className="mt-auto rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5"
                >
                  Ver serviço
                </Link>
              </div>
            </div>

            {/* Automações */}
            <div className="h-full flex flex-col">
              <div className="flex items-baseline gap-2 mb-3">
                <Workflow
                  className="h-5 w-5 text-signal shrink-0"
                  strokeWidth={1.5}
                />
                <span className="font-medium text-text-primary">
                  Automações
                </span>
              </div>

              <div className="flex flex-col items-start gap-5 flex-1">
                <p className="text-text-secondary text-small">
                  Integrações entre ferramentas e automação de tarefas
                  administrativas repetitivas, conforme a viabilidade técnica.
                  Não oferecemos sistemas de agendamento ou prontuários
                  eletrônicos como produtos prontos — desenvolvimentos desse
                  tipo exigem análise técnica, jurídica e de conformidade
                  específica.
                </p>

                <Link
                  href="/servicos/automacao"
                  className="mt-auto rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5"
                >
                  Ver serviço
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Conte sobre os desafios da sua clínica"
        description="Conte sobre a operação da sua clínica e o que deseja melhorar. Desde presença digital até automação de processos, vamos indicar as melhores soluções personalizadas."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conversar com a Conjuga <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
