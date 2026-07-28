import { Heading, Text } from "@/components/ui";
import { StaggerGroup, StaggerItem } from "@/components/motion";

interface Stat {
  value: string;
  label: string;
}

export function StatsBlock({ stats }: { stats: Stat[] }) {
  return (
    <StaggerGroup
      className="
        grid grid-cols-2 gap-px overflow-hidden
        rounded-[16px] border border-border
        bg-border shadow-[0_1px_2px_rgba(0,0,0,0.2)]
        md:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <StaggerItem key={stat.label}>
          <div
            className="
              h-full
              bg-surface px-5 py-6
              transition-colors duration-200
              ease-[var(--ease-signature)]
              hover:bg-surface-elevated
              md:px-7 md:py-8
            "
          >
            <Heading
              as="h2"
              className="
                font-mono
                text-[clamp(1.75rem,3vw,2.375rem)]
                leading-none tracking-[-0.055em]
                text-signal-strong
              "
            >
              {stat.value}
            </Heading>

            <Text
              variant="muted"
              className="mt-4 max-w-[13rem] text-sm leading-snug text-text-secondary"
            >
              {stat.label}
            </Text>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
