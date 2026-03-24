"use client";

import { useState } from "react";
import type { WPPost } from "../lib/wordpress";
import PostCard from "../components/PostCard";

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
