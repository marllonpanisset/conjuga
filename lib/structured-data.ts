import { siteConfig } from "@/config/site";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
}

interface ArticleSchemaInput {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}

const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.url).toString();

const organizationId = absoluteUrl("/#organization");
const websiteId = absoluteUrl("/#website");

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs: [...siteConfig.sameAs],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    publisher: {
      "@id": organizationId,
    },
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: {
      "@id": organizationId,
    },
  };
}

export function articleJsonLd({
  headline,
  description,
  path,
  datePublished,
}: ArticleSchemaInput) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
    publisher: {
      "@id": organizationId,
    },
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
