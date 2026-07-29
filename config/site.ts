/**
 * Centralizes immutable site information used across the application.
 *
 * Keeping SEO, metadata and structured data values in a single place avoids
 * duplication and ensures every page shares the same source of truth.
 */
export const siteConfig = {
  name: "Fyrmma",

  legalName: "Fyrmma",

  description:
    "Engenharia digital para empresas de serviços: software, automação, integrações e inteligência artificial aplicada.",

  url: "https://fyrmma.vercel.app",

  locale: "pt-BR",

  openGraphImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Fyrmma — Engenharia digital para empresas de serviços",
  },

  /**
   * Default keywords reused by the Metadata API.
   *
   * Individual pages may extend these keywords when appropriate.
   */
  keywords: [
    "desenvolvimento web",
    "sites institucionais",
    "landing pages",
    "automações",
    "integrações",
    "sistemas web",
    "desenvolvimento sob medida",
    "Fyrmma",
  ],

  /**
   * Author information is centralized so metadata remains consistent
   * across the entire application.
   */
  author: {
    name: "Fyrmma",
    url: "https://fyrmma.vercel.app",
  },

  /**
   * Structured social profiles used by SEO schemas.
   *
   * Search engines can associate these profiles with the organization
   * represented by this website.
   */
  sameAs: ["https://instagram.com/fyrmma.estudio"],

  contact: {
    email: "fyrmma@outlook.com",
  },

  social: {
    linkedin: "https://linkedin.com/company/fyrmma",

    instagram: "https://instagram.com/fyrmma.estudio",
  },

  /**
   * Legacy link grouping kept temporarily to avoid breaking existing
   * components while the application migrates to semantic fields.
   */
  links: {
    email: "fyrmma@outlook.com",

    linkedin: "https://linkedin.com/company/fyrmma",

    instagram: "https://instagram.com/fyrmma",
  },
} as const;
