import Link from "next/link";
import { getAllPostsMeta } from "tristanjockel/lib/posts";

export default async function BlogDashboardPage() {
  const posts = await getAllPostsMeta();
  return (
    <main>
      <h1 className="mb-4 text-2xl">My Blog Posts</h1>
      <ol>
        {posts.map((p) => (
          <li key={p.slug}>
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
