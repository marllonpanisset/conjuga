import { Cpu, Globe2, Workflow } from "lucide-react";
import type { Service } from "@/types/service";

export const services: Service[] = [
  {
    slug: "sistemas-web",
    icon: Cpu,
    name: "Sistemas Web",
    shortDescription:
      "Sistemas personalizados para apoiar processos específicos da operação.",
    problem:
      "Planilhas, controles paralelos e ferramentas genéricas podem dificultar o acompanhamento de processos e a organização das informações, principalmente para empresas de hospedagem, clínicas e PMEs que precisam estruturar suas rotinas.",
    benefits: [
      "Apoio à organização das informações do processo",
      "Funcionalidades definidas para a necessidade identificada",
      "Evolução futura mediante novo escopo acordado",
    ],
    includes: [
      "Entendimento da operação",
      "Definição do escopo da solução",
      "Painéis administrativos",
      "Portais e ferramentas internas",
      "MVPs e aplicações web",
      "Implantação e publicação",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento e definição do escopo",
      "Desenvolvimento e implementação",
      "Evolução posterior, se contratada, conforme escopo acordado",
    ],
    heroTitle: "Sistemas para organizar a sua operação",
    heroDescription:
      "Desenvolvemos aplicações para apoiar processos específicos. Funcionalidades e integrações são definidas conforme a necessidade e o escopo acordado, servindo desde pequenas empresas até operações de médio porte.",
  },

  {
    slug: "automacao",
    icon: Workflow,
    name: "Automações de Processos",
    shortDescription:
      "Automação de tarefas repetitivas e integração de ferramentas, conforme a necessidade e o escopo.",
    problem:
      "Relatórios manuais, dados digitados mais de uma vez e tarefas recorrentes podem consumir tempo e aumentar o risco de inconsistências, afetando principalmente empresas de hospedagem, clínicas e PMEs que dependem de processos organizados.",
    benefits: [
      "Possibilidade de reduzir tarefas repetitivas, conforme viabilidade",
      "Fluxos organizados a partir do processo mapeado",
      "Integrações definidas conforme as ferramentas e o escopo",
    ],
    includes: [
      "Mapeamento dos processos",
      "Identificação de oportunidades",
      "Automação de rotinas selecionadas",
      "Integrações entre ferramentas, quando previstas no escopo",
      "Testes e implementação",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento e definição do escopo",
      "Desenvolvimento e implementação",
      "Evolução posterior, se contratada, conforme escopo acordado",
    ],
    heroTitle: "Automação de tarefas repetitivas",
    heroDescription:
      "Mapeamos processos para identificar tarefas que podem ser automatizadas e ferramentas que podem ser conectadas. As possibilidades dependem da necessidade, da viabilidade e do escopo. Soluções ideais para empresas que desejam reduzir atividades manuais e conectar suas ferramentas de trabalho.",
  },

  {
    slug: "presenca-digital",
    icon: Globe2,
    name: "Presença Digital",
    shortDescription:
      "Sites e landing pages para empresas que precisam criar ou atualizar sua presença digital.",
    problem:
      "Uma presença digital desatualizada ou inexistente pode dificultar a apresentação clara da empresa, de seus serviços e soluções, especialmente para hospedagens que precisam atrair hóspedes, clínicas que precisam mostrar serviços e horários, e PMEs que precisam transmitir credibilidade.",
    benefits: [
      "Apresentação estruturada da empresa e de seus serviços",
      "Informações organizadas nas páginas previstas no projeto",
      "Estrutura técnica definida conforme o escopo",
    ],
    includes: [
      "Sites institucionais",
      "Landing pages",
      "Páginas de serviços e microsites",
      "Estrutura técnica e SEO",
      "Publicação do site, conforme escopo",
    ],
    process: [
      "Entendimento do contexto",
      "Planejamento e definição do escopo",
      "Desenvolvimento e implementação",
      "Evolução posterior, se contratada, conforme escopo acordado",
    ],
    heroTitle: "Sites para apresentar sua empresa e seus serviços",
    heroDescription:
      "Criamos ou atualizamos sites e landing pages para apresentar a empresa, seus serviços e soluções, conforme o escopo do projeto. Desenvolvemos presença digital para hospedagens, clínicas e empresas de serviços que precisam transmitir confiança online.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
