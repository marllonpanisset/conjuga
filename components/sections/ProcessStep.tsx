import { Heading, Text } from "@/components/ui";

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="group flex gap-6 border-b border-border pb-8 transition-colors last:border-0">
      <span className="font-mono text-[0.875rem] font-medium text-signal-strong transition-colors group-hover:text-signal">
        {String(index).padStart(2, "0")}
      </span>

      <div className="max-w-md">
        <Heading
          as="h4"
          className="transition-colors group-hover:text-text-primary"
        >
          {title}
        </Heading>

        <Text variant="muted" className="mt-3 leading-relaxed">
          {description}
        </Text>
      </div>
    </div>
  );
}
