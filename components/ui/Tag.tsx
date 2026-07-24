import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "rounded-[6px] bg-signal-soft px-2.5 py-1 text-[0.8125rem] font-medium text-signal-strong",
        className
      )}
    >
      {children}
    </span>
  );
}
