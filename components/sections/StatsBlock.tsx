import { Heading, Text } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface Stat {
  value: string;
  label: string;
}

export function StatsBlock({ stats }: { stats: Stat[] }) {
  return (
    <StaggerGroup className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <Heading as="h2" className="font-mono">
            {stat.value}
          </Heading>
          <Text variant="muted" className="mt-2">
            {stat.label}
          </Text>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
