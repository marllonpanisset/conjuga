import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/content/servicos";
import { niches } from "@/content/nichos";
import { caseStudies } from "@/content/projetos";
import { getAllPostSlugs } from "@/lib/mdx";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/servicos", "/solucoes", "/sobre", "/projetos", "/blog", "/contato"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/servicos/${service.slug}`,
    lastModified: new Date(),
  }));

  const nicheRoutes = niches.map((niche) => ({
    url: `${siteConfig.url}/solucoes/${niche.slug}`,
    lastModified: new Date(),
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${siteConfig.url}/projetos/${c.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = getAllPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...nicheRoutes, ...caseRoutes, ...blogRoutes];
}
