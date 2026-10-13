"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Droplets,
  Star,
  FileText,
  Search,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { societyOverview } from "@/data/society-data";

export function SocietyHero() {
  const [quickTrackId, setQuickTrackId] = React.useState("");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative gradient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-emerald-600/20 via-teal-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-300/60 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-950/40 backdrop-blur-sm text-xs font-semibold text-emerald-800 dark:text-emerald-300 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{societyOverview.name}</span>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-zinc-600 dark:text-zinc-400 font-normal">
                Gujranwala, Punjab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              The Gold Standard of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800 dark:from-emerald-400 dark:via-teal-300 dark:to-emerald-500">
                Modern &amp; Secure Living
              </span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience Pakistan&apos;s prestigious master-planned community. Complete with{" "}
              <strong className="text-zinc-900 dark:text-white font-semibold">100% underground electricity</strong>, 
              single-pole theme parks, 24/7 paramilitary security, and an automated{" "}
              <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">
                Complaint Resolution &amp; Resident Care System
              </strong>.
            </p>

            {/* Quick Track Input directly on Hero */}
            <div className="pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-2 rounded-2xl bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-md flex items-center gap-2">
                <Search className="w-5 h-5 text-zinc-400 ml-2 shrink-0" />
                <input
                  type="text"
                  value={quickTrackId}
                  onChange={(e) => setQuickTrackId(e.target.value)}
                  placeholder="Enter Complaint ID (e.g. MC-CMP-2026-9041)..."
                  className="flex-1 bg-transparent border-none text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
                />
                <Link
                  href={`/complaints?track=${encodeURIComponent(quickTrackId)}`}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors shrink-0 flex items-center gap-1"
                >
                  <span>Track Issue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Main Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Link
                href="/complaints"
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-sm shadow-xl shadow-emerald-600/20 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Lodge Society Complaint</span>
              </Link>

              <Link
                href="/reviews"
                className="py-3 px-5 rounded-2xl bg-white dark:bg-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 font-bold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>Resident Reviews (4.9★)</span>
              </Link>
            </div>

            {/* Key Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Underground Grid</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>99.4% Resolution SLA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>24/7 Gated QRF Patrol</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Society Operations Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 opacity-20 blur-xl" />
              <div className="relative rounded-3xl border border-zinc-200/90 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-xl overflow-hidden p-6 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-base border border-emerald-200 dark:border-emerald-800">
                      MC
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm text-zinc-900 dark:text-white">
                        Society Operations Hub
                      </h3>
                      <p className="text-[11px] text-zinc-500">
                        24/7 Command &amp; Resident Care Desk
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    ONLINE
                  </span>
                </div>

                {/* Operations Checklist */}
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-zinc-100">
                          Underground Power Grid
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          Zero Load-Shedding • Auto Backup
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                      100%
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Droplets className="w-4 h-4 text-cyan-500" />
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-zinc-100">
                          RO Filtration Plants
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          All 8 Block Plants Certified
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-cyan-600 dark:text-cyan-400 text-xs">
                      45 PSI
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <div>
                        <div className="font-bold text-zinc-900 dark:text-zinc-100">
                          Security &amp; AI Surveillance
                        </div>
                        <div className="text-[11px] text-zinc-500">
                          450+ Cameras • 18 Patrol Squads
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs">
                      Active
                    </span>
                  </div>
                </div>

                {/* Society Helplines Box */}
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="text-[11px] text-zinc-500 block">
                      Emergency Control Hotline:
                    </span>
                    <a
                      href={`tel:${societyOverview.helplinePhone}`}
                      className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      {societyOverview.helplinePhone}
                    </a>
                  </div>

                  <Link
                    href="/complaints"
                    className="px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white font-semibold text-xs transition-colors"
                  >
                    Complaint Desk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm">
          <div className="text-center sm:text-left sm:pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight">
              18,500+
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              Happy Resident Families
            </div>
          </div>
          <div className="text-center sm:text-left sm:pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              99.4%
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              Complaint Resolution SLA
            </div>
          </div>
          <div className="text-center sm:text-left sm:pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-500 tracking-tight">
              4.9 / 5.0
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              Average Resident Rating
            </div>
          </div>
          <div className="text-center sm:text-left sm:pl-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">
              &lt; 4 Hours
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
              Average Field Response Time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
