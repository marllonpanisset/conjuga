import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, Heading, Text, Icon } from "@/components/ui";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicos/${service.slug}` as never}
      className="group block h-full"
    >
      <Card className="flex h-full flex-col justify-between transition-transform duration-300 group-hover:-translate-y-1">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface">
            <Icon icon={service.icon} size={20} />
          </div>

          <Heading as="h3" className="mt-6">
            {service.name}
          </Heading>

          <Text variant="muted" className="mt-3">
            {service.shortDescription}
          </Text>
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors group-hover:text-text-primary">
          Conhecer solução
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </Card>
    </Link>
  );
}
