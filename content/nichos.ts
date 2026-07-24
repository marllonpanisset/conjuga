import type { Niche } from "@/types/niche";

export const niches: Niche[] = [
  {
    slug: "saude",
    name: "Saúde e Clínicas",
    heroTitle:
      "Presença digital que transmite confiança antes do primeiro atendimento",
    heroDescription:
      "Clínicas e profissionais da saúde precisam de uma presença digital clara, profissional e preparada para facilitar o relacionamento com pacientes.",
    painPoints: [
      "Pacientes pesquisam antes de agendar e nem sempre encontram informações que transmitam confiança",
      "Agendamentos e confirmações ainda dependem de processos manuais",
      "Serviços e especialidades nem sempre são apresentados de forma clara",
    ],
    solution:
      "Desenvolvemos sites, páginas de conversão e automações para melhorar a apresentação da clínica e facilitar processos de atendimento.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "landing-pages",
      "automacoes-integracoes",
    ],
  },
  {
    slug: "servicos-profissionais",
    name: "Serviços Profissionais e Consultorias",
    heroTitle: "Uma presença digital que fortalece a autoridade da sua empresa",
    heroDescription:
      "Escritórios e profissionais especializados precisam comunicar conhecimento, experiência e confiança antes do primeiro contato.",
    painPoints: [
      "A presença digital não representa o nível profissional do serviço oferecido",
      "Informações sobre serviços e diferenciais ficam dispersas",
      "O processo de captação e atendimento pode ser pouco estruturado",
    ],
    solution:
      "Criamos experiências digitais que apresentam autoridade, organizam informações e apoiam novos contatos comerciais.",
    relatedServiceSlugs: [
      "sites-institucionais",
      "landing-pages",
      "automacoes-integracoes",
    ],
  },
  {
    slug: "negocios-b2b",
    name: "Negócios B2B",
    heroTitle:
      "Soluções digitais para empresas que precisam evoluir seus processos",
    heroDescription:
      "Empresas B2B precisam de presença digital profissional e ferramentas que acompanhem suas operações.",
    painPoints: [
      "Site desatualizado pode prejudicar novas oportunidades comerciais",
      "Processos internos dependem de tarefas manuais e ferramentas desconectadas",
      "Dificuldade em apresentar capacidade técnica e diferenciais",
    ],
    solution:
      "Desenvolvemos sites institucionais, sistemas personalizados e automações para apoiar crescimento e eficiência operacional.",
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
