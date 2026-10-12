/**
 * Tokens de movimento do design system.
 *
 * Centralizar durações, curvas e deslocamentos evita que cada animação
 * invente seu próprio ritmo. Os mesmos valores existem como variáveis CSS
 * em `app/globals.css` para transições declarativas.
 */
export const motionTokens = {
  duration: {
    fast: 0.18,
    base: 0.34,
    slow: 0.62,
    page: 0.5,
  },
  ease: {
    /** Entrada padrão — desacelera suavemente até parar */
    signature: [0.16, 1, 0.3, 1],
    /** Movimento curto e preciso (microinterações) */
    precise: [0.33, 1, 0.68, 1],
    /** Saída — acelera ao deixar a tela */
    exit: [0.4, 0, 1, 1],
  },
  offset: {
    y: 20,
    ySmall: 10,
  },
  stagger: 0.07,
} as const;

/** Curva tipada para o Framer Motion aceitar sem alargar o tipo. */
export const easeSignature = motionTokens.ease.signature as unknown as [
  number,
  number,
  number,
  number,
];

export const easePrecise = motionTokens.ease.precise as unknown as [
  number,
  number,
  number,
  number,
];

export const easeExit = motionTokens.ease.exit as unknown as [
  number,
  number,
  number,
  number,
];
