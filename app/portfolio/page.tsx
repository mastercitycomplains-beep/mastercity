import type { Metadata } from "next";
import { projectsData } from "@/data/portfolio-data";
import { ProjectFilter } from "@/components/portfolio/project-filter";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore full-stack, frontend, and design systems projects delivered by Alex Vance. Featuring architectural overviews, live demos, and metrics.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="default" className="text-xs">
            Portfolio Showcase
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Case studies &amp; <span className="gradient-text">shipped software</span>.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A comprehensive look at web platforms, SaaS applications, and UI systems
            I have architected and deployed to production. Filter by category or search by
            technology below.
          </p>
        </div>

        {/* Interactive Filter Grid */}
        <ProjectFilter initialProjects={projectsData} />
      </div>
    </div>
  );
}
