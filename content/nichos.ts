import type { Niche } from "@/types/niche";

export const niches: Niche[] = [
  {
    slug: "saude",
    name: "Clínicas e Saúde",
    heroTitle:
      "Presença digital que transmite confiança antes do primeiro atendimento",
    heroDescription:
      "Clínicas e profissionais da saúde precisam de uma experiência digital profissional, clara e alinhada à forma como desejam se apresentar aos pacientes.",
    painPoints: [
      "Pacientes pesquisam informações antes do contato e nem sempre encontram uma presença digital confiável",
      "Processos de contato, confirmação e agendamento podem depender de tarefas manuais",
      "Serviços, especialidades e diferenciais nem sempre são comunicados de forma estratégica",
    ],
    solution:
      "Desenvolvemos sites, páginas estratégicas e automações para fortalecer a presença digital da clínica e apoiar processos de atendimento.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "landing-pages",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "advocacia",
    name: "Advocacia",
    heroTitle:
      "Presença digital que fortalece autoridade e posicionamento jurídico",
    heroDescription:
      "Escritórios de advocacia precisam comunicar experiência, especialização e credibilidade desde o primeiro contato digital.",
    painPoints: [
      "A presença digital não representa o posicionamento e a especialização do escritório",
      "Áreas de atuação e diferenciais podem não estar claras para potenciais clientes",
      "A captação de novos contatos depende principalmente de indicação e relacionamento direto",
    ],
    solution:
      "Criamos experiências digitais organizadas por áreas de atuação, com foco em autoridade profissional, clareza das informações e melhor apresentação do escritório.",
    relatedServiceSlugs: ["sites-institucionais", "landing-pages"],
  },

  {
    slug: "contabilidade",
    name: "Contabilidade",
    heroTitle:
      "Uma presença digital alinhada à confiança que empresas procuram",
    heroDescription:
      "Escritórios contábeis precisam demonstrar organização, conhecimento técnico e uma comunicação clara para empresas que buscam parceiros confiáveis.",
    painPoints: [
      "A presença digital não comunica os diferenciais e especialidades do escritório",
      "Serviços contábeis podem ser apresentados de forma pouco clara para novos clientes",
      "Processos de relacionamento e atendimento podem ter oportunidades de melhoria",
    ],
    solution:
      "Desenvolvemos sites institucionais, ferramentas digitais e integrações para melhorar comunicação, organização e relacionamento com clientes.",
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
      "Consultores e empresas especializadas precisam apresentar experiência, metodologia e diferenciais de forma clara para novos contatos.",
    painPoints: [
      "A experiência profissional não está bem representada no ambiente digital",
      "Serviços, métodos e diferenciais podem ser difíceis de comunicar",
      "Processos comerciais dependem de contatos manuais e reuniões iniciais",
    ],
    solution:
      "Criamos páginas estratégicas e experiências digitais para apresentar serviços, organizar informações e apoiar processos comerciais.",
    relatedServiceSlugs: [
      "landing-pages",
      "sites-institucionais",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "servicos-locais",
    name: "Serviços Locais",
    heroTitle: "Uma presença digital profissional para empresas de serviços",
    heroDescription:
      "Empresas de manutenção, reformas e serviços especializados precisam transmitir confiança rapidamente e facilitar o contato de novos clientes.",
    painPoints: [
      "A empresa depende principalmente de indicação ou canais limitados de divulgação",
      "Clientes encontram poucas informações antes de solicitar um orçamento",
      "Atendimento e acompanhamento de oportunidades podem depender de processos manuais",
    ],
    solution:
      "Desenvolvemos landing pages, sites institucionais e automações para apresentar serviços, organizar contatos e melhorar processos comerciais.",
    relatedServiceSlugs: [
      "landing-pages",
      "sites-institucionais",
      "automacoes-integracoes",
    ],
  },

  {
    slug: "negocios-b2b",
    name: "Negócios B2B",
    heroTitle: "Soluções digitais para empresas que precisam evoluir processos",
    heroDescription:
      "Empresas B2B precisam de uma presença digital profissional e ferramentas que acompanhem sua operação e crescimento.",
    painPoints: [
      "O site atual não representa a capacidade técnica e profissional da empresa",
      "Processos internos dependem de planilhas ou tarefas repetitivas",
      "Ferramentas desconectadas dificultam organização e acompanhamento da operação",
    ],
    solution:
      "Criamos sites institucionais, sistemas personalizados e integrações para apoiar processos comerciais e operacionais.",
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
