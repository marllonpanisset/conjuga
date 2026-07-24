import type { ReactNode } from "react";
import { Container, Heading, Text } from "@/components/ui";
import { RevealOnScroll } from "@/components/motion";

interface CTASectionProps {
  title: string;
  description: string;
  actions: ReactNode;
}

export function CTASection({ title, description, actions }: CTASectionProps) {
  return (
    <Container>
      <RevealOnScroll>
        <div className="rounded-[16px] border border-border bg-surface px-8 py-14 text-center md:px-16 md:py-20">
          <Heading as="h2">{title}</Heading>
          <Text variant="lead" className="mx-auto mt-4 max-w-xl">
            {description}
          </Text>
          <div className="mt-8 flex flex-wrap justify-center gap-4">{actions}</div>
        </div>
      </RevealOnScroll>
    </Container>
  );
}
