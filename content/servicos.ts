import { Cpu, Globe2, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web",
    shortDescription:
      "Painéis, portais, MVPs e ferramentas internas desenvolvidos para necessidades específicas.",
    problem:
      "Planilhas, informações espalhadas e ferramentas genéricas podem dificultar processos importantes do negócio.",
    benefits: [
      "Informações mais organizadas",
      "Processos centralizados",
      "Solução preparada para evoluir",
    ],
    includes: [
      "Análise da necessidade e definição do escopo",
      "Painéis e áreas administrativas",
      "Portais e ferramentas internas",
      "MVPs para validação de produtos",
      "Desenvolvimento e publicação da solução",
    ],
    process: [
      "Entendimento do problema",
      "Definição do escopo e das prioridades",
      "Desenvolvimento por etapas",
      "Validação e entrega",
    ],
    heroTitle: "Sistemas web para necessidades reais do negócio",
    heroDescription:
      "Desenvolvemos painéis, portais, MVPs e ferramentas internas com escopo claro e foco no que precisa ser resolvido.",
  },
  {
    slug: "automacao",
    icon: Workflow,
    name: "Automações de Processos",
    shortDescription:
      "Automação de tarefas repetitivas e conexão de ferramentas quando houver viabilidade técnica.",
    problem:
      "Atividades manuais e informações transferidas entre diferentes ferramentas consomem tempo e aumentam o risco de erros.",
    benefits: [
      "Menos trabalho repetitivo",
      "Redução de erros operacionais",
      "Fluxos mais consistentes",
    ],
    includes: [
      "Mapeamento do processo atual",
      "Identificação de tarefas automatizáveis",
      "Automação de notificações e rotinas",
      "Conexão com APIs e ferramentas compatíveis",
      "Testes e documentação do fluxo",
    ],
    process: [
      "Análise do processo",
      "Avaliação de viabilidade técnica",
      "Implementação do fluxo definido",
      "Testes e entrega",
    ],
    heroTitle: "Menos tarefas manuais, mais consistência na operação",
    heroDescription:
      "Criamos automações com escopo definido e conectamos ferramentas que oferecem acessos e condições técnicas adequadas.",
  },
  {
    slug: "presenca-digital",
    icon: Globe2,
    name: "Presença Digital",
    shortDescription:
      "Sites e páginas profissionais para apresentar negócios, serviços e produtos com clareza.",
    problem:
      "Uma presença digital desorganizada reduz a credibilidade e dificulta que potenciais clientes entendam o valor da empresa.",
    benefits: [
      "Apresentação profissional do negócio",
      "Comunicação mais clara dos serviços",
      "Base preparada para busca e divulgação",
    ],
    includes: [
      "Landing pages",
      "Sites institucionais",
      "Páginas para produtos e serviços",
      "Blogs e estrutura de conteúdo",
      "SEO técnico essencial",
    ],
    process: [
      "Entendimento do negócio e do público",
      "Organização do conteúdo",
      "Desenvolvimento e validação",
      "Publicação",
    ],
    heroTitle: "Presença digital profissional, clara e confiável",
    heroDescription:
      "Desenvolvemos sites e páginas que ajudam empresas a apresentar seus serviços, fortalecer sua credibilidade e gerar oportunidades.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
