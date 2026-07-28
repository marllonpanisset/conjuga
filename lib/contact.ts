export const contactServices = [
  { value: "presenca-digital", label: "Presença Digital" },
  { value: "sistemas-web", label: "Sistemas Web" },
  { value: "automacoes", label: "Automações" },
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
