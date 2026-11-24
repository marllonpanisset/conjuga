import type { CaseStudy } from "@/types/case-study";

// Projetos só devem ser publicados com informações reais e verificáveis.
export const caseStudies: CaseStudy[] = [
  {
    slug: "portfolio-tais",
    title: "Portfólio profissional com gerenciamento de conteúdo",
    client: "Taís",
    segment: "Portfólio profissional",
    summary:
      "Desenvolvimento de uma plataforma digital para apresentar projetos profissionais, reunir trabalhos em um portfólio e facilitar a atualização de conteúdo por meio de um painel administrativo próprio.",
    context:
      "O projeto foi desenvolvido para reunir e apresentar trabalhos relacionados à produção multimídia, arte e tecnologia em um ambiente digital próprio.",
    problem:
      "Organizar projetos e informações profissionais em um portfólio digital, oferecendo uma experiência de navegação clara e uma forma prática de administrar e atualizar o conteúdo do site.",
    solution:
      "Desenvolvemos um site com páginas institucionais, portfólio de projetos e sistema de gerenciamento de conteúdo. A plataforma conta com uma área administrativa para cadastrar e publicar projetos, editar páginas, gerenciar conteúdo e atualizar informações do site.",
    results:
      "A Taís passou a contar com um ambiente digital próprio para apresentar seus trabalhos e manter seu portfólio atualizado, sem depender de alterações diretamente no código do site.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
    serviceSlug: "presenca-digital",
    url: "https://taissales.vercel.app/",
    images: [
  {
    src: "/portfolio-tais-pagina-biografia.png",
    width: 1864,
    height: 948,
    caption:
      "Página pública de biografia, apresentando a trajetória e as informações profissionais da Taís.",
  },
  {
    src: "/portfolio-tais-dashboard-editar-pagina-portfolio.png",
    width: 1870,
    height: 941,
    caption:
      "Edição da página de portfólio pelo painel administrativo, com visualização do conteúdo.",
  },
  {
    src: "/portfolio-tais-dashboard-novo-projeto.png",
    width: 1872,
    height: 944,
    caption:
      "Cadastro de projeto com dados, categoria, mídia e opções de publicação e destaque.",
  },
  {
    src: "/portfolio-tais-dashboard-editar-pagina-biografia.png",
    width: 1873,
    height: 943,
    caption:
      "Edição da página de biografia pelo painel administrativo, com gerenciamento das informações e conteúdo.",
  },
],
    features: [
      "Portfólio de projetos",
      "Cadastro e edição de projetos",
      "Publicação e despublicação de projetos",
      "Destaque de projetos na página inicial",
      "Gerenciamento de páginas",
      "Edição de conteúdo",
      "Gerenciamento de links e canais de comunicação",
      "Painel administrativo próprio",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
