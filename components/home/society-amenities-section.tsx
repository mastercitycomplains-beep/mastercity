"use client";

import * as React from "react";
import Link from "next/link";
import {
  Zap,
  ShieldCheck,
  Sparkles,
  Droplets,
  Trees,
  Building,
  HeartHandshake,
  Activity,
  ArrowRight,
} from "lucide-react";

const AMENITIES = [
  {
    icon: Zap,
    title: "100% Underground Electrification",
    tagline: "Zero Load-Shedding Society",
    description:
      "Fully underground high-tension power cables with automated heavy diesel generators ensuring 24/7 continuous electricity without wires dangling.",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
  },
  {
    icon: ShieldCheck,
    title: "Paramilitary Security & AI CCTV",
    tagline: "24/7 Gated Community",
    description:
      "Multi-tier security checkpoint barriers, RFID resident windscreen passes, 450+ HD CCTV night-vision cameras, and 18 rapid response mobile squads.",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
  },
  {
    icon: Sparkles,
    title: "Single-Pole Theme Park & Fountains",
    tagline: "International Amusement Hub",
    description:
      "Pakistan's first single-pole amusement rides, roller-coaster experiences, and synchronized musical dancing fountains for family entertainment.",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800",
  },
  {
    icon: Droplets,
    title: "Pure RO Water Filtration Plants",
    tagline: "Clean Mineral Quality Drinking Water",
    description:
      "Dedicated multi-stage reverse osmosis mineral water plants deployed across every sector providing certified, laboratory-tested drinking water.",
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800",
  },
  {
    icon: Trees,
    title: "Grand Jamia Mosque & Green Parks",
    tagline: "Serene Spiritual & Natural Haven",
    description:
      "Magnificent architectural Grand Mosque accommodating thousands of worshippers, along with wide landscaped botanical parks and jogging tracks.",
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800",
  },
  {
    icon: Activity,
    title: "Hospital, Sports Complex & Broadway",
    tagline: "Complete Urban Ecosystem",
    description:
      "Modern healthcare hospital, multi-sport stadiums, Olympic swimming pool, and the vibrant 150-ft wide Commercial Broadway with top shopping brands.",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800",
  },
];

export function SocietyAmenitiesSection() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/70 border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800 uppercase tracking-wider">
            Signature Society Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            World-Class Infrastructure &amp; Amenities
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Engineered from inception to provide Pakistani families and overseas investors an unparalleled lifestyle of comfort, security, and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl ${item.bg} border shrink-0`}>
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Facility 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                      {item.tagline}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-bold text-zinc-700 dark:text-zinc-300">
                  <span>Available in all Sectors</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Verified ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
