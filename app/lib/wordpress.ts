const WP_API = process.env.NEXT_PUBLIC_WP_API_URL ?? "https://blog.heidydelacruz.com/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: { width: number; height: number };
    }>;
    author?: Array<{ name: string }>;
  };
};

export async function getPosts(perPage = 6, page = 1): Promise<WPPost[]> {
  const res = await fetch(
    `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&status=publish`,
    { next: { revalidate: 604800 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getTotalPages(perPage = 6): Promise<number> {
  const res = await fetch(
    `${WP_API}/posts?per_page=${perPage}&status=publish`,
    { next: { revalidate: 604800 } }
  );
  if (!res.ok) return 1;
  return Number(res.headers.get("X-WP-TotalPages") ?? 1);
}

export async function getAllSlugs(): Promise<string[]> {
  const res = await fetch(
    `${WP_API}/posts?per_page=100&status=publish&_fields=slug`,
    { next: { revalidate: 604800 } }
  );
  if (!res.ok) return [];
  const posts: Array<{ slug: string }> = await res.json();
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API}/posts?_embed&slug=${slug}&status=publish`,
    { next: { revalidate: 604800 } }
  );
  if (!res.ok) return null;
  const posts: WPPost[] = await res.json();
  return posts[0] ?? null;
}

export function getFeaturedImage(post: WPPost): string {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    "https://placehold.co/800x600/e5e5e5/666666?text=Blog+Post"
  );
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name ?? "Heidy De La Cruz";
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
