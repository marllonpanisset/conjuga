import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/**
 * Generates reusable metadata for dynamic pages.
 *
 * Centralizing metadata generation avoids duplicated SEO logic
 * across services, projects, blog posts and landing pages.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();

  const ogImage = new URL(
    image ?? siteConfig.ogImage,
    siteConfig.url,
  ).toString();

  return {
    title,

    description,

    authors: [
      {
        name: siteConfig.author.name,
        url: siteConfig.author.url,
      },
    ],

    creator: siteConfig.author.name,

    publisher: siteConfig.legalName,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",

      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Creates Organization structured data for search engines.
 *
 * This schema describes the company entity behind the website.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: siteConfig.legalName,

    url: siteConfig.url,

    description: siteConfig.description,

    email: siteConfig.links.email,

    sameAs: [siteConfig.links.linkedin, siteConfig.links.instagram],
  };
}

/**
 * Creates Service structured data for service landing pages.
 *
 * This helps search engines understand that a page represents
 * a commercial service offered by the organization.
 */
export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",

    "@type": "Service",

    serviceType: name,

    description,

    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
    },

    url: new URL(path, siteConfig.url).toString(),
  };
}
