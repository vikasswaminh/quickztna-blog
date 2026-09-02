import { getCollection, type CollectionEntry } from 'astro:content';

/** All non-draft posts (drafts hidden in production builds), newest first. */
export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) =>
    import.meta.env.PROD ? data.draft !== true : true,
  );
  return posts.sort((a, b) => {
    const dateA = a.data.publishedAt || (a.data as any).pubDate || new Date();
    const dateB = b.data.publishedAt || (b.data as any).pubDate || new Date();
    return new Date(dateB).valueOf() - new Date(dateA).valueOf();
  });
}

/** Rough reading time in minutes from raw markdown body. */
export function readingTime(body: string): number {
  if (!body) return 5;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
