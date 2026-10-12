"use client";

import type { ElementType, ReactNode } from "react";
import { m } from "framer-motion";

import { easeSignature, motionTokens } from "@/lib/motion";
import { useMounted } from "./useMounted";

type MotionTag = typeof m.div;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: motionTokens.stagger,
      delayChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: motionTokens.offset.ySmall },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.base,
      ease: easeSignature,
    },
  },
};

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Agrupa itens que devem entrar em sequência. O contêiner orquestra o ritmo;
 * cada `StaggerItem` herda a mesma curva e duração.
 */
export function Stagger({ children, className, as = "div" }: StaggerProps) {
  const mounted = useMounted();

  if (!mounted) {
    const StaticTag = as as ElementType;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const Component = m[as as "div"] as MotionTag;

  return (
    <Component
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -6% 0px" }}
    >
      {children}
    </Component>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const mounted = useMounted();

  if (!mounted) {
    const StaticTag = as as ElementType;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const Component = m[as as "div"] as MotionTag;

  return (
    <Component className={className} variants={itemVariants}>
      {children}
    </Component>
  );
}
