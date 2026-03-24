import Image from "next/image";
import Link from "next/link";
import type { WPPost } from "../lib/wordpress";
import { getFeaturedImage, getAuthorName, formatDate } from "../lib/wordpress";

export default function PostCard({ post }: { post: WPPost }) {
  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const date = formatDate(post.date);

  return (
    <article className="flex flex-col">
      <Link href={`/${post.slug}`} className="block overflow-hidden mb-4">
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
        <Link href={`/${post.slug}`} className="hover:text-brand-red transition-colors">
          {post.title.rendered}
        </Link>
      </h3>
      <Link
        href={`/${post.slug}`}
        className="text-brand-red font-medium text-sm border-b-2 border-brand-red pb-2 w-fit hover:text-brand-dark hover:border-brand-dark transition-colors mt-auto"
      >
        Read More
      </Link>
    </article>
  );
}
