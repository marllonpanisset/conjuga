import Link from "next/link";
import { Container } from "@/components/ui";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function FooterColumn({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-muted">{title}</p>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href as never} className="text-[0.9375rem] text-text-secondary transition-colors hover:text-text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-[1.125rem] font-semibold text-text-primary">Fyrmma</span>
            <p className="mt-3 text-[0.875rem] leading-[1.6] text-text-muted">
              Estúdio digital: desenvolvimento web, sistemas personalizados e automações sob medida.
            </p>
          </div>

          <FooterColumn title="Serviços" items={footerNav.servicos} />
          <FooterColumn title="Soluções" items={footerNav.solucoes} />
          <FooterColumn title="Empresa" items={footerNav.empresa} />
          <FooterColumn title="Legal" items={footerNav.legal} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-[0.8125rem] text-text-muted">
            © {new Date().getFullYear()} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <a href={`mailto:${siteConfig.links.email}`} className="text-[0.8125rem] text-text-muted hover:text-text-primary">
            {siteConfig.links.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
