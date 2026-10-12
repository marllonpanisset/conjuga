import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Stagger, StaggerItem } from "@/components/motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

import type { Service } from "@/types/service";

interface ServiceIndexProps {
  services: Service[];
}

/**
 * Índice editorial de serviços.
 *
 * Uma lista régua-a-régua, e não uma grade de cartões: o nome do serviço
 * lidera a linha, a descrição ocupa a coluna de leitura e o hover revela a
 * seta de navegação. A mesma composição serve à Home e a /servicos.
 */
export function ServiceIndex({ services }: ServiceIndexProps) {
  return (
    <Stagger as="ul" className="border-t border-border">
      {services.map((service, index) => (
        <StaggerItem
          as="li"
          key={service.slug}
          className="border-b border-border"
        >
          <Link
            href={`/servicos/${service.slug}` as never}
            className="group grid grid-cols-1 gap-3 py-7 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:items-baseline md:gap-8 md:py-9"
          >
            <span className="item-index transition-colors duration-200 group-hover:text-signal md:col-span-1">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="flex items-center gap-3 md:col-span-4">
              <Heading
                as="h3"
                className="text-heading-m transition-colors duration-200 group-hover:text-signal-strong"
              >
                {service.name}
              </Heading>

              <ArrowUpRight
                size={18}
                strokeWidth={1.75}
                aria-hidden="true"
                className="shrink-0 text-signal opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-precise)] group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </span>

            <Text className="max-w-xl md:col-span-6 md:col-start-6">
              {service.shortDescription}
            </Text>
          </Link>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
