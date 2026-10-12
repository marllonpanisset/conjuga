import type { Metadata } from "next";
import Link from "next/link";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Text } from "@/components/ui";
import { Hero } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { Stagger, StaggerItem } from "@/components/motion";

import { getAllPostsMeta } from "@/lib/mdx";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog",

  description:
    "Conteúdo sobre sistemas web, automações, integrações e inteligência artificial aplicada para empresas de serviços, além de presença digital.",

  path: "/blog",
});

/**
 * Blog index page.
 *
 * The page lists published articles and provides
 * internal links to improve content discoverability.
 */
export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <PageWrapper>
      <JsonLd
        data={breadcrumbJsonLd([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Blog",
            path: "/blog",
          },
        ])}
      />

      <Hero
        eyebrow="Blog"
        title="Conhecimento para operações mais organizadas"
        description="Artigos objetivos para ensinar, esclarecer dúvidas e compartilhar aprendizados sobre software, automação e processos."
      />

      <Section>
        <Container>
          {posts.length > 0 ? (
            <Stagger as="ul" className="border-t border-border">
              {posts.map((post) => (
                <StaggerItem as="li" key={post.slug} className="border-b border-border">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 gap-4 py-8 transition-colors duration-200 hover:bg-surface md:grid-cols-12 md:gap-8 lg:py-10"
                  >
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:col-span-4">
                      {post.segment && (
                        <span className="label-mono text-text-secondary">
                          {post.segment}
                        </span>
                      )}
                      <span className="label-mono">{post.readingTime}</span>
                    </div>

                    <div className="md:col-span-8">
                      <h2 className="font-display text-heading-m font-medium tracking-[-0.012em] text-balance text-text-primary transition-colors duration-200 group-hover:text-signal-strong">
                        {post.title}
                      </h2>

                      <Text className="mt-3 max-w-2xl">{post.description}</Text>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <Text variant="muted">Nenhum post publicado ainda.</Text>
          )}
        </Container>
      </Section>
    </PageWrapper>
  );
}
