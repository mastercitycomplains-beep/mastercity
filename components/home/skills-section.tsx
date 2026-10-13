import * as React from "react";
import { skillsData } from "@/data/portfolio-data";
import {
  Code2,
  Layers,
  FileCode2,
  Palette,
  Cpu,
  Sparkles,
  Server,
  Database,
  Globe,
  Zap,
  Terminal,
  ShieldCheck,
  Cloud,
  ServerCog,
  Boxes,
  GitBranch,
  Workflow,
  LayoutGrid,
  Eye,
  Gauge,
  Search,
} from "lucide-react";

// Icon mapping helper
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Layers,
  FileCode2,
  Palette,
  Cpu,
  Sparkles,
  Server,
  Database,
  Globe,
  Zap,
  Terminal,
  ShieldCheck,
  Cloud,
  ServerCog,
  Boxes,
  GitBranch,
  Workflow,
  LayoutGrid,
  Eye,
  Gauge,
  Search,
};

export function SkillsSection() {
  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-950/50 border-y border-zinc-200/80 dark:border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Engineered for reliability, built for scale.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            A comprehensive overview of technologies, frameworks, and architectural
            standards I leverage daily to ship high-impact digital products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-medium text-zinc-800 dark:text-zinc-200">
                          <Icon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
                          <span className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono">
                            {skill.experience}
                          </span>
                          <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
