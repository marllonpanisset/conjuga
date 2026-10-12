import { RuleFill, Stagger, StaggerItem } from "@/components/motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export interface MethodStep {
  title: string;
  description: string;
}

interface MethodTimelineProps {
  steps: MethodStep[];
}

/**
 * Método como painel único de etapas conectadas.
 *
 * Cada passo abre sua própria régua em sequência, o que materializa a ideia
 * de processo sem recorrer a setas ou caixas numeradas isoladas.
 */
export function MethodTimeline({ steps }: MethodTimelineProps) {
  return (
    <Stagger className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4">
      {steps.map((step, index) => (
        <StaggerItem key={step.title} className="min-w-0">
          <div className="flex items-baseline justify-between gap-4">
            <span className="label-mono">Passo</span>
            <span className="item-index">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <RuleFill className="mt-4" delay={index * 0.08} />

          <Heading as="h3" className="mt-6 text-heading-s">
            {step.title}
          </Heading>

          <Text className="mt-3 max-w-[34ch]">{step.description}</Text>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
