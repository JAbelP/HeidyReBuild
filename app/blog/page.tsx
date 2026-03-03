import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPosts, getTotalPages, getFeaturedImage, getAuthorName, formatDate, type WPPost } from "../lib/wordpress";
import BlogPostsGrid from "./BlogPostsGrid";

export const metadata: Metadata = {
  title: "Blog | Heidy De La Cruz – Podcast Coach",
  description: "Read the latest articles on podcasting, storytelling, and content strategy from Heidy De La Cruz.",
};

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

export default async function BlogPage() {
  const [latestPosts, allPosts, totalPages] = await Promise.all([
    getPosts(4, 1),
    getPosts(6, 1),
    getTotalPages(6),
  ]);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="w-20 h-1 bg-brand-red mb-6"></div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold">
            My Latest Blog Posts
          </h1>
        </div>
      </section>

      {/* Two-Column: Posts + Sidebar */}
      <section className="pb-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT - Latest 4 posts in 2-col grid */}
            <div>
              {latestPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                  {latestPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                  {[1, 2, 3, 4].map((i) => (
                    <article key={i} className="flex flex-col">
                      <div className="relative h-[350px] w-full overflow-hidden mb-4 bg-gray-100">
                        <Image
                          src={`https://placehold.co/800x1200/e5e5e5/666666?text=Blog+Post+${i}`}
                          alt={`Blog post ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-4 text-sm text-gray-600 mb-3">
                        <span>By Heidy De La Cruz</span>
                        <span>Feb {i * 7}, 2026</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 leading-snug">
                        Blog Post Title Goes Here
                      </h3>
                      <span className="text-brand-red font-medium text-sm border-b-2 border-brand-red pb-2 w-fit mt-auto">
                        Read More
                      </span>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT - Sidebar */}
            <div className="space-y-8">
              <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                <Image
                  src="/images/blog-sidebar.png"
                  alt="The Podcasters Checklist"
                  width={800}
                  height={720}
                  className="w-full h-auto"
                />
              </div>

              <div className="space-y-3">
                <p className="text-lg text-gray-800 font-medium">
                  Hi I&apos;m Heidy podcast host, author and coach for podcasters.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Ready to break the internet without breaking a sweat? Let&apos;s turn your digital presence into a podcasting sensation!
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-brand-red text-white px-6 py-3 rounded-md hover:bg-brand-dark transition-colors font-medium mt-2"
                >
                  Work with Me
                </Link>
              </div>

              <div className="bg-brand-black text-white p-12">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-3">
                  Join &amp; Subscribe to My Newsletter for{" "}
                  <em>Exciting Content</em>
                </h3>
                <p className="text-gray-300 mb-6">I&apos;m all about helping you win.</p>
                <form className="flex flex-col sm:flex-row gap-0">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-transparent border border-gray-500 text-white placeholder-gray-500 px-6 py-4 focus:outline-none focus:border-brand-red"
                  />
                  <button
                    type="submit"
                    className="bg-brand-red text-white px-8 py-4 font-medium hover:bg-brand-dark transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Blog & Article */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-12">
            All Blog &amp; Article
          </h2>

          {allPosts.length > 0 ? (
            <BlogPostsGrid initialPosts={allPosts} totalPages={totalPages} />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <article key={i} className="flex flex-col">
                  <div className="relative h-[350px] w-full overflow-hidden mb-4 bg-gray-200">
                    <Image
                      src={`https://placehold.co/800x1200/e5e5e5/666666?text=Article+${i}`}
                      alt={`Article ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-3">
                    <span>By Heidy De La Cruz</span>
                    <span>Jan {i * 4}, 2026</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-4 leading-snug">
                    Article Title Goes Here
                  </h3>
                  <span className="text-brand-red font-medium text-sm border-b-2 border-brand-red pb-2 w-fit mt-auto">
                    Read More
                  </span>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
