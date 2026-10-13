import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  Palette,
  Rocket,
  Gauge,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { servicesData, faqData } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Engineering capabilities, engagement models, and transparent pricing placeholders for full-stack web development, design systems, and MVP delivery.",
};

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Palette,
  Rocket,
  Gauge,
};

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "We unpack your business goals, target audience, schema models, and technical requirements to create an immutable specification and milestone roadmap.",
  },
  {
    step: "02",
    title: "Design System & Prototyping",
    description:
      "Tokenizing typography, colors, and layout components in Figma and Tailwind CSS to validate user flows and accessibility before heavy backend coding.",
  },
  {
    step: "03",
    title: "Iterative Engineering & Testing",
    description:
      "Bi-weekly sprint demos, continuous Git commits, automated test coverage, and private staging preview environments on Vercel.",
  },
  {
    step: "04",
    title: "Production Launch & Support",
    description:
      "Zero-downtime DNS transition, SSL verification, SEO audit, analytics instrumentation, and a 30-day post-launch warranty period.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="default" className="text-xs">
            Services &amp; Capabilities
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            High-impact engineering{" "}
            <span className="gradient-text">tailored to your goals</span>.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            From architecture to production rollout, I help venture-backed founders
            and enterprise engineering leaders ship web applications that scale effortlessly.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName] || Layers;
            return (
              <div
                id={service.id}
                key={service.id}
                className="scroll-mt-32 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-sm hover:border-indigo-500/40 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Info & Features */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-zinc-400">
                          SERVICE 0{index + 1}
                        </span>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
                        What&apos;s Included:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-2">
                        Deliverables:
                      </h3>
                      <ul className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliv, i) => (
                          <li
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 font-medium"
                          >
                            {deliv}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Pricing & Timeline Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 p-6 sm:p-8 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                          {service.pricingTier.tierName}
                        </span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                            {service.pricingTier.startingAt}
                          </span>
                          <span className="text-xs text-zinc-500">
                            {service.pricingTier.period || "starting estimate"}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                          {service.pricingTier.description}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          <Clock className="w-4 h-4 text-indigo-500" />
                          <span>Estimated Timeline: {service.timeline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-700 dark:text-zinc-300">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <span>30-Day Post-Launch Warranty Included</span>
                        </div>
                      </div>

                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        size="md"
                        className="w-full"
                      >
                        <span>Inquire About This Service</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Engineering Process */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              How we take your vision to market.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              A transparent, communicative engineering framework designed to minimize
              risk and maximize delivery speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-3 relative group hover:border-indigo-500/40 transition-colors shadow-sm"
              >
                <div className="text-3xl font-mono font-black text-indigo-600 dark:text-indigo-400/80">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Common questions about engagement models, payments, and deliverables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 space-y-2"
              >
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="text-center p-12 rounded-3xl bg-zinc-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Have a custom requirement or need an engineering retainer?
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            I offer custom advisory retainers and fractional staff engineer partnerships.
            Let&apos;s evaluate your roadmap together.
          </p>
          <div className="pt-2">
            <Button href="/contact" size="lg" className="bg-white text-zinc-950 hover:bg-zinc-100 font-bold">
              <span>Book an Engineering Discovery Call</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
