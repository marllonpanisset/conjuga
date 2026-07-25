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
    <section
      className="
        relative 
        overflow-hidden
        pt-28 
        pb-24
        md:pt-40
        md:pb-32
      "
    >
      {/* Background premium glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
        aria-hidden="true"
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-32
            h-[300px]
            w-[500px]
            -translate-x-1/2
            rounded-full
            bg-accent/10
            blur-[100px]
          "
        />
      </div>

      <Container>
        <div
          className={cn(
            "relative",
            isCenter ? "mx-auto max-w-5xl text-center" : "max-w-3xl",
          )}
        >
          {eyebrow && (
            <FadeIn>
              <Badge
                className={cn(
                  `
                  mb-8
                  border-border/80
                  bg-surface/80
                  backdrop-blur-md
                  text-text-secondary
                  shadow-sm
                  `,
                  isCenter && "mx-auto",
                )}
              >
                {eyebrow}
              </Badge>
            </FadeIn>
          )}

          <FadeIn delay={0.05}>
            <Heading
              as="h1"
              className="
                tracking-[-0.055em]
                leading-[1.05]
                md:max-w-4xl
              "
            >
              {title}
            </Heading>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Text
              variant="lead"
              className={cn(
                `
                mt-8
                text-text-secondary
                leading-relaxed
                `,
                isCenter && "mx-auto max-w-3xl",
              )}
            >
              {description}
            </Text>
          </FadeIn>

          {actions && (
            <FadeIn delay={0.15}>
              <div
                className={cn(
                  `
                  mt-12
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  `,
                  isCenter && "justify-center",
                )}
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
