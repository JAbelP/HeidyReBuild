"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "../lib/wordpress";
import { getFeaturedImage, getAuthorName, formatDate } from "../lib/wordpress";

function PostCard({ post }: { post: WPPost }) {
  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <article className="flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden mb-4">
        <div className="relative h-[350px] w-full overflow-hidden">
          <Image
            src={image}
            alt={post.title.rendered}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="flex gap-4 text-sm text-gray-600 mb-3">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 leading-snug">
        <Link href={`/blog/${post.slug}`} className="hover:text-brand-red transition-colors">
          {post.title.rendered}
        </Link>
      </h3>
      <Link
        href={`/blog/${post.slug}`}
        className="text-brand-red font-medium text-sm border-b-2 border-brand-red pb-2 w-fit hover:text-brand-dark hover:border-brand-dark transition-colors mt-auto"
      >
        Read More
      </Link>
    </article>
  );
}

export default function BlogPostsGrid({
  initialPosts,
  totalPages,
}: {
  initialPosts: WPPost[];
  totalPages: number;
}) {
  const [posts, setPosts] = useState<WPPost[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadMore() {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const res = await fetch(
        `/api/wp/posts?_embed&per_page=6&page=${nextPage}&status=publish`
      );
      if (res.ok) {
        const contentType = res.headers.get("Content-Type") ?? "";
        if (!contentType.includes("json")) return;
        const newPosts: WPPost[] = await res.json();
        setPosts((prev) => [...prev, ...newPosts]);
        setPage(nextPage);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {page < totalPages && (
        <div className="text-center mt-16">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-brand-red text-white px-8 py-4 font-medium hover:bg-brand-dark transition-colors disabled:opacity-60"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
}
