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

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  align = "center",
}: HeroProps) {
  const isCenter = align === "center";

  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28">
      <div className="hero-glow" aria-hidden="true" />

      <Container>
        <div
          className={cn(
            "relative",
            isCenter ? "mx-auto max-w-4xl text-center" : "max-w-3xl",
          )}
        >
          {eyebrow && (
            <FadeIn>
              <Badge
                className={cn(
                  "mb-6 border-border bg-surface text-text-secondary",
                  isCenter && "mx-auto",
                )}
              >
                {eyebrow}
              </Badge>
            </FadeIn>
          )}

          <FadeIn delay={0.05}>
            <Heading as="h1" className="tracking-[-0.04em]">
              {title}
            </Heading>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Text
              variant="lead"
              className={cn(
                "mt-6 text-text-secondary",
                isCenter && "mx-auto max-w-2xl",
              )}
            >
              {description}
            </Text>
          </FadeIn>

          {actions && (
            <FadeIn delay={0.15}>
              <div
                className={cn("mt-10 flex gap-4", isCenter && "justify-center")}
              >
                {actions}
              </div>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  );
}
