import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/content/servicos";
import { niches } from "@/content/nichos";
import { caseStudies } from "@/content/projetos";
import { getAllPostSlugs } from "@/lib/mdx";

const createUrl = (path: string) => new URL(path, siteConfig.url).toString();

/**
 * Generates the application sitemap.
 *
 * Keeping route generation centralized ensures all public pages are
 * discoverable by search engines while avoiding duplicated URL logic.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: createUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: createUrl("/servicos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: createUrl("/solucoes"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: createUrl("/sobre"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: createUrl("/projetos"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: createUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: createUrl("/contato"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: createUrl(`/servicos/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const nicheRoutes: MetadataRoute.Sitemap = niches.map((niche) => ({
    url: createUrl(`/solucoes/${niche.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: createUrl(`/projetos/${project.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: createUrl(`/blog/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...nicheRoutes,
    ...caseRoutes,
    ...blogRoutes,
  ];
}
