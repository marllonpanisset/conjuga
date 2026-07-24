"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { servicesNav, nichesNav, mainNav } from "@/config/navigation";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border text-text-primary"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-background p-6"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[1.125rem] font-semibold text-text-primary">Fyrmma</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-border text-text-primary"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-10 flex flex-1 flex-col gap-8 overflow-y-auto">
              <div>
                <p className="mb-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-muted">Serviços</p>
                <ul className="flex flex-col gap-4">
                  {servicesNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href as never} onClick={() => setOpen(false)} className="text-[1.0625rem] text-text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-3 font-mono text-[0.75rem] uppercase tracking-[0.08em] text-text-muted">Soluções por segmento</p>
                <ul className="flex flex-col gap-4">
                  {nichesNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href as never} onClick={() => setOpen(false)} className="text-[1.0625rem] text-text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="flex flex-col gap-4">
                  {mainNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href as never} onClick={() => setOpen(false)} className="text-[1.0625rem] text-text-primary">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <Button href="/contato" size="lg" className="w-full">
              Falar com especialista
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
