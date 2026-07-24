import { Rocket, Building2, Cpu, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "landing-pages",
    icon: Rocket,
    name: "Landing Pages",
    shortDescription:
      "Páginas estratégicas para apresentar ofertas e facilitar novas oportunidades.",
    problem:
      "Uma boa oferta pode perder força quando a página não comunica valor, diferenciais e o próximo passo esperado do visitante.",
    includes: [
      "Estrutura de página orientada ao objetivo do negócio",
      "Arquitetura de conteúdo alinhada ao público",
      "Design responsivo e experiência otimizada",
      "Integração com formulários, WhatsApp ou CRM",
      "Métricas e rastreamento de comportamento",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    heroTitle:
      "Landing Pages construídas para apresentar sua solução com clareza",
    heroDescription:
      "Criamos páginas estratégicas combinando estrutura, design e tecnologia para empresas que precisam comunicar melhor suas ofertas.",
  },

  {
    slug: "sites-institucionais",
    icon: Building2,
    name: "Sites Institucionais",
    shortDescription:
      "Presença digital profissional para empresas que precisam transmitir confiança.",
    problem:
      "Muitas empresas evoluem seus serviços, mas sua presença digital continua sem representar seu posicionamento, autoridade ou diferenciais.",
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
      "Desenvolvemos experiências digitais profissionais para fortalecer autoridade, comunicação e relacionamento com clientes.",
  },

  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web Personalizados",
    shortDescription:
      "Ferramentas digitais desenvolvidas para processos específicos do seu negócio.",
    problem:
      "Planilhas, processos manuais e ferramentas genéricas podem limitar a organização e a evolução da operação.",
    includes: [
      "Análise dos processos atuais",
      "Arquitetura de sistema personalizada",
      "Painéis, usuários e fluxos específicos",
      "Integrações com ferramentas existentes",
      "Estrutura preparada para evolução",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs"],
    heroTitle: "Sistemas desenvolvidos a partir da realidade do seu negócio",
    heroDescription:
      "Criamos ferramentas digitais sob medida para organizar processos, centralizar informações e apoiar decisões.",
  },

  {
    slug: "automacoes-integracoes",
    icon: Workflow,
    name: "Automações e Integrações",
    shortDescription:
      "Processos conectados para reduzir tarefas manuais e melhorar eficiência.",
    problem:
      "Processos repetitivos, sistemas desconectados e atividades manuais podem consumir tempo e dificultar a operação.",
    includes: [
      "Mapeamento de processos operacionais",
      "Integração entre sistemas e ferramentas",
      "Automação de notificações e fluxos",
      "Redução de tarefas repetitivas",
      "Monitoramento e evolução das automações",
    ],
    stack: ["Node.js", "APIs REST", "Webhooks"],
    heroTitle: "Automações para conectar ferramentas e simplificar processos",
    heroDescription:
      "Integramos sistemas e criamos fluxos automatizados para tornar operações mais organizadas e eficientes.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
