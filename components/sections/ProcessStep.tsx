import { Heading, Text } from "@/components/ui";

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div
      className="
        group
        relative
        h-full
        rounded-[16px]
        border border-border
        bg-surface
        p-6
        shadow-[0_1px_2px_rgba(0,0,0,0.2)]
        transition-[border-color,background-color,box-shadow]
        duration-200 ease-[var(--ease-signature)]
        hover:border-signal/30
        hover:bg-surface-elevated/60
        hover:shadow-[0_1px_2px_rgba(0,0,0,0.24),0_16px_32px_-28px_rgba(76,111,255,0.32)]
        md:p-8
      "
    >
      <div className="flex h-full items-start gap-5 md:gap-6">
        <div className="shrink-0">
          <span
            className="
              flex h-11 w-11 items-center justify-center
              rounded-[12px]
              border border-border-strong/80
              bg-background/60
              font-mono text-xs font-semibold
              tracking-[-0.02em]
              text-signal-strong
              transition-[border-color,background-color,color] duration-200 ease-[var(--ease-signature)]
              group-hover:border-signal/40
              group-hover:bg-signal-soft
              group-hover:text-signal
            "
          >
            {String(index).padStart(2, "0")}
          </span>
        </div>

        <div className="max-w-lg flex-1">
          <Heading as="h4">
            {title}
          </Heading>

          <Text
            variant="muted"
            className="mt-3 leading-relaxed text-text-secondary"
          >
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
}
