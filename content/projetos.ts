import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    slug: "clinica-vitta",
    title: "Novo site institucional e agendamento automatizado",
    client: "Clínica Vitta",
    segment: "Saúde",
    summary:
      "Reestruturação completa da presença digital de uma clínica multiespecialidade, com foco em autoridade médica e redução de trabalho manual na recepção.",
    result: "Redução no tempo gasto com agendamento manual e aumento de contatos qualificados via site.",
    serviceSlug: "sites-institucionais",
    coverImage: "/images/cases/clinica-vitta.jpg",
  },
  {
    slug: "silva-associados",
    title: "Site institucional e captação de casos qualificados",
    client: "Silva & Associados Advocacia",
    segment: "Advocacia",
    summary:
      "Site institucional organizado por área de atuação, com página de autoridade dos sócios e formulário de triagem de casos.",
    result: "Maior organização na entrada de novos casos e comunicação mais clara das áreas de atuação.",
    serviceSlug: "sites-institucionais",
    coverImage: "/images/cases/silva-associados.jpg",
  },
  {
    slug: "operacao-flow",
    title: "Sistema interno de gestão de ordens de serviço",
    client: "Flow Manutenção Predial",
    segment: "Serviços Locais",
    summary:
      "Sistema web sob medida para substituir planilhas na gestão de ordens de serviço, equipes e orçamentos.",
    result: "Processo operacional centralizado, com visibilidade em tempo real do status de cada ordem de serviço.",
    serviceSlug: "sistemas-web",
    coverImage: "/images/cases/operacao-flow.jpg",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
