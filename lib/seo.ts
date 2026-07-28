import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
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
  type = "website",
  publishedTime,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const resolvedTitle =
    path === "/"
      ? `${siteConfig.name} — ${title}`
      : `${title} — ${siteConfig.name}`;
  const images = image
    ? [
        {
          url: new URL(image, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ]
    : undefined;

  return {
    title: path === "/" ? { absolute: resolvedTitle } : title,

    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale.replace("-", "_"),
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(images ? { images } : {}),
    },

    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: resolvedTitle,
      description,
      ...(images ? { images: images.map(({ url: imageUrl }) => imageUrl) } : {}),
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

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}
