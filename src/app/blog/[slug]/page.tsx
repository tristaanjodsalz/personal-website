import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  TextExtraMuted,
  TextMuted,
  Title,
} from "tristanjockel/components/text";
import { getAllPostsMeta, getPostBySlug } from "tristanjockel/lib/posts";

export async function generateStaticParams() {
  const metas = await getAllPostsMeta();
  return metas.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  const { meta } = post;
  return {
    title: `Tristan Jockel - ${meta.title}`,
    description: meta.description,
  } satisfies Metadata;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const { Component, meta } = post;
  return (
    <main>
      <article>
        <header className="mb-8">
          <Title>{meta.title}</Title>

          {meta.description ? <TextMuted>{meta.description}</TextMuted> : null}

          <TextExtraMuted className="italic">
            {new Date(meta.date).toLocaleDateString()}
          </TextExtraMuted>
        </header>
        <Component />
      </article>
    </main>
  );
}
