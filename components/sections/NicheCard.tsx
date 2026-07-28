import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, Heading, Text } from "@/components/ui";
import type { Niche } from "@/types/niche";

export function NicheCard({ niche }: { niche: Niche }) {
  return (
    <Link
      href={`/solucoes/${niche.slug}` as never}
      className="group block h-full"
    >
      <Card
        className="
          flex h-full flex-col justify-between
          group-hover:border-signal/35
          group-hover:bg-surface-elevated/70
          group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.28),0_18px_36px_-28px_rgba(76,111,255,0.32)]
        "
      >
        <div>
          <div
            className="
              mb-6 h-px w-10 bg-border-strong
              transition-colors duration-200 ease-[var(--ease-signature)]
              group-hover:bg-signal
            "
          />

          <Heading as="h3">{niche.name}</Heading>

          <Text variant="muted" className="mt-3 leading-relaxed">
            {niche.painPoints[0]}
          </Text>
        </div>

        <div
          className="
            mt-8 flex items-center gap-2
            text-sm font-medium text-text-secondary
            transition-colors duration-200
            group-hover:text-text-primary
          "
        >
          Ver solução
          <ArrowUpRight
            size={16}
            className="text-text-muted transition-colors duration-200 group-hover:text-signal"
          />
        </div>
      </Card>
    </Link>
  );
}
