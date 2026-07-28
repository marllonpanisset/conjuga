import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Tag } from "@/components/ui";
import { JsonLd } from "@/components/seo/JsonLd";

import { getAllPostSlugs, getPostMetaBySlug } from "@/lib/mdx";

import { buildMetadata } from "@/lib/seo";
import {
  articleJsonLd,
  breadcrumbJsonLd,
} from "@/lib/structured-data";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({
    slug,
  }));
}

/**
 * Generates SEO metadata for blog posts.
 *
 * Metadata remains centralized through buildMetadata()
 * to keep canonical URLs, OpenGraph and Twitter Cards consistent.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;

    const meta = getPostMetaBySlug(slug);

    return buildMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${meta.slug}`,
      type: "article",
      publishedTime: meta.date,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const slugs = getAllPostSlugs();

  if (!slugs.includes(slug)) {
    notFound();
  }

  const meta = getPostMetaBySlug(slug);

  let Post;

  try {
    Post = (await import(`@/content/blog/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

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
          {
            name: meta.title,
            path: `/blog/${meta.slug}`,
          },
        ])}
      />

      <JsonLd
        data={articleJsonLd({
          headline: meta.title,
          description: meta.description,
          path: `/blog/${meta.slug}`,
          datePublished: meta.date,
        })}
      />

      <Section className="pt-20 sm:pt-24 md:pt-32">
        <Container>
          <div className="mx-auto min-w-0 max-w-2xl">
            {meta.segment && <Tag>{meta.segment}</Tag>}

            <Heading
              as="h1"
              className="mt-4 text-balance [overflow-wrap:anywhere]"
            >
              {meta.title}
            </Heading>

            <Text variant="muted" className="mt-4">
              {meta.readingTime}
            </Text>

            <article className="mt-6 min-w-0">
              <Post />
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
