import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  name: string;
  shortDescription: string;
  problem: string;
  includes: string[];
  stack: string[];
  heroTitle: string;
  heroDescription: string;
}
