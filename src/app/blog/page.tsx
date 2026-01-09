import type { Metadata } from "next";
import Link from "next/link";
import { Title } from "tristanjockel/components/text";
import { getAllPostsMeta } from "tristanjockel/lib/posts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tristan Jockel - Blog",
    description: "My blog with all my posts.",
  } satisfies Metadata;
}

export default async function BlogDashboardPage() {
  const posts = await getAllPostsMeta();
  return (
    <main>
      <Title className="mb-4">My Blog Posts</Title>
      <ol>
        {posts.map((p) => (
          <li key={p.slug} className="mb-4">
            <Link href={`/blog/${p.slug}`}>
              <span className="text-current/60">
                {new Date(p.date).toLocaleDateString()} -{" "}
              </span>
              <span className="font-bold">{p.title}</span>: {p.description}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
