import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, Heading, Text, Tag } from "@/components/ui";
import type { CaseStudy } from "@/types/case-study";

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/projetos/${caseStudy.slug}` as never}
      className="group block h-full"
    >
      <Card className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1">
        <div className="flex flex-wrap gap-2">
          <Tag className="w-fit">{caseStudy.segment}</Tag>

          <Tag className="w-fit">Projeto de referência</Tag>
        </div>

        <Heading as="h3" className="mt-5">
          {caseStudy.title}
        </Heading>

        <Text variant="muted" className="mt-3">
          {caseStudy.summary}
        </Text>

        <div className="mt-auto flex items-center gap-1.5 pt-8 text-[0.875rem] font-medium text-signal-strong transition-colors group-hover:text-signal">
          Ver projeto
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Card>
    </Link>
  );
}
