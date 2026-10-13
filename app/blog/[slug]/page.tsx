import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Tag,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { blogPostsData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const currentIndex = blogPostsData.findIndex((p) => p.slug === params.slug);
  const nextPost = blogPostsData[(currentIndex + 1) % blogPostsData.length];

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="default">{post.category}</Badge>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.2]">
            {post.title}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Strip */}
          <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-900 dark:text-white">
                {post.author.name}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                {post.author.role}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="my-8 p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60 space-y-2">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-bold text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Key Architectural Takeaway</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed">
              Prioritizing typed interfaces, server rendering, and automated regression
              testing allows small engineering teams to punch significantly above their weight
              without sacrificing code maintainability.
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-zinc-400 mr-1" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Next Article Recommendation */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-xs font-semibold text-zinc-500 hover:text-indigo-600 transition-colors"
          >
            &larr; View all articles
          </Link>

          {nextPost && (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center gap-2 text-right"
            >
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Read Next
                </div>
                <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors max-w-sm truncate">
                  {nextPost.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
