export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const servicesNav: NavItem[] = [
  { label: "Todos os serviços", href: "/servicos" },
  {
    label: "Landing Pages",
    href: "/servicos/landing-pages",
    description: "Páginas de conversão de alta performance",
  },
  {
    label: "Sites Institucionais",
    href: "/servicos/sites-institucionais",
    description: "Presença digital completa e profissional",
  },
  {
    label: "Sistemas Web Personalizados",
    href: "/servicos/sistemas-web",
    description: "Ferramentas sob medida para o seu processo",
  },
  {
    label: "Automações e Integrações",
    href: "/servicos/automacoes-integracoes",
    description: "Processos conectados, sem trabalho manual",
  },
];

export const nichesNav: NavItem[] = [
  { label: "Ver todas soluções", href: "/solucoes" },
  { label: "Clínicas e Saúde", href: "/solucoes/saude" },
  { label: "Advocacia", href: "/solucoes/advocacia" },
  { label: "Contabilidade", href: "/solucoes/contabilidade" },
  { label: "Consultoria", href: "/solucoes/consultoria" },
  { label: "Serviços Locais", href: "/solucoes/servicos-locais" },
  { label: "Negócios B2B", href: "/solucoes/negocios-b2b" },
];

export const mainNav: NavItem[] = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  servicos: servicesNav,
  solucoes: nichesNav,
  empresa: [
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
