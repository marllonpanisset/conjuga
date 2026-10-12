"use client";

import type { ReactNode } from "react";
import { m, useReducedMotion } from "framer-motion";

import { easeSignature, motionTokens } from "@/lib/motion";
import { useMounted } from "@/components/motion/useMounted";

/**
 * Transição de entrada de rota do App Router.
 *
 * O `template` remonta a cada navegação, o que dá um ponto de entrada para a
 * animação sem precisar congelar a rota anterior. O movimento é curto e
 * pequeno: o conteúdo aparece, não escorrega. Com movimento reduzido, o
 * template devolve os filhos sem nenhum invólucro animado.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const mounted = useMounted();

  if (reduceMotion || !mounted) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: motionTokens.offset.ySmall }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: motionTokens.duration.page,
        delay: 0.02,
        ease: easeSignature,
      }}
    >
      {children}
    </m.div>
  );
}
