
import type { ComponentProps } from "react";
import type { LucideIcon } from "lucide-react";

import {
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { Stagger, StaggerItem } from "@/components/motion";

type SectionProps = ComponentProps<typeof Section>;

type EditorialListItem = {
  text: string;
  icon: LucideIcon;
};

type EditorialListSectionProps = {
  label: string;
  title: string;
  items: EditorialListItem[];
  tone?: SectionProps["tone"];
  rule?: SectionProps["rule"];
};

export function EditorialListSection({
  label,
  title,
  items,
  tone = "raised",
  rule = true,
}: EditorialListSectionProps) {
  return (
    <Section tone={tone} rule={rule}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <Text variant="caption">{label}</Text>

            <Heading
              as="h2"
              className="mt-4 text-heading-m lg:max-w-[12ch]"
            >
              {title}
            </Heading>
          </div>

          <div className="lg:col-span-9">
            <Stagger as="ul" className="border-t border-border">
              {items.map((item, index) => {
                const ItemIcon = item.icon;

                return (
                  <StaggerItem
                    as="li"
                    key={`${index}-${item.text}`}
                    className="group flex items-start gap-6 border-b border-border py-7"
                  >
                    <span className="item-index pt-1.5">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-0.5 text-signal transition-transform duration-300 ease-[var(--ease-signature)] group-hover:-translate-y-0.5">
                      <ItemIcon
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>

                    <Heading as="h3" className="text-heading-m">
                      {item.text}
                    </Heading>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </Section>
  );
}
