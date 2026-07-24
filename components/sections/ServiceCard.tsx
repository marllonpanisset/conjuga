import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, Heading, Text, Icon } from "@/components/ui";
import type { Service } from "@/types/service";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/servicos/${service.slug}` as never} className="group block h-full">
      <Card className="flex h-full flex-col justify-between">
        <div>
          <Icon icon={service.icon} size={24} />
          <Heading as="h3" className="mt-5">
            {service.name}
          </Heading>
          <Text variant="muted" className="mt-3">
            {service.shortDescription}
          </Text>
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-[0.875rem] font-medium text-signal-strong transition-colors group-hover:text-signal">
          Ver serviço
          <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </Card>
    </Link>
  );
}
