import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageWrapper } from "@/components/layout";
import { Container, Divider, Section, Heading } from "@/components/ui";
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

      <Section className="pt-16 sm:pt-20 md:pt-28">
        <Container>
          <header className="mx-auto min-w-0 max-w-4xl">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {meta.segment && (
                <span className="label-mono text-text-secondary">
                  {meta.segment}
                </span>
              )}
              <span className="label-mono">{meta.readingTime}</span>
            </div>

            <Heading
              as="h1"
              className="mt-6 max-w-[26ch] font-display text-display-l text-balance [overflow-wrap:anywhere] sm:mt-8"
            >
              {meta.title}
            </Heading>

            <Divider className="mt-8 sm:mt-10" />
          </header>

          <div className="mx-auto min-w-0 max-w-3xl">
            <article className="mt-10 min-w-0 max-w-full text-text-secondary [overflow-wrap:break-word] sm:mt-12 [&>*:first-child]:mt-0 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:border-signal [&_blockquote]:pl-5 [&_blockquote]:font-display [&_blockquote]:text-[1.125rem] [&_blockquote]:not-italic [&_blockquote]:text-text-primary [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.5rem] [&_h2]:font-medium [&_h2]:leading-[1.25] [&_h2]:tracking-[-0.015em] [&_h2]:text-text-primary [&_h3]:mt-9 [&_h3]:font-display [&_h3]:text-[1.1875rem] [&_h3]:font-medium [&_h3]:text-text-primary [&_img]:my-8 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-[var(--radius-md)] [&_img]:border [&_img]:border-border [&_li]:pl-1 [&_li]:leading-7 [&_ol]:my-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_pre]:my-6 [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-[var(--radius-md)] [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-5 [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto">
              <Post />
            </article>

            <Divider className="mt-14" />

            <Link
              href="/blog"
              className="link-underline mt-8 inline-block text-small font-medium text-signal-strong"
            >
              Voltar para o blog
            </Link>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
