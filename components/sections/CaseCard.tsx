import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion";
import { Heading } from "@/components/ui/Heading";
import { Tag } from "@/components/ui/Tag";
import { Text } from "@/components/ui/Text";

import type { CaseStudy } from "@/types/case-study";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

/**
 * Card de projeto em faixa larga: metadados na coluna da esquerda, resumo na
 * coluna de leitura. Composição horizontal para não repetir a grade de
 * serviços da Home.
 */
export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <Reveal y={16}>
      <Link
        href={`/projetos/${caseStudy.slug}` as never}
        className="group grid grid-cols-1 gap-5 border-t border-border py-8 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:gap-8"
      >
        <div className="flex flex-wrap items-center gap-2 md:col-span-4">
          <Tag>{caseStudy.segment}</Tag>
          <Tag className="bg-transparent">Estudo de projeto</Tag>
        </div>

        <div className="md:col-span-8">
          <Heading
            as="h3"
            className="flex items-center gap-3 text-heading-m transition-colors duration-200 group-hover:text-signal-strong"
          >
            {caseStudy.title}
            <ArrowUpRight
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
              className="shrink-0 text-signal opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-precise)] group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </Heading>

          <Text className="mt-3 max-w-2xl">{caseStudy.summary}</Text>
        </div>
      </Link>
    </Reveal>
  );
}
