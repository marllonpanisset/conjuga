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
        <div
          className="
            rounded-[16px]
            border border-signal/25
            bg-surface-elevated
            px-6 py-14 text-center
            shadow-[0_1px_2px_rgba(0,0,0,0.24),0_24px_52px_-40px_rgba(76,111,255,0.42)]
            sm:px-8
            md:px-16 md:py-20
          "
        >
          <div className="mx-auto mb-6 h-px w-12 bg-signal" />

          <Heading as="h2" className="mx-auto max-w-2xl">
            {title}
          </Heading>

          <Text
            variant="lead"
            className="mx-auto mt-4 max-w-xl text-text-secondary"
          >
            {description}
          </Text>

          <div className="mt-8 flex flex-wrap justify-center gap-4">{actions}</div>
        </div>
      </RevealOnScroll>
    </Container>
  );
}
