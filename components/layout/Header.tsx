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
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import {
  servicesNav,
  nichesNav,
  mainNav,
  type NavItem,
} from "@/config/navigation";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

/**
 * Provides a desktop navigation disclosure that preserves hover behavior while
 * exposing the same links to keyboard and assistive-technology users.
 *
 * The menu stays local because each dropdown owns its own trigger, focus, and
 * outside-click lifecycle. A shared state would add coupling without benefit.
 */
function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const triggerId = useId();
  const menuId = useId();

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
        className="flex items-center gap-1 text-[0.9375rem] text-text-secondary transition-colors hover:text-text-primary"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        onKeyDown={handleTriggerKeyDown}
      >
        {label}
        <ChevronDown
          size={14}
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
          <ul
            id={menuId}
            role="menu"
            aria-labelledby={triggerId}
            className="rounded-[16px] border border-border bg-surface-elevated p-2 shadow-xl"
            onKeyDown={handleMenuKeyDown}
          >
            {items.map((item, index) => (
              <li key={item.href} role="none">
                <Link
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                  href={item.href as never}
                  role="menuitem"
                  className="block rounded-[10px] px-4 py-3 transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-[0.9375rem] font-medium text-text-primary">
                    {item.label}
                  </span>
                  {item.description && (
                    <span className="mt-0.5 block text-[0.8125rem] text-text-muted">
                      {item.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-[1.125rem] font-medium tracking-[-0.04em] text-text-primary"
        >
          FYRMMA
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
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
