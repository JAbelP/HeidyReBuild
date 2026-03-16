import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPostBySlug, getFeaturedImage, getAuthorName, formatDate, getAllSlugs } from "../lib/wordpress";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title.rendered} | Heidy De La Cruz`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-brand-red hover:underline">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <>
      <Navbar />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-gray-100">
        <Image
          src={image}
          alt={post.title.rendered}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Article */}
      <article className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-red text-sm font-medium mb-8 hover:text-brand-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex gap-4 text-sm text-gray-500 mb-4">
            <span>By {author}</span>
            <span>{date}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
            {post.title.rendered}
          </h1>

          {/* Content */}
          <div
            className="prose prose-lg prose-headings:font-serif prose-headings:font-bold prose-a:text-brand-red max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>

      <Footer />
    </>
  );
}
