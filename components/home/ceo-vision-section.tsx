"use client";

import * as React from "react";
import Link from "next/link";
import {
  Quote,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { societyOverview } from "@/data/society-data";

export function CeoVisionSection() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-emerald-950 via-zinc-900 to-zinc-950 border border-emerald-500/30 text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* CEO Profile Image / Badge */}
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="relative inline-block mx-auto lg:mx-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-amber-400/50 shadow-2xl mx-auto">
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=80"
                    alt="Chaudhry Ghulam Mustafa - CEO Master City"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-500 text-zinc-950 text-xs font-black shadow-md whitespace-nowrap">
                  CHAIRMAN &amp; CEO
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-xl font-extrabold text-white">
                  {societyOverview.ceoName}
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {societyOverview.ceoTitle}
                </p>
                <div className="text-[11px] text-zinc-400 mt-1 flex items-center justify-center lg:justify-start gap-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Gujranwala, Pakistan</span>
                </div>
              </div>
            </div>

            {/* CEO Quote & Commitment */}
            <div className="lg:col-span-8 space-y-5">
              <Quote className="w-10 h-10 text-emerald-400/40" />

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                &ldquo;Every resident of Master City is family. Our commitment is total transparency, 100% uninterrupted power, and swift grievance resolution.&rdquo;
              </h2>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                When we laid the foundation of Master City Housing Scheme, our vision was to create more than just plots; we wanted to pioneer an international urban benchmark where families never face load-shedding, fear for safety, or run behind government departments for basic municipal services. Our digital complaint desk and 24/7 field crews ensure your peace of mind is permanent.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Zero Load-Shedding</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Dual grid feeds &amp; auto generators.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Swift Complaint SLA</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Municipal teams on site in &lt; 2-4 hours.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div className="font-bold text-teal-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Overseas Standard</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    NOC-approved luxury layout.
                  </p>
                </div>
              </div>

              {/* Direct Connect */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1"
                >
                  <span>Learn More About Vision</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`tel:${societyOverview.helplinePhone}`}
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-colors flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Society Secretariat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
