import { Cpu, Globe2, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web",
    shortDescription:
      "Sistemas para resolver processos específicos da sua operação.",
    problem:
      "Planilhas, controles paralelos e ferramentas genéricas podem dificultar processos importantes e limitar o crescimento do negócio.",
    benefits: [
      "Processos organizados em um só lugar",
      "Informações centralizadas",
      "Base pronta para evoluir",
    ],
    includes: [
      "Entendimento da operação",
      "Definição do escopo da solução",
      "Painéis e áreas administrativas",
      "Portais e ferramentas internas",
      "MVPs e aplicações web",
      "Implantação e publicação",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento da solução",
      "Implantação",
      "Evolução conforme a necessidade",
    ],
    heroTitle: "Sistemas para organizar a sua operação",
    heroDescription:
      "Projetamos sistemas para resolver problemas específicos do negócio — organizados, eficientes e prontos para evoluir.",
  },

  {
    slug: "automacao",
    icon: Workflow,
    name: "Automações de Processos",
    shortDescription:
      "Automatizamos tarefas repetitivas e conectamos ferramentas para reduzir trabalho manual.",
    problem:
      "Relatórios manuais, dados digitados duas vezes e tarefas que se repetem toda semana consomem tempo e geram erros.",
    benefits: [
      "Rotinas executadas sem intervenção manual",
      "Menos erros de digitação",
      "Processos mais consistentes",
    ],
    includes: [
      "Mapeamento dos processos",
      "Identificação de oportunidades",
      "Automação de rotinas",
      "Integração entre ferramentas",
      "Testes e implantação",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento",
      "Implantação",
      "Acompanhamento",
    ],
    heroTitle: "Automações que reduzem retrabalho",
    heroDescription:
      "Mapeamos processos e automatizamos tarefas repetitivas, conectando as ferramentas que você já usa.",
  },

  {
    slug: "presenca-digital",
    icon: Globe2,
    name: "Presença Digital",
    shortDescription:
      "Sites e landing pages para empresas sem presença digital.",
    problem:
      "Uma presença desatualizada ou improvisada passa uma imagem errada da empresa.",
    benefits: [
      "Site que transmite confiança",
      "Comunicação clara sobre o que você faz",
      "Base para evoluir para sistemas",
    ],
    includes: [
      "Landing pages",
      "Sites institucionais",
      "Páginas de serviços",
      "SEO técnico inicial",
      "Publicação da aplicação",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento",
      "Implantação",
      "Evolução",
    ],
    heroTitle: "Presença digital que transmite confiança",
    heroDescription:
      "Sites e landing pages que organizam sua presença — e podem ser o primeiro passo para sistemas e automações.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
