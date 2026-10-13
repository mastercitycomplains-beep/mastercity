import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  User,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { projectsData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }],
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === params.slug);
  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Title Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="default">{project.category}</Badge>
            {project.featured && (
              <Badge variant="success">Featured Case Study</Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-tight">
            {project.title}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Building2 className="w-3.5 h-3.5" />
              <span>Client</span>
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">
              {project.client}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <User className="w-3.5 h-3.5" />
              <span>Role</span>
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">
              {project.role}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>Duration</span>
            </div>
            <div className="text-sm font-bold text-zinc-900 dark:text-white">
              {project.duration}
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-xs text-zinc-500">Actions</div>
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 transition-colors"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Impact Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 dark:bg-emerald-950/30 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Measurable Business Impact</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Body: Overview, Challenge, Solution */}
        <div className="space-y-10 pt-4">
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Project Overview
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="rounded-2xl border border-red-200/60 dark:border-red-950/60 bg-red-50/30 dark:bg-red-950/20 p-6 space-y-3">
              <h3 className="text-lg font-bold text-red-900 dark:text-red-300">
                The Engineering Challenge
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section className="rounded-2xl border border-indigo-200/60 dark:border-indigo-950/60 bg-indigo-50/30 dark:bg-indigo-950/20 p-6 space-y-3">
              <h3 className="text-lg font-bold text-indigo-900 dark:text-indigo-300">
                The Architectural Solution
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </section>
          </div>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Key Features &amp; Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Tech Stack &amp; Infrastructure
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800/80 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery Mockups */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="space-y-4 pt-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Interface Preview Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Project Footer Bar */}
          <div className="pt-12 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/portfolio"
              className="text-xs font-semibold text-zinc-500 hover:text-indigo-600 transition-colors"
            >
              &larr; View all case studies
            </Link>

            {nextProject && (
              <Link
                href={`/portfolio/${nextProject.slug}`}
                className="group flex items-center gap-2 text-right"
              >
                <div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                    Next Project
                  </div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
