import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { projectsData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Proven results delivered for world-class products.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              A curated selection of recent high-impact full-stack and frontend systems
              engineered for rapid scale, high conversions, and reliability.
            </p>
          </div>

          <div>
            <Button href="/portfolio" variant="outline" size="md">
              <span>View All Projects ({projectsData.length})</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3">
                  <Badge variant="default" className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-900 dark:text-white border-none shadow-sm">
                    {project.category}
                  </Badge>
                </div>

                {project.metrics && project.metrics[0] && (
                  <div className="absolute bottom-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 backdrop-blur-md text-emerald-300 text-[11px] font-semibold">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                    Client: {project.client} &bull; {project.role}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    <Link href={`/portfolio/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack pills */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          aria-label="View source on GitHub"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                          aria-label="Open live website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
