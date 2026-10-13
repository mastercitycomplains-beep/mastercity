import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Sparkles,
  Github,
  Linkedin,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/60 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/40 backdrop-blur-sm text-xs font-medium text-indigo-700 dark:text-indigo-300 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-zinc-600 dark:text-zinc-400 font-normal">
                {personalInfo.location}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              Building scalable <br className="hidden sm:inline" />
              <span className="gradient-text">full-stack web apps</span>{" "}
              with precision.
            </h1>

            {/* Intro paragraph */}
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.tagline}
            </p>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button href="/portfolio" size="lg" className="shadow-indigo-500/20 shadow-lg">
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                <Sparkles className="w-4 h-4 mr-1 text-indigo-500" />
                <span>Book a Consultation</span>
              </Button>
              <Button href="/resume" variant="ghost" size="lg">
                <FileText className="w-4 h-4 mr-1 text-zinc-500" />
                <span>View Resume</span>
              </Button>
            </div>

            {/* Key Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Production Next.js 14 / TypeScript</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Sub-second Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Clean Architecture &amp; Tests</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 opacity-20 blur-xl"></div>
              <div className="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/80 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-zinc-500 dark:text-zinc-400 text-[11px] font-sans font-medium flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-500" />
                    alex-vance.config.ts
                  </span>
                  <span className="text-[10px] text-zinc-400">TypeScript</span>
                </div>

                {/* Code body */}
                <div className="p-5 space-y-2 text-zinc-700 dark:text-zinc-300 leading-relaxed overflow-x-auto">
                  <div className="text-zinc-400 italic">{"// Engineering Profile"}</div>
                  <div>
                    <span className="text-violet-600 dark:text-violet-400 font-semibold">
                      const
                    </span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">engineer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;{personalInfo.name}&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">role:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Staff Full-Stack Architect&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">experienceYears:</span>{" "}
                    <span className="text-amber-600 dark:text-amber-400">8</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">coreStack:</span> [
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;TypeScript&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Tailwind&quot;</span>,{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;PostgreSQL&quot;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">status:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Open for projects &amp; advisory&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-500">focus:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">&quot;Performance, DX &amp; Scalability&quot;</span>
                  </div>
                  <div>{"}"};</div>

                  <div className="pt-2 text-zinc-400 italic">{"// Quick Action"}</div>
                  <div className="text-indigo-600 dark:text-indigo-400">
                    await engineer.launchProject(&#123; impact: &quot;high&quot; &#125;);
                  </div>
                </div>

                {/* Terminal Footer with Live stats */}
                <div className="p-3 bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 text-center">
                  <div>
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">8+ Yrs</div>
                    <div className="text-[10px] text-zinc-500">Experience</div>
                  </div>
                  <div className="border-x border-zinc-200 dark:border-zinc-800">
                    <div className="text-xs font-bold text-zinc-900 dark:text-white">45+</div>
                    <div className="text-[10px] text-zinc-500">Shipped Apps</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400">99.9%</div>
                    <div className="text-[10px] text-zinc-500">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-850 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm">
          {personalInfo.stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left sm:pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
