
import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2Icon,
  FolderIcon,
  ImageIcon,
  Globe,
  PanelsTopLeft,
  Workflow,
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
  title: "Sites e Sistemas para Hospedagens | Conjuga",
  description:
    "Tecnologia para pousadas, hotéis, chalés e campings. Desenvolvemos presença digital, sistemas web e automações personalizadas.",
  path: "/solucoes/hospedagens",
});

export default function HospedagensPage() {
  return (
    <PageWrapper withGrid={false}>
      <Hero
        eyebrow="Soluções para Hospedagens"
        title="Presença digital e organização para quem recebe visitantes."
        description="Desenvolvemos sites e sistemas para pousadas, hotéis, chalés e campings que desejam apresentar suas acomodações, serviços e experiências com clareza e profissionalismo, facilitando o contato com hóspedes."
      />

      {/* Desafios do setor */}
      <EditorialListSection
        label="Desafios do setor"
        title="Operações que exigem organização e visibilidade."
        items={[
          {
            text: "Gestão manual de reservas e disponibilidade que consome tempo e aumenta o risco de erros.",
            icon: Building2Icon,
          },
          {
            text: "Informações sobre acomodações, tarifas e serviços dispersas em diferentes ferramentas.",
            icon: FolderIcon,
          },
          {
            text: "Dificuldade de apresentar visualmente a estrutura, fotos e a experiência oferecida aos hóspedes.",
            icon: ImageIcon,
          },
        ]}
      />

      {/* Soluções para hospedagens */}
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
                  Sites e landing pages para apresentar acomodações, tarifas,
                  serviços, fotos da estrutura e localização. Formulário de
                  contato para captação de interessados.
                </p>

                <Link
                  href="/servicos/presenca-digital"
                  className="rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5 mt-auto"
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
                  Desenvolvimento de sistemas web personalizados para organizar
                  reservas, comunicação com hóspedes e processos internos,
                  considerando as necessidades e a rotina da hospedagem.
                </p>

                <Link
                  href="/servicos/sistemas-web"
                  className="rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5 mt-auto"
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
                  Integrações entre sistemas de reservas, comunicação com
                  hóspedes e ferramentas de gestão para reduzir tarefas
                  manuais, conforme a viabilidade técnica e os sistemas já
                  utilizados pela operação.
                </p>

                <Link
                  href="/servicos/automacao"
                  className="rounded-[var(--radius-sm)] border border-border-strong bg-transparent text-text-primary hover:border-text-secondary hover:bg-surface-elevated active:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal h-11 px-5 text-[0.9375rem] inline-flex items-center justify-center gap-2.5 mt-auto"
                >
                  Ver serviço
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Conte sobre a operação da sua hospedagem"
        description="Conte sobre o dia a dia da sua pousada, hotel, chalé ou camping e o que deseja melhorar. Desde presença digital até automação de processos, vamos indicar as melhores soluções personalizadas."
        actions={
          <Button href="/contato" size="lg" variant="onInk">
            Conversar com a Conjuga <ButtonArrow />
          </Button>
        }
      />
    </PageWrapper>
  );
}
