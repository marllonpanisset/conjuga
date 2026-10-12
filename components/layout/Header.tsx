"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui";
import { LogoCube } from "@/components/brand/LogoCube";
import { Button } from "@/components/ui/Button";
import { servicesNav, mainNav, type NavItem } from "@/config/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  pathname: string;
}

function isPathActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkClass =
  "nav-link flex h-9 items-center px-1 text-small text-text-secondary transition-colors duration-200 hover:text-text-primary";

/**
 * Provides a desktop navigation disclosure that preserves hover behavior while
 * exposing the same links to keyboard and assistive-technology users.
 *
 * The menu stays local because each dropdown owns its own trigger, focus, and
 * outside-click lifecycle. A shared state would add coupling without benefit.
 */
function NavDropdown({ label, items, pathname }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const triggerId = useId();
  const menuId = useId();
  const isActive = items.some((item) => isPathActive(pathname, item.href));

  /**
   * Moves focus after the menu has rendered so arrow-key navigation works when
   * opening a closed dropdown. requestAnimationFrame avoids querying stale DOM.
   */
  function focusMenuItem(index: number) {
    window.requestAnimationFrame(() => itemRefs.current[index]?.focus());
  }

  useEffect(() => {
    if (!open) return;

    /**
     * Closes the disclosure when a pointer activates content outside it. This
     * keeps mouse behavior aligned with native menus without intercepting links.
     */
    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      focusMenuItem(0);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setOpen(true);
      focusMenuItem(items.length - 1);
      return;
    }

    if (event.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
    }
  }

  function handleMenuKeyDown(event: KeyboardEvent<HTMLUListElement>) {
    const currentItem =
      event.target instanceof HTMLAnchorElement ? event.target : null;
    const currentIndex = currentItem
      ? itemRefs.current.indexOf(currentItem)
      : -1;

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (currentIndex === -1) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusMenuItem((currentIndex + 1) % items.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusMenuItem((currentIndex - 1 + items.length) % items.length);
      return;
    }

    if (event.key === "Home") {
      event.preventDefault();
      focusMenuItem(0);
      return;
    }

    if (event.key === "End") {
      event.preventDefault();
      focusMenuItem(items.length - 1);
    }
  }

  function handleFocusOut(event: FocusEvent<HTMLDivElement>) {
    const nextFocusedElement = event.relatedTarget;

    if (
      !(nextFocusedElement instanceof Node) ||
      !event.currentTarget.contains(nextFocusedElement)
    ) {
      setOpen(false);
    }
  }

  function handleMouseLeave() {
    if (!dropdownRef.current?.contains(document.activeElement)) {
      setOpen(false);
    }
  }

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={handleMouseLeave}
      onBlur={handleFocusOut}
    >
      <button
        ref={triggerRef}
        id={triggerId}
        type="button"
        className={cn(navLinkClass, "gap-1.5", isActive && "text-text-primary")}
        data-active={isActive}
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={1.75}
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-72 pt-3">
          <ul
            id={menuId}
            role="menu"
            aria-labelledby={triggerId}
            className="rounded-[var(--radius-md)] border border-border bg-surface p-2 shadow-[var(--shadow-float)]"
            onKeyDown={handleMenuKeyDown}
          >
            {items.map((item, index) => {
              const itemIsActive = pathname === item.href;

              return (
                <li key={item.href} role="none">
                  <Link
                    ref={(element) => {
                      itemRefs.current[index] = element;
                    }}
                    href={item.href as never}
                    role="menuitem"
                    aria-current={itemIsActive ? "page" : undefined}
                    className={cn(
                      "block rounded-[var(--radius-sm)] border border-transparent px-3 py-2.5 transition-[background-color,border-color,color] duration-200 hover:bg-surface-elevated",
                      itemIsActive && "border-border bg-surface-elevated",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span className="block text-small font-medium text-text-primary">
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-text-muted">
                        {item.description}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

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
          <NavDropdown
            label="Serviços"
            items={servicesNav}
            pathname={pathname}
          />
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
            Falar com especialista
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
