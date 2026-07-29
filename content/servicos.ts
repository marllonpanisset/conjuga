import { Bot, Cpu, Globe2, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "presenca-digital",
    icon: Globe2,
    name: "Presença Digital",
    shortDescription:
      "Sites e páginas profissionais para comunicar com clareza e transmitir confiança.",
    problem:
      "Uma presença digital desorganizada dificulta o entendimento dos serviços, reduz a credibilidade e cria atrito antes do primeiro contato.",
    benefits: [
      "Comunicação mais clara dos serviços",
      "Presença digital organizada e confiável",
      "Estrutura preparada para evolução de conteúdo",
    ],
    includes: [
      "Landing pages",
      "Sites institucionais",
      "Microsites",
      "Blogs",
      "SEO técnico",
    ],
    process: [
      "Entendimento do negócio e do público",
      "Arquitetura da informação",
      "Desenvolvimento e validação",
      "Publicação e evolução",
    ],
    heroTitle:
      "Presença digital construída para comunicar com clareza",
    heroDescription:
      "Criamos landing pages, sites institucionais, microsites e blogs com estrutura clara, performance, acessibilidade e SEO técnico.",
  },

  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web Personalizados",
    shortDescription:
      "Ferramentas digitais desenvolvidas para processos específicos do seu negócio.",
    problem:
      "Planilhas, processos manuais e ferramentas genéricas podem limitar a organização e a evolução da operação.",
    benefits: [
      "Informações centralizadas",
      "Processos mais organizados",
      "Base preparada para evolução contínua",
    ],
    includes: [
      "Análise dos processos atuais",
      "Arquitetura de sistema personalizada",
      "Painéis, usuários e fluxos específicos",
      "Integrações com ferramentas existentes",
      "Estrutura preparada para evolução",
    ],
    process: [
      "Diagnóstico dos processos atuais",
      "Definição da arquitetura",
      "Desenvolvimento por etapas",
      "Validação e evolução contínua",
    ],
    heroTitle: "Sistemas desenvolvidos a partir da realidade do seu negócio",
    heroDescription:
      "Criamos ferramentas digitais sob medida para organizar processos, centralizar informações e apoiar decisões.",
  },

  {
    slug: "automacao",
    icon: Workflow,
    name: "Automações e Integrações",
    shortDescription:
      "Processos conectados para reduzir tarefas manuais e melhorar eficiência.",
    problem:
      "Processos repetitivos, sistemas desconectados e atividades manuais podem consumir tempo e dificultar a operação.",
    benefits: [
      "Menos tarefas repetitivas",
      "Redução de erros operacionais",
      "Ferramentas e informações conectadas",
    ],
    includes: [
      "Mapeamento de processos operacionais",
      "Integração entre sistemas e ferramentas",
      "Automação de notificações e fluxos",
      "Redução de tarefas repetitivas",
      "Monitoramento e evolução das automações",
    ],
    process: [
      "Mapeamento do processo atual",
      "Identificação de regras e integrações",
      "Implementação do fluxo",
      "Monitoramento e evolução",
    ],
    heroTitle: "Automações para conectar ferramentas e simplificar processos",
    heroDescription:
      "Integramos sistemas e criamos fluxos automatizados para tornar operações mais organizadas e eficientes.",
  },
  {
    slug: "inteligencia-artificial-aplicada",
    icon: Bot,
    name: "Inteligência Artificial Aplicada",
    shortDescription:
      "IA aplicada com responsabilidade a problemas operacionais claros.",
    problem:
      "Grandes volumes de informação e tarefas de classificação, busca ou apoio interno podem consumir tempo quando não existem ferramentas adequadas.",
    benefits: [
      "Acesso mais eficiente a informações",
      "Apoio a tarefas operacionais bem definidas",
      "Automação responsável com julgamento humano",
    ],
    includes: [
      "Assistentes internos",
      "Busca inteligente",
      "Classificação de informações",
      "Automação com IA",
      "Agentes especializados quando fizer sentido",
    ],
    process: [
      "Definição do problema e dos limites",
      "Avaliação da adequação da IA",
      "Implementação com validação humana",
      "Monitoramento e evolução responsável",
    ],
    heroTitle: "Inteligência artificial aplicada onde ela faz sentido",
    heroDescription:
      "Aplicamos IA a problemas operacionais específicos, com limites claros, validação humana e foco em eficiência.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
