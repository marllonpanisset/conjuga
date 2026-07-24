import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinica-vitta",
    title: "Presença digital e jornada de agendamento para clínica",
    client: "Conceito aplicado para clínicas",
    segment: "Saúde",
    summary:
      "Estruturação de uma experiência digital para clínicas que precisam transmitir confiança, apresentar especialidades e facilitar o contato com novos pacientes.",
    result:
      "Solução de referência focada em autoridade digital, organização das informações e melhoria da jornada de atendimento.",
    serviceSlug: "sites-institucionais",
    coverImage: "/images/cases/clinica-vitta.jpg",
  },
  {
    slug: "silva-associados",
    title: "Site institucional para serviços profissionais",
    client: "Conceito aplicado para escritórios profissionais",
    segment: "Serviços Profissionais",
    summary:
      "Estrutura digital criada para apresentar áreas de atuação, fortalecer autoridade profissional e facilitar novos contatos comerciais.",
    result:
      "Solução de referência focada em posicionamento digital, clareza das informações e geração de oportunidades comerciais.",
    serviceSlug: "sites-institucionais",
    coverImage: "/images/cases/silva-associados.jpg",
  },
  {
    slug: "operacao-flow",
    title: "Sistema web para organização operacional",
    client: "Conceito aplicado para operações B2B",
    segment: "Negócios B2B",
    summary:
      "Ferramenta digital planejada para centralizar processos internos, substituir controles dispersos e melhorar a visibilidade da operação.",
    result:
      "Solução de referência focada em organização operacional, redução de tarefas manuais e apoio à tomada de decisão.",
    serviceSlug: "sistemas-web",
    coverImage: "/images/cases/operacao-flow.jpg",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
