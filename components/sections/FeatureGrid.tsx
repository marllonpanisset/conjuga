import { Check } from "lucide-react";
import { Grid, Text } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion";

export function FeatureGrid({ items, cols = 2 }: { items: string[]; cols?: 2 | 3 }) {
  return (
    <StaggerGroup>
      <Grid cols={cols}>
        {items.map((item) => (
          <StaggerItem key={item} className="flex items-start gap-3">
            <Check size={18} className="mt-0.5 shrink-0 text-signal-strong" />
            <Text variant="body">{item}</Text>
          </StaggerItem>
        ))}
      </Grid>
    </StaggerGroup>
  );
}
