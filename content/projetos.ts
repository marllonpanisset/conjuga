import type { CaseStudy } from "@/types/case-study";

// Projetos só devem ser publicados com informações reais e verificáveis.
export const caseStudies: CaseStudy[] = [
  {
    slug: "portfolio-tais",
    title: "Portfólio profissional de Taís",
    client: "Taís",
    segment: "Portfólio profissional",
    summary:
      "Site de portfólio desenvolvido e publicado pela Conjuga.",
    context: "Site de portfólio profissional de Taís.",
    problem:
      "Apresentar o portfólio profissional com conteúdo administrável por painel.",
    solution:
      "Site de portfólio com CMS próprio e painel administrativo para gerenciar projetos e mídias.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    serviceSlug: "presenca-digital",
    coverImage: "",
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
