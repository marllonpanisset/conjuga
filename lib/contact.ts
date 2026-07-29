export const contactServices = [
  { value: "sistemas-web", label: "Sistemas Web" },
  { value: "automacoes", label: "Automações e Integrações" },
  {
    value: "inteligencia-artificial-aplicada",
    label: "Inteligência Artificial Aplicada",
  },
  { value: "presenca-digital", label: "Presença Digital" },
] as const;

export const contactFieldLimits = {
  name: 120,
  company: 160,
  email: 254,
  phone: 30,
  service: 32,
  message: 5_000,
} as const;

export type ContactService = (typeof contactServices)[number]["value"];
