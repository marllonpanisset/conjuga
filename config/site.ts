/**
 * Centralizes immutable site information used across the application.
 *
 * Keeping SEO, metadata and structured data values in a single place avoids
 * duplication and ensures every page shares the same source of truth.
 */
export const siteConfig = {
  name: "Fyrmma",

  legalName: "Fyrmma Estúdio Digital",

  description:
    "Estúdio digital especializado em desenvolvimento web, sistemas personalizados e automações para pequenas e médias empresas.",

  url: "https://fyrmma.com",

  locale: "pt-BR",

  /**
   * Default Open Graph image used whenever a page does not provide
   * a more specific social preview.
   */
  ogImage: "/og/default.png",

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
    name: "Fyrmma Estúdio Digital",
    url: "https://fyrmma.com",
  },

  links: {
    email: "contato@fyrmma.com",

    linkedin: "https://linkedin.com/company/fyrmma",

    instagram: "https://instagram.com/fyrmma",
  },
} as const;
