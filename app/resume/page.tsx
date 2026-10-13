import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  Globe,
  Github,
  Linkedin,
  CheckCircle2,
  Award,
  Sparkles,
} from "lucide-react";
import {
  personalInfo,
  experienceData,
  educationData,
  skillsData,
} from "@/data/portfolio-data";
import { ResumeActions } from "@/components/resume/resume-actions";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Professional Resume & Experience",
  description:
    "Curriculum Vitae and work history of Alex Vance, Senior Full-Stack Engineer and Product Architect. Experience, education, and credentials.",
};

export default function ResumePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
          <div>
            <Badge variant="default" className="text-xs mb-2">
              Curriculum Vitae
            </Badge>
            <h1 className="text-3xl font-extrabold text-zinc-950 dark:text-white">
              Professional Resume
            </h1>
          </div>
          <ResumeActions />
        </div>

        {/* Resume Paper Container */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-md space-y-10 print:shadow-none print:border-none print:p-0">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                  {personalInfo.name}
                </h2>
                <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {personalInfo.title}
                </p>
              </div>

              <div className="text-xs text-zinc-500 dark:text-zinc-400 space-y-1 text-left sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-600 dark:text-zinc-400">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 inline-flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-zinc-300 dark:text-zinc-700">&bull;</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {personalInfo.statusBadge}
              </span>
            </div>

            {/* Executive Summary */}
            <div className="pt-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Executive Profile
              </h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Senior Full-Stack Engineer and Technical Architect with 8+ years of
                production experience designing, developing, and deploying resilient web
                applications. Expert in Next.js (App Router), TypeScript, Tailwind CSS,
                PostgreSQL, and cloud edge infrastructure. Proven track record of reducing
                system latency, shipping design systems adopted by cross-functional teams,
                and leading technical execution for high-growth SaaS startups.
              </p>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experienceData.map((job) => (
                <div key={job.id} className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                        {job.role}
                      </h4>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {job.company} &bull;{" "}
                        <span className="text-zinc-500 font-normal">
                          {job.location}
                        </span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {job.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 pt-1">
                    {job.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Proficiencies */}
          <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Technical Proficiencies
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                <span className="font-bold text-zinc-900 dark:text-white">
                  Frontend &amp; UI Architecture
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  React 18/19, Next.js App Router, TypeScript, Tailwind CSS, Design Systems, State Management (Zustand), Web Accessibility (WCAG 2.1 AA)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                <span className="font-bold text-zinc-900 dark:text-white">
                  Backend &amp; Data Layer
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Node.js, Express, PostgreSQL, Prisma ORM, Redis, REST APIs, GraphQL, WebSockets, Go (Golang)
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                <span className="font-bold text-zinc-900 dark:text-white">
                  DevOps &amp; Infrastructure
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Vercel Edge Runtime, AWS (S3, Lambda, ECS), Docker, CI/CD GitHub Actions, Terraform, Linux
                </p>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-1">
                <span className="font-bold text-zinc-900 dark:text-white">
                  Testing &amp; Tooling
                </span>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Jest, Vitest, Playwright, React Testing Library, ESLint, Git, Figma, Storybook
                </p>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-base font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                Education &amp; Credentials
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-1 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-sm text-zinc-900 dark:text-white">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-zinc-500">{edu.period}</span>
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                    {edu.institution} &bull; {edu.location}
                    {edu.honors && (
                      <span className="ml-2 text-emerald-600 dark:text-emerald-400">
                        ({edu.honors})
                      </span>
                    )}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customization Note */}
        <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/50 text-xs text-indigo-900 dark:text-indigo-300 print:hidden flex items-start gap-3">
          <Award className="w-5 h-5 flex-shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
          <div>
            <span className="font-bold">CV Customization Note:</span> Replace the placeholder PDF file at{" "}
            <code className="font-mono bg-indigo-100 dark:bg-indigo-900/60 px-1 py-0.5 rounded">public/alex-vance-resume.pdf</code> with your own PDF document, and update your personal details in{" "}
            <code className="font-mono bg-indigo-100 dark:bg-indigo-900/60 px-1 py-0.5 rounded">data/portfolio-data.ts</code>.
          </div>
        </div>
      </div>
    </div>
  );
}
