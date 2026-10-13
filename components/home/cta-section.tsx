import * as React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail, MessageSquare } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-950 to-zinc-950 text-white p-8 sm:p-12 lg:p-16 border border-indigo-800/40 shadow-2xl">
          {/* Decorative radial lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-indigo-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Available for New Projects &amp; Consulting</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to engineer your next breakthrough product?
            </h2>

            <p className="text-base sm:text-lg text-indigo-100/80 max-w-2xl mx-auto leading-relaxed">
              Whether you need to architect a greenfield SaaS product, accelerate an
              existing engineering roadmap, or elevate your design system, let&apos;s build
              something exceptional.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-zinc-950 hover:bg-zinc-100 shadow-xl font-bold"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-indigo-600" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 ml-1 text-zinc-950" />
              </Button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-300" />
                <span>{personalInfo.email}</span>
              </a>
            </div>

            <p className="text-xs text-indigo-300/70 pt-2">
              Typically replies within 24 business hours &bull; Strict NDA &bull; Free initial discovery session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
