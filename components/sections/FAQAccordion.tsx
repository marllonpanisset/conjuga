"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Plus } from "lucide-react";

import { Text } from "@/components/ui";
import { useMounted } from "@/components/motion/useMounted";
import { cn } from "@/lib/utils";
import { easePrecise, motionTokens } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

export type { FAQItem };

interface FAQAccordionProps {
  items: FAQItem[];
}

/**
 * Acordeão de perguntas frequentes.
 *
 * Abertura animada por altura, com curva de saída própria. O primeiro item
 * começa aberto para mostrar que a lista é interativa.
 */
export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const mounted = useMounted();

  return (
    <div className="border-y border-border">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="border-b border-border last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="item-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.0625rem] font-medium text-text-primary transition-colors duration-200 group-hover:text-signal-strong">
                  {item.question}
                </span>
              </span>

              <Plus
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className={cn(
                  "mt-1 shrink-0 text-text-muted transition-transform duration-300 ease-[var(--ease-signature)]",
                  isOpen && "rotate-45 text-signal",
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && mounted && (
                <m.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: motionTokens.duration.base,
                    ease: easePrecise,
                  }}
                  className="overflow-hidden"
                >
                  <Text className="max-w-2xl pb-7 pl-10">
                    {item.answer}
                  </Text>
                </m.div>
              )}
            </AnimatePresence>

            {isOpen && !mounted && (
              <div className="overflow-hidden">
                <Text className="max-w-2xl pb-7 pl-10">
                  {item.answer}
                </Text>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
