import type { Metadata } from "next";
import { blogPostsData } from "@/data/portfolio-data";
import { BlogSearch } from "@/components/blog/blog-search";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Engineering Blog & Insights",
  description:
    "Technical articles, deep dives into Next.js App Router, Tailwind CSS design systems, Web Performance, and cloud deployments.",
};

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="default" className="text-xs">
            Technical Writing &amp; Thoughts
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Writings on <span className="gradient-text">architecture, code</span> &amp; design.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            In-depth guides, architectural patterns, and real-world learnings gathered
            from scaling web applications and high-throughput SaaS platforms.
          </p>
        </div>

        {/* Interactive Search & List */}
        <BlogSearch initialPosts={blogPostsData} />
      </div>
    </div>
  );
}
