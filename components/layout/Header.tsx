"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import { servicesNav, nichesNav, mainNav } from "@/config/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

function NavDropdown({ label, items }: { label: string; items: typeof servicesNav }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 text-[0.9375rem] text-text-secondary transition-colors hover:text-text-primary"
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <div className="rounded-[16px] border border-border bg-surface-elevated p-2 shadow-xl">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href as never}
                className="block rounded-[10px] px-4 py-3 transition-colors hover:bg-surface"
              >
                <span className="block text-[0.9375rem] font-medium text-text-primary">{item.label}</span>
                {item.description && (
                  <span className="mt-0.5 block text-[0.8125rem] text-text-muted">{item.description}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-[1.125rem] font-semibold tracking-[-0.01em] text-text-primary">
          Fyrmma
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavDropdown label="Serviços" items={servicesNav} />
          <NavDropdown label="Soluções por segmento" items={nichesNav} />
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className="text-[0.9375rem] text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contato" size="md">
            Falar com especialista
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
