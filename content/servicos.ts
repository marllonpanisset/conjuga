import { Rocket, Building2, Cpu, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "landing-pages",
    icon: Rocket,
    name: "Landing Pages",
    shortDescription: "Páginas de conversão construídas para gerar oportunidades reais.",
    problem:
      "Sua oferta é boa, mas a página que apresenta ela não comunica credibilidade nem conduz o visitante a uma decisão.",
    includes: [
      "Estrutura de página orientada a uma única ação",
      "Copy direcionada ao seu público específico",
      "Design responsivo e otimizado para conversão",
      "Integração com formulário, WhatsApp ou CRM",
      "Rastreamento de eventos e métricas de conversão",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    heroTitle: "Landing Pages que convertem visita em oportunidade",
    heroDescription:
      "Páginas construídas com engenharia, não com templates — pensadas para o momento exato de decisão do seu cliente.",
  },
  {
    slug: "sites-institucionais",
    icon: Building2,
    name: "Sites Institucionais",
    shortDescription: "Presença digital completa, com a credibilidade que sua empresa exige.",
    problem:
      "Sua empresa tem histórico e resultado, mas o site atual não transmite isso — ou nem existe.",
    includes: [
      "Arquitetura de informação sob medida",
      "Design alinhado ao posicionamento da marca",
      "Otimização para SEO desde a fundação técnica",
      "Painel de conteúdo para atualizar textos e páginas",
      "Performance e acessibilidade como padrão, não extra",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    heroTitle: "Um site institucional à altura da sua credibilidade",
    heroDescription:
      "Presença digital profissional que sustenta autoridade e confiança antes mesmo do primeiro contato.",
  },
  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web Personalizados",
    shortDescription: "Ferramentas sob medida para o processo real da sua empresa.",
    problem:
      "Planilhas, processos manuais e ferramentas genéricas não acompanham o crescimento do seu negócio.",
    includes: [
      "Levantamento do processo real da operação",
      "Sistema desenvolvido sob medida, não adaptado de um template",
      "Painéis, permissões e fluxos específicos do seu negócio",
      "Escalabilidade planejada desde a arquitetura",
      "Suporte técnico e evolução contínua",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs"],
    heroTitle: "Sistemas web construídos em torno do seu processo",
    heroDescription:
      "Nada de adaptar sua operação a um software genérico — o sistema é desenhado a partir do seu processo real.",
  },
  {
    slug: "automacoes-integracoes",
    icon: Workflow,
    name: "Automações e Integrações",
    shortDescription: "Processos conectados, sem retrabalho manual.",
    problem:
      "Sua equipe perde horas repetindo tarefas que já poderiam estar automatizadas entre os sistemas que você usa.",
    includes: [
      "Mapeamento dos processos manuais repetitivos",
      "Integração entre sistemas, planilhas e ferramentas",
      "Automação de notificações, cobranças e follow-ups",
      "Redução de erro humano em tarefas operacionais",
      "Monitoramento e manutenção das automações",
    ],
    stack: ["Node.js", "APIs REST", "Webhooks"],
    heroTitle: "Automações que devolvem tempo à sua operação",
    heroDescription:
      "Conectamos os sistemas que você já usa para eliminar tarefas manuais e repetitivas.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
