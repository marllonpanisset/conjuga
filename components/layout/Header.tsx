"use client";

import {
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui";
import { LogoCube } from "@/components/brand/LogoCube";
import { Button } from "@/components/ui/Button";
import { mainNav, serviceNav } from "@/config/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass =
  "nav-link flex h-9 items-center px-1 text-small text-text-secondary transition-colors duration-200 hover:text-text-primary";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "border-border shadow-[var(--shadow-panel)]" : "border-transparent",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex items-center gap-2.5 rounded-sm font-display text-[1.0625rem] font-medium leading-none tracking-[0.08em] text-text-primary"
        >
          <LogoCube className="h-[26px] w-auto shrink-0 text-signal" />
          CONJUGA
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(navLinkClass, pathname === "/" && "text-text-primary")}
            data-active={pathname === "/"}
          >
            Início
          </Link>
          <Link
            href={serviceNav.href}
            aria-current={isPathActive(pathname, serviceNav.href) ? "page" : undefined}
            className={cn(
              navLinkClass,
              isPathActive(pathname, serviceNav.href) && "text-text-primary",
            )}
            data-active={isPathActive(pathname, serviceNav.href)}
          >
            {serviceNav.label}
          </Link>
          {mainNav.map((item) => {
            const isActive = isPathActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href as never}
                aria-current={isActive ? "page" : undefined}
                className={cn(navLinkClass, isActive && "text-text-primary")}
                data-active={isActive}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            href="/contato"
            size="md"
            aria-current={pathname === "/contato" ? "page" : undefined}
          >
            Conte seu desafio
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
