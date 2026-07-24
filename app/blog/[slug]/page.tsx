import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/layout";
import { Container, Section, Heading, Text, Tag } from "@/components/ui";
import { getAllPostSlugs, getPostMetaBySlug } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const meta = getPostMetaBySlug(slug);
    return buildMetadata({
      title: meta.title,
      description: meta.description,
      path: `/blog/${meta.slug}`,
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const slugs = getAllPostSlugs();
  if (!slugs.includes(slug)) notFound();

  const meta = getPostMetaBySlug(slug);

  let Post;
  try {
    Post = (await import(`@/content/blog/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <PageWrapper>
      <Section className="pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            {meta.segment && <Tag>{meta.segment}</Tag>}
            <Heading as="h1" className="mt-4">
              {meta.title}
            </Heading>
            <Text variant="muted" className="mt-4">
              {meta.readingTime}
            </Text>

            <article className="mt-6">
              <Post />
            </article>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
