import type { ReactNode } from "react";
import { Container, Heading, Text, Badge } from "@/components/ui";
import { FadeIn } from "@/components/motion";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  align?: "center" | "left";
}

export function Hero({ eyebrow, title, description, actions, align = "center" }: HeroProps) {
  const isCenter = align === "center";

  return (
    <div className="relative pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="hero-glow" aria-hidden="true" />
      <Container>
        <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
          <FadeIn>
            {eyebrow && (
              <Badge
                className={cn(
                  "mb-6 border-signal/25 bg-signal-soft text-signal-strong",
                  isCenter && "mx-auto"
                )}
              >
                {eyebrow}
              </Badge>
            )}
          </FadeIn>
          <FadeIn delay={0.05}>
            <Heading as="h1">{title}</Heading>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Text variant="lead" className={isCenter ? "mx-auto mt-6 max-w-xl" : "mt-6"}>
              {description}
            </Text>
          </FadeIn>
          {actions && (
            <FadeIn delay={0.15}>
              <div className={`mt-10 flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}>{actions}</div>
            </FadeIn>
          )}
        </div>
      </Container>
    </div>
  );
}
