
import Link from "next/link";

import { LogoCube } from "@/components/brand/LogoCube";
import { Container } from "@/components/ui";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function FooterColumn({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <section aria-labelledby={id} className="min-w-0">
      <h2 id={id} className="label-mono">
        {title}
      </h2>

      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href as never}
              className="inline-block rounded-sm text-small leading-relaxed text-text-secondary transition-colors duration-200 hover:text-signal-strong"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Rodapé com assinatura da marca, navegação organizada em quatro colunas
 * e barra inferior com informações institucionais e contato.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="flex items-center gap-3 font-display text-[1.5rem] font-medium leading-none tracking-[0.06em] text-text-primary">
              <LogoCube className="h-[34px] w-auto shrink-0 text-signal" />
              CONJUGA
            </p>

            <p className="mt-6 max-w-sm text-small leading-[1.7] text-text-secondary">
              Engenharia de software para empresas — presença digital, sistemas
              web e automações.
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:col-span-8 lg:col-start-5 lg:gap-x-12"
          >
            <FooterColumn
              id="footer-services"
              title="Serviços"
              items={footerNav.servicos}
            />

            <FooterColumn
              id="footer-solutions"
              title="Soluções"
              items={footerNav.solucoes}
            />

            <FooterColumn
              id="footer-company"
              title="Empresa"
              items={footerNav.empresa}
            />

            <FooterColumn
              id="footer-legal"
              title="Legal"
              items={footerNav.legal}
            />
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="label-mono">
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>

          <a
            href={`mailto:${siteConfig.links.email}`}
            className="label-mono transition-colors duration-200 hover:text-signal-strong"
          >
            {siteConfig.links.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
