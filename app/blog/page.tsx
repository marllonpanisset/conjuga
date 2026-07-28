import type { Metadata } from "next";
import Link from "next/link";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Card, Heading, Text, Tag } from "@/components/ui";

import { Hero } from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";

import { getAllPostsMeta } from "@/lib/mdx";

import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Blog",

  description:
    "Conteúdo técnico sobre presença digital, sistemas web e automação para pequenas e médias empresas.",

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
        title="Conteúdo técnico sobre presença digital"
        description="Artigos objetivos sobre sistemas, automação e estratégia digital para os segmentos que atendemos."
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full">
                  {post.segment && <Tag className="w-fit">{post.segment}</Tag>}

                  <Heading as="h3" className="mt-4">
                    {post.title}
                  </Heading>

                  <Text variant="muted" className="mt-3">
                    {post.description}
                  </Text>

                  <Text variant="caption" className="mt-6">
                    {post.readingTime}
                  </Text>
                </Card>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <Text variant="muted">Nenhum post publicado ainda.</Text>
          )}
        </Container>
      </Section>
    </PageWrapper>
  );
}
