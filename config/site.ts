/**
 * Centralizes immutable site information used across the application.
 *
 * Keeping SEO, metadata and structured data values in a single place avoids
 * duplication and ensures every page shares the same source of truth.
 */
const siteUrl = "https://conjuga.vercel.app";

export const siteConfig = {
  name: "Conjuga",

  legalName: "Conjuga",

  description:
    "Engenharia de software para empresas de serviços: sistemas web, automação, integrações e inteligência artificial aplicada.",

  url: siteUrl,

  locale: "pt-BR",

  openGraphImage: {
    path: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Conjuga — Engenharia de software para empresas de serviços",
  },

  /**
   * Default keywords reused by the Metadata API.
   *
   * Individual pages may extend these keywords when appropriate.
   */
  keywords: [
    "sistemas web",
    "automações",
    "integrações",
    "inteligência artificial aplicada",
    "desenvolvimento web",
    "sites institucionais",
    "landing pages",
    "desenvolvimento sob medida",
    "Conjuga",
  ],

  /**
   * Author information is centralized so metadata remains consistent
   * across the entire application.
   */
  author: {
    name: "Conjuga",
    url: siteUrl,
  },

  /**
   * Structured social profiles used by SEO schemas.
   *
   * Search engines can associate these profiles with the organization
   * represented by this website.
   */
  sameAs: [
    "https://instagram.com/conjuga.estudio",
    "https://linkedin.com/company/conjuga",
  ],

  contact: {
    email: "conjuga@outlook.com",
  },

  social: {
    linkedin: "https://linkedin.com/company/conjuga",

    instagram: "https://instagram.com/conjuga.estudio",
  },

  /**
   * Legacy link grouping kept temporarily to avoid breaking existing
   * components while the application migrates to semantic fields.
   */
  links: {
    email: "conjuga@outlook.com",

    linkedin: "https://linkedin.com/company/conjuga",

    instagram: "https://instagram.com/conjuga",
  },
} as const;
