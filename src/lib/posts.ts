import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

const POSTS_DIR = path.join(process.cwd(), "src", "posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"))
    .map((f) => f.replace(/\.(tsx|ts)$/i, ""));
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = getPostSlugs();
  const metas = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await import(`../posts/${slug}.tsx`);
      const meta = mod.meta as Partial<PostMeta> | undefined;

      if (!meta?.date)
        throw new Error(`Post "${slug}" is missing a date in its meta.`);

      return {
        slug,
        title: slug,
        date: meta?.date,
        ...meta,
      } satisfies PostMeta;
    })
  );

  return metas.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug: string): Promise<{
  Component: ComponentType;
  meta: PostMeta;
} | null> {
  try {
    const mod = await import(`../posts/${slug}.tsx`);
    const Component = (mod.default ?? (() => null)) as ComponentType;
    const meta = { slug, title: slug, ...(mod.meta ?? {}) } as PostMeta;
    return { Component, meta };
  } catch (err: unknown) {
    const e = err as Record<string, unknown>;
    const code = typeof e?.code === "string" ? (e.code as string) : undefined;
    if (code === "MODULE_NOT_FOUND" || code === "ERR_MODULE_NOT_FOUND")
      return null;
    throw err;
  }
}
