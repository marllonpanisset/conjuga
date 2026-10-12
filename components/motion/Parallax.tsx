"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";

type MotionTag = typeof m.div;

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Amplitude total do deslocamento, em pixels. */
  distance?: number;
  as?: ElementType;
}

/**
 * Parallax em camada única, atrelado à passagem do elemento pela viewport.
 *
 * O deslocamento é pequeno por design: o efeito existe para dar profundidade,
 * não para competir com o conteúdo. Com movimento reduzido, o componente
 * degrada para um elemento estático.
 */
export function Parallax({
  children,
  className,
  distance = 56,
  as = "div",
}: ParallaxProps) {
  const reduceMotion = useReducedMotion();
  const reference = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const Component = m[as as "div"] as MotionTag;

  if (reduceMotion) {
    const StaticTag = as as ElementType;
    return (
      <StaticTag ref={reference as never} className={className}>
        {children}
      </StaticTag>
    );
  }

  return (
    <Component ref={reference} className={className} style={{ y }}>
      {children}
    </Component>
  );
}
