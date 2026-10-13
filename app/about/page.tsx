import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Download,
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Layers,
  MapPin,
  CheckCircle,
} from "lucide-react";
import {
  personalInfo,
  experienceData,
  educationData,
  skillsData,
} from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About CEO & Master City Housing Scheme",
  description:
    "Vision, leadership, infrastructure achievements, and urban philosophy of Chaudhry Ghulam Mustafa, Chairman & CEO of Master City Housing Scheme Gujranwala.",
};

const philosophies = [
  {
    icon: Zap,
    title: "100% Underground Electrification",
    description:
      "Eliminating the hazards and ugliness of overhead wires, delivering dual grid power with instant automated diesel generator backups for complete peace of mind.",
  },
  {
    icon: Shield,
    title: "Paramilitary Security & AI Surveillance",
    description:
      "A safe sanctuary for families and overseas Pakistanis with 24/7 RFID gated entrances, rapid response mobile squads, and comprehensive CCTV monitoring.",
  },
  {
    icon: Layers,
    title: "Integrated Municipal Care",
    description:
      "Digital grievance redressal with under 4-hour SLA response. Whether water booster, sanitation, or streetlights, municipal crews are deployed instantly.",
  },
  {
    icon: Code2,
    title: "Master-Planned Urban Elegance",
    description:
      "Wide 150-ft central boulevards, single-pole amusement parks, dancing musical fountains, and lavish green belts designed to European community standards.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="default" className="text-xs">
              About Alex Vance
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              Architecting software with{" "}
              <span className="gradient-text">purpose, empathy, and craft</span>.
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am a Senior Full-Stack Engineer and Product Architect based in San
              Francisco with over 8 years of experience building mission-critical web
              applications for high-growth startups and established software companies.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/resume" size="md">
                <Download className="w-4 h-4 mr-2" />
                <span>View Full Resume</span>
              </Button>
              <Button href="/contact" variant="outline" size="md">
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Profile Photo & Quick Details */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-3 shadow-xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {personalInfo.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extended Biography */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            My Journey &amp; Engineering Philosophy
          </h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">
            {personalInfo.extendedBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Guiding Principles Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Core Tenets
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Principles that guide my code.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-3 shadow-sm hover:border-indigo-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Professional Experience
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                A track record of engineering leadership and high-stakes execution.
              </p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-zinc-200 dark:before:bg-zinc-800 pl-4 sm:pl-0">
            {experienceData.map((job) => (
              <div
                key={job.id}
                className="relative sm:pl-14 group"
              >
                {/* Dot */}
                <div className="hidden sm:block absolute left-3.5 top-6 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-zinc-900 bg-indigo-600 shadow" />

                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm group-hover:border-indigo-500/40 transition-colors space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                        {job.role}
                      </h3>
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {job.company} &bull;{" "}
                        <span className="text-zinc-500 dark:text-zinc-400 font-normal">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{job.period}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
                      {job.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {job.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600 text-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Education &amp; Credentials
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Formal education, degrees, and verified cloud certifications.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{edu.period}</Badge>
                  {edu.honors && (
                    <Badge variant="success">{edu.honors}</Badge>
                  )}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {edu.degree}
                </h3>
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.institution} &bull; {edu.location}
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
