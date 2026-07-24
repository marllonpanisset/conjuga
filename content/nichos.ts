import type { Niche } from "@/types/niche";

export const niches: Niche[] = [
  {
    slug: "saude",
    name: "Clínicas e Saúde",
    heroTitle:
      "Presença digital que transmite confiança antes do primeiro atendimento",
    heroDescription:
      "Clínicas e profissionais da saúde precisam de uma experiência digital clara, profissional e preparada para facilitar o relacionamento com pacientes.",
    painPoints: [
      "Pacientes pesquisam antes de agendar e nem sempre encontram informações que transmitam confiança",
      "Processos de contato, confirmação e agendamento ainda dependem de tarefas manuais",
      "Serviços, especialidades e diferenciais nem sempre são apresentados de forma estratégica",
    ],
    solution:
      "Desenvolvemos sites institucionais, páginas estratégicas e automações para melhorar a apresentação da clínica e organizar processos de atendimento.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "landing-pages",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "advocacia",
    name: "Advocacia",
    heroTitle: "Presença digital que fortalece autoridade e confiança jurídica",
    heroDescription:
      "Escritórios de advocacia precisam comunicar experiência, especialização e credibilidade antes mesmo do primeiro contato com um potencial cliente.",
    painPoints: [
      "O site não transmite o posicionamento e a especialização do escritório",
      "Áreas de atuação e diferenciais ficam pouco claras para quem pesquisa online",
      "O processo de captação depende principalmente de indicação e contatos diretos",
    ],
    solution:
      "Criamos experiências digitais organizadas por áreas de atuação, com foco em autoridade profissional, clareza das informações e geração de novos contatos.",
    relatedServiceSlugs: ["sites-institucionais", "landing-pages"],
  },

  {
    slug: "contabilidade",
    name: "Contabilidade",
    heroTitle:
      "Uma presença digital alinhada à confiança que empresas procuram",
    heroDescription:
      "Escritórios contábeis precisam demonstrar organização, conhecimento técnico e capacidade de acompanhar seus clientes.",
    painPoints: [
      "A presença digital não comunica os diferenciais do escritório",
      "Serviços e especialidades podem ficar pouco claros para novos clientes",
      "Processos internos e relacionamento com clientes possuem oportunidades de melhoria",
    ],
    solution:
      "Desenvolvemos sites institucionais, áreas digitais e ferramentas personalizadas para fortalecer posicionamento e organizar processos.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "sistemas-web",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "consultoria",
    name: "Consultoria",
    heroTitle:
      "Uma presença digital construída para comunicar conhecimento e autoridade",
    heroDescription:
      "Consultores e empresas especializadas precisam apresentar sua experiência, metodologia e forma de trabalho com clareza.",
    painPoints: [
      "A experiência profissional não está bem representada no ambiente digital",
      "Métodos e serviços são difíceis de comunicar para novos clientes",
      "Processos comerciais dependem de contatos manuais e reuniões iniciais",
    ],
    solution:
      "Criamos páginas estratégicas e experiências digitais para apresentar serviços, organizar informações e facilitar novas oportunidades comerciais.",
    relatedServiceSlugs: [
      "landing-pages",
      "sites-institucionais",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "servicos-locais",
    name: "Serviços Locais",
    heroTitle:
      "Uma presença digital profissional para empresas que precisam gerar oportunidades",
    heroDescription:
      "Empresas de manutenção, reformas e serviços especializados precisam transmitir confiança rapidamente e facilitar novos contatos.",
    painPoints: [
      "A empresa depende apenas de indicação ou canais limitados de divulgação",
      "Clientes encontram poucas informações antes de solicitar orçamento",
      "Atendimento e acompanhamento de oportunidades ainda podem ser manuais",
    ],
    solution:
      "Desenvolvemos landing pages, sites institucionais e automações para apresentar serviços, captar contatos e organizar processos comerciais.",
    relatedServiceSlugs: [
      "landing-pages",
      "sites-institucionais",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "negocios-b2b",
    name: "Negócios B2B",
    heroTitle:
      "Soluções digitais para empresas que precisam evoluir sua operação",
    heroDescription:
      "Empresas B2B precisam de uma presença digital profissional e processos mais organizados para acompanhar novas oportunidades.",
    painPoints: [
      "O site atual não representa a capacidade técnica da empresa",
      "Processos internos dependem de planilhas ou tarefas repetitivas",
      "Ferramentas desconectadas dificultam a operação e o crescimento",
    ],
    solution:
      "Criamos sites institucionais, sistemas personalizados e integrações para melhorar processos comerciais e operacionais.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "sistemas-web",
      "automacoes-integracoes",
    ],
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return niches.find((n) => n.slug === slug);
}
