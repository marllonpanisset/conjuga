
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/ui";
import { LogoCube } from "@/components/brand/LogoCube";
import { Button } from "@/components/ui/Button";
import { mainNav, serviceNav, solutionsNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

import { MobileNav } from "./MobileNav";

type DropdownType = "services" | "solutions" | null;

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass =
  "nav-link flex h-9 items-center px-1 text-small text-text-secondary transition-colors duration-200 hover:text-text-primary";

const serviceItems = [
  {
    label: "Presença Digital",
    href: "/servicos/presenca-digital" as const,
  },
  {
    label: "Sistemas Web",
    href: "/servicos/sistemas-web" as const,
  },
  {
    label: "Automações",
    href: "/servicos/automacao" as const,
  },
];

const solutionsItems = [
  {
    label: "Para Hospedagens",
    href: "/solucoes/hospedagens" as const,
  },
  {
    label: "Para Clínicas",
    href: "/solucoes/clinicas" as const,
  },
];

export function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const navRef = useRef<HTMLElement>(null);
  const openedByHoverRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;

      if (
        target instanceof Node &&
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        openedByHoverRef.current = false;
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        openedByHoverRef.current = false;
        setActiveDropdown(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  const handleDropdownMouseEnter = (
    dropdown: Exclude<DropdownType, null>,
  ) => {
    // Hover só controla a abertura em dispositivos que possuem mouse.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    openedByHoverRef.current = true;
    setActiveDropdown(dropdown);
  };

  const handleDropdownMouseLeave = () => {
    if (!openedByHoverRef.current) return;

    openedByHoverRef.current = false;
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdown: Exclude<DropdownType, null>) => {
    // Se o hover já abriu o dropdown, o primeiro clique assume o controle
    // sem fechar o conteúdo que o usuário acabou de abrir.
    if (activeDropdown === dropdown && openedByHoverRef.current) {
      openedByHoverRef.current = false;
      return;
    }

    openedByHoverRef.current = false;

    setActiveDropdown((current) =>
      current === dropdown ? null : dropdown,
    );
  };

const closeDropdown = () => {
  openedByHoverRef.current = false;
  setActiveDropdown(null);
};

  const servicesActive = isPathActive(pathname, serviceNav.href);
  const solutionsActive = isPathActive(pathname, solutionsNav.href);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "border-border shadow-[var(--shadow-panel)]"
          : "border-transparent",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex items-center gap-2.5 rounded-sm font-display text-[1.0625rem] font-medium leading-none tracking-[0.08em] text-text-primary"
        >
          <LogoCube className="h-[26px] w-auto shrink-0 text-signal" />
          CONJUGA
        </Link>

        {/* Navegação desktop */}
        <nav
          ref={navRef}
          className="hidden items-center gap-7 lg:flex"
          aria-label="Navegação principal"
        >
          {/* Início */}
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              navLinkClass,
              pathname === "/" && "text-text-primary",
            )}
            data-active={pathname === "/"}
          >
            Início
          </Link>

          {/* Serviços */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownMouseEnter("services")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="flex h-9 items-center">
              <Link
                href={serviceNav.href}
                aria-current={servicesActive ? "page" : undefined}
                className={cn(
                  navLinkClass,
                  servicesActive && "text-text-primary",
                )}
                data-active={servicesActive}
              >
                {serviceNav.label}
              </Link>

              <button
                type="button"
                onClick={() => handleDropdownClick("services")}
                aria-label="Abrir opções de Serviços"
                aria-expanded={activeDropdown === "services"}
                aria-controls="dropdown-services"
                className="flex h-9 w-6 items-center justify-center text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    activeDropdown === "services" && "rotate-180",
                  )}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            {activeDropdown === "services" && (
              <div className="absolute right-0 top-full z-50 pt-2">
                <ul
                  id="dropdown-services"
                  aria-label="Links de Serviços"
                  className="w-48 rounded-md bg-surface py-1 shadow-sm ring-1 ring-black/5"
                >
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeDropdown}
                        aria-current={
                          isPathActive(pathname, item.href)
                            ? "page"
                            : undefined
                        }
                        className="flex min-h-9 items-center px-3 py-2 text-small text-text-secondary transition-colors hover:bg-background hover:text-text-primary focus-visible:bg-background focus-visible:text-text-primary focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Soluções */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownMouseEnter("solutions")}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <div className="flex h-9 items-center">
              <Link
                href={solutionsNav.href}
                aria-current={solutionsActive ? "page" : undefined}
                className={cn(
                  navLinkClass,
                  solutionsActive && "text-text-primary",
                )}
                data-active={solutionsActive}
              >
                {solutionsNav.label}
              </Link>

              <button
                type="button"
                onClick={() => handleDropdownClick("solutions")}
                aria-label="Abrir opções de Soluções"
                aria-expanded={activeDropdown === "solutions"}
                aria-controls="dropdown-solutions"
                className="flex h-9 w-6 items-center justify-center text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "h-3 w-3 transition-transform duration-200",
                    activeDropdown === "solutions" && "rotate-180",
                  )}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            {activeDropdown === "solutions" && (
              <div className="absolute right-0 top-full z-50 pt-2">
                <ul
                  id="dropdown-solutions"
                  aria-label="Links de Soluções"
                  className="w-48 rounded-md bg-surface py-1 shadow-sm ring-1 ring-black/5"
                >
                  {solutionsItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeDropdown}
                        aria-current={
                          isPathActive(pathname, item.href)
                            ? "page"
                            : undefined
                        }
                        className="flex min-h-9 items-center px-3 py-2 text-small text-text-secondary transition-colors hover:bg-background hover:text-text-primary focus-visible:bg-background focus-visible:text-text-primary focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sobre e Projetos */}
          {mainNav.map((item) => {
            const isActive = isPathActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  navLinkClass,
                  isActive && "text-text-primary",
                )}
                data-active={isActive}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <Button
            href="/contato"
            size="md"
            aria-current={pathname === "/contato" ? "page" : undefined}
          >
            Conte seu desafio
          </Button>
        </div>

        {/* Navegação mobile */}
        <MobileNav />
      </Container>
    </header>
  );
}
