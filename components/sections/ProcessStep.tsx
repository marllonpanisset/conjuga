import { Heading, Text } from "@/components/ui";

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-5">
      <span className="font-mono text-[0.875rem] text-signal-strong">{String(index).padStart(2, "0")}</span>
      <div>
        <Heading as="h4">{title}</Heading>
        <Text variant="muted" className="mt-2">
          {description}
        </Text>
      </div>
    </div>
  );
}
