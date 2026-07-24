import type { Niche } from "@/types/niche";

export const niches: Niche[] = [
  {
    slug: "saude",
    name: "Clínicas e Profissionais da Saúde",
    heroTitle: "Presença digital que transmite confiança antes da primeira consulta",
    heroDescription:
      "Pacientes decidem por credibilidade. Sua clínica precisa de um site e um processo de agendamento que reflitam isso.",
    painPoints: [
      "Pacientes pesquisam antes de agendar e não encontram credibilidade suficiente",
      "Agendamento manual por telefone ou WhatsApp consome tempo da recepção",
      "Poucas informações claras sobre especialidades e convênios",
    ],
    solution:
      "Site institucional com foco em autoridade médica, formulário de agendamento integrado e automações de confirmação e lembrete de consulta.",
    relatedServiceSlugs: ["sites-institucionais", "automacoes-integracoes"],
  },
  {
    slug: "advocacia",
    name: "Escritórios de Advocacia",
    heroTitle: "Autoridade digital para escritórios que decidem causas, não cliques",
    heroDescription:
      "Um cliente que busca advogado avalia seriedade antes de qualquer contato. Seu site precisa comunicar isso com precisão.",
    painPoints: [
      "Presença digital genérica não transmite a seriedade do escritório",
      "Captação de novos casos depende quase só de indicação",
      "Falta de organização das áreas de atuação para o visitante",
    ],
    solution:
      "Site institucional estruturado por área de atuação, com página de autoridade dos sócios e captação de contato qualificado.",
    relatedServiceSlugs: ["sites-institucionais", "landing-pages"],
  },
  {
    slug: "contabilidade",
    name: "Escritórios de Contabilidade",
    heroTitle: "Um escritório de contabilidade que parece — e é — tecnológico",
    heroDescription:
      "Empresas escolhem contabilidade por confiança e organização. A presença digital do escritório precisa refletir isso.",
    painPoints: [
      "Concorrência com escritórios que já têm presença digital mais moderna",
      "Processos de troca de documentos ainda manuais com clientes",
      "Dificuldade em comunicar diferenciais frente a escritórios genéricos",
    ],
    solution:
      "Site institucional com posicionamento técnico e sistema de portal do cliente para envio e acompanhamento de documentos.",
    relatedServiceSlugs: ["sites-institucionais", "sistemas-web"],
  },
  {
    slug: "consultoria",
    name: "Consultores Independentes",
    heroTitle: "Uma presença digital que já vende sua autoridade antes da reunião",
    heroDescription:
      "Como consultor independente, sua credibilidade é o produto. O site precisa comunicar isso com clareza e rapidez.",
    painPoints: [
      "Depende quase inteiramente de indicação e rede de contatos",
      "Não tem uma página que apresente método e resultados de forma clara",
      "Agenda de reuniões gerida manualmente, sem qualificação prévia",
    ],
    solution:
      "Landing page de autoridade com apresentação de método, cases e agendamento qualificado automatizado.",
    relatedServiceSlugs: ["landing-pages", "automacoes-integracoes"],
  },
  {
    slug: "servicos-locais",
    name: "Prestadores de Serviços Locais",
    heroTitle: "Mais orçamentos fechados, menos ligação perdida",
    heroDescription:
      "Reformas, elétrica, hidráulica, climatização e manutenção: quem decide rápido quer ver profissionalismo imediato.",
    painPoints: [
      "Concorrência decidida no WhatsApp por quem responde mais rápido e parece mais profissional",
      "Sem página própria, dependendo só de marketplaces e indicação",
      "Orçamentos e follow-up feitos manualmente, com perda de oportunidades",
    ],
    solution:
      "Landing page local com prova social e solicitação de orçamento, integrada a automações de resposta e follow-up.",
    relatedServiceSlugs: ["landing-pages", "automacoes-integracoes"],
  },
  {
    slug: "negocios-b2b",
    name: "Pequenos Negócios B2B Locais",
    heroTitle: "Uma presença B2B que parece o parceiro certo, não mais um fornecedor",
    heroDescription:
      "Decisões B2B locais também são decisões de confiança. Sua empresa precisa parecer o parceiro certo desde o primeiro acesso.",
    painPoints: [
      "Site desatualizado ou inexistente prejudica negociações com empresas maiores",
      "Processos comerciais e operacionais pouco digitalizados",
      "Dificuldade em demonstrar capacidade técnica para novos contratos",
    ],
    solution:
      "Site institucional robusto com sistema web de apoio à operação e automações comerciais internas.",
    relatedServiceSlugs: ["sites-institucionais", "sistemas-web"],
  },
];

export function getNicheBySlug(slug: string): Niche | undefined {
  return niches.find((n) => n.slug === slug);
}
