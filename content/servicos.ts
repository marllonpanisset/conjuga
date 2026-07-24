import { Rocket, Building2, Cpu, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "landing-pages",
    icon: Rocket,
    name: "Landing Pages",
    shortDescription:
      "Páginas estratégicas para apresentar sua oferta e gerar novas oportunidades.",
    problem:
      "Sua empresa tem uma boa oferta, mas a presença digital atual não comunica valor nem orienta o visitante até o próximo passo.",
    includes: [
      "Estrutura de página orientada ao objetivo do negócio",
      "Arquitetura de conteúdo alinhada ao público",
      "Design responsivo e experiência otimizada",
      "Integração com formulários, WhatsApp ou CRM",
      "Métricas e rastreamento de conversão",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    heroTitle:
      "Landing Pages construídas para transformar interesse em oportunidade",
    heroDescription:
      "Páginas desenvolvidas com estratégia, design e tecnologia para apresentar sua empresa no momento de decisão do cliente.",
  },
  {
    slug: "sites-institucionais",
    icon: Building2,
    name: "Sites Institucionais",
    shortDescription:
      "Presença digital profissional para empresas que precisam transmitir confiança.",
    problem:
      "Sua empresa evoluiu, mas seu site não acompanha sua autoridade, seus serviços ou a percepção que você deseja transmitir.",
    includes: [
      "Arquitetura de informação personalizada",
      "Design alinhado ao posicionamento da marca",
      "SEO técnico desde a estrutura inicial",
      "Estrutura preparada para evolução de conteúdo",
      "Performance e acessibilidade como padrão",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    heroTitle: "Um site institucional alinhado ao nível da sua empresa",
    heroDescription:
      "Uma presença digital profissional criada para fortalecer autoridade, confiança e relacionamento com seus clientes.",
  },
  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web Personalizados",
    shortDescription:
      "Ferramentas digitais desenvolvidas para processos específicos do seu negócio.",
    problem:
      "Sua operação depende de planilhas, tarefas manuais ou ferramentas que não acompanham a forma como sua empresa trabalha.",
    includes: [
      "Análise dos processos atuais",
      "Arquitetura de sistema personalizada",
      "Painéis, usuários e fluxos específicos",
      "Integrações com ferramentas existentes",
      "Estrutura preparada para crescimento",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs"],
    heroTitle: "Sistemas desenvolvidos a partir da realidade do seu negócio",
    heroDescription:
      "Criamos ferramentas digitais sob medida para organizar processos, melhorar operações e apoiar decisões.",
  },
  {
    slug: "automacoes-integracoes",
    icon: Workflow,
    name: "Automações e Integrações",
    shortDescription:
      "Processos conectados para reduzir tarefas manuais e melhorar eficiência.",
    problem:
      "Sua equipe perde tempo executando tarefas repetitivas que poderiam ser integradas e automatizadas.",
    includes: [
      "Mapeamento de processos operacionais",
      "Integração entre sistemas e ferramentas",
      "Automação de notificações e fluxos",
      "Redução de tarefas repetitivas",
      "Monitoramento e evolução das automações",
    ],
    stack: ["Node.js", "APIs REST", "Webhooks"],
    heroTitle: "Automatize processos e conecte suas ferramentas",
    heroDescription:
      "Integramos sistemas e criamos automações para tornar sua operação mais eficiente e organizada.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
