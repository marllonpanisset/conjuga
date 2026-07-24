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
      <Card className="flex h-full flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
        <div>
          <Heading as="h3">{niche.name}</Heading>

          <Text variant="muted" className="mt-3">
            {niche.painPoints[0]}
          </Text>
        </div>

        <div className="mt-auto flex items-center gap-1.5 pt-8 text-[0.875rem] font-medium text-signal-strong transition-colors group-hover:text-signal">
          Ver solução
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Card>
    </Link>
  );
}
