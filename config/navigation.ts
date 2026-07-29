export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const servicesNav: NavItem[] = [
  { label: "Todos os serviços", href: "/servicos" },
  {
    label: "Presença Digital",
    href: "/servicos/presenca-digital",
    description: "Sites, páginas, blogs e SEO técnico",
  },
  {
    label: "Sistemas Web Personalizados",
    href: "/servicos/sistemas-web",
    description: "Ferramentas sob medida para processos específicos",
  },
  {
    label: "Automações e Integrações",
    href: "/servicos/automacao",
    description: "Processos conectados e menos tarefas repetitivas",
  },
  {
    label: "Inteligência Artificial Aplicada",
    href: "/servicos/inteligencia-artificial-aplicada",
    description: "IA responsável para problemas operacionais claros",
  },
];

export const mainNav: NavItem[] = [
  { label: "Projetos", href: "/projetos" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const footerNav = {
  servicos: servicesNav,
  empresa: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Projetos", href: "/projetos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ] as NavItem[],
  legal: [
    { label: "Política de Privacidade", href: "/politica-de-privacidade" },
    { label: "Termos de Uso", href: "/termos-de-uso" },
  ] as NavItem[],
};
