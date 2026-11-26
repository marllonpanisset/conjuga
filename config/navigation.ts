
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const serviceNav = {
  label: "Serviços",
  href: "/servicos",
} as const satisfies NavItem;

export const solutionsNav = {
  label: "Soluções",
  href: "/solucoes",
} as const satisfies NavItem;

export const mainNav = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
] as const satisfies readonly NavItem[];

export const footerNav = {
  servicos: [
    { label: "Todos os serviços", href: serviceNav.href },
  ] as NavItem[],

  solucoes: [
    { label: "Todas as soluções", href: solutionsNav.href },
  ] as NavItem[],

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
