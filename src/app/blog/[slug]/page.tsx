import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
          <p className="text-current/60 text-sm">
            {new Date(meta.date).toLocaleDateString()}
          </p>

          <h1 className="font-bold text-3xl">{meta.title}</h1>

          {meta.description ? (
            <p className="text-current/80">{meta.description}</p>
          ) : null}
        </header>
        <Component />
      </article>
    </main>
  );
}
