"use client";

import { Fragment } from "react";
import { m } from "framer-motion";
import { useReducedMotion } from "framer-motion";

import { easeSignature, motionTokens } from "@/lib/motion";
import { useMounted } from "./useMounted";

interface RevealTextProps {
  text: string;
  className?: string;
  /** Atraso inicial em segundos. */
  delay?: number;
  /** Intervalo entre palavras, em segundos. */
  stagger?: number;
  /**
   * `mount` anima imediatamente ao carregar (uso no hero);
   * `view` anima quando o texto entra na viewport.
   */
  mode?: "mount" | "view";
}

/**
 * Revelação tipográfica palavra a palavra.
 *
 * Cada palavra é recortada por um contêiner com overflow escondido, o que
 * cria uma entrada "de baixo para cima" sem mover o layout ao redor.
 * Reservado para títulos e frases curtas — nunca para blocos longos.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  mode = "view",
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useMounted();
  const words = text.split(" ");

  if (reduceMotion || !mounted) {
    return <span className={className}>{text}</span>;
  }

  const animateProps =
    mode === "mount"
      ? { animate: { y: "0%", opacity: 1 } }
      : { whileInView: { y: "0%", opacity: 1 } };

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}
          >
            <m.span
              className="inline-block"
              initial={{ y: "115%", opacity: 0 }}
              {...animateProps}
              viewport={{ once: true, margin: "-10% 0px -5% 0px" }}
              transition={{
                duration: motionTokens.duration.slow,
                delay: delay + index * stagger,
                ease: easeSignature,
              }}
            >
              {word}
            </m.span>
          </span>
          {index < words.length - 1 ? "\u00A0" : null}
        </Fragment>
      ))}
    </span>
  );
}
