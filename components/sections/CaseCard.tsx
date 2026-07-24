import Link from "next/link";
import { Card, Heading, Text, Tag } from "@/components/ui";
import type { CaseStudy } from "@/types/case-study";

export function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link href={`/projetos/${caseStudy.slug}` as never} className="block h-full">
      <Card className="flex h-full flex-col">
        <Tag className="w-fit">{caseStudy.segment}</Tag>
        <Heading as="h3" className="mt-4">
          {caseStudy.title}
        </Heading>
        <Text variant="muted" className="mt-3">
          {caseStudy.summary}
        </Text>
        <Text variant="caption" className="mt-6">
          {caseStudy.client}
        </Text>
      </Card>
    </Link>
  );
}
