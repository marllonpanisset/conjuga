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
        pb-32
        md:pt-40
        md:pb-40
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
        {/* Main glow */}
        <div
          className="
      absolute
      left-1/2
      top-0
      h-[500px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-primary/15
      blur-[140px]
    "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute
            left-1/4
            top-32
            h-[280px]
            w-[480px]
            rounded-full
            bg-accent/12
            blur-[120px]
          "
        />

        {/* Subtle radial overlay */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]
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
                text-balance
                tracking-[-0.06em]
                leading-[1.07]
                md:max-w-4xl
                text-primary-foreground
                font-extrabold
                drop-shadow-md
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
                max-w-prose
                text-lg
                leading-relaxed
                text-text-secondary
                md:text-xl
                `,
                isCenter && "mx-auto max-w-3xl text-pretty",
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
                  mt-14
                  flex
                  flex-col
                  items-center
                  gap-4
                  sm:flex-row
                  sm:items-stretch
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
