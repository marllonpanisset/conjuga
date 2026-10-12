import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageWrapper({
  children,
  withGrid = false,
}: {
  children: ReactNode;
  withGrid?: boolean;
}) {
  return (
    <main
      id="conteudo"
      className={cn("relative", withGrid && "blueprint-grid")}
    >
      {children}
    </main>
  );
}
