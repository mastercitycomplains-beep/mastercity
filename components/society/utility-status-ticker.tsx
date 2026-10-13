"use client";

import * as React from "react";
import { Zap, Droplets, ShieldCheck, Truck, AlertTriangle, PhoneCall, ChevronRight } from "lucide-react";
import { liveUtilityStatus, societyOverview } from "@/data/society-data";
import Link from "next/link";

interface UtilityStatusTickerProps {
  onOpenSos?: () => void;
}

export function UtilityStatusTicker({ onOpenSos }: UtilityStatusTickerProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % liveUtilityStatus.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-zinc-950 to-emerald-950 text-white border-b border-emerald-800/40 text-xs py-2 px-4 shadow-sm relative overflow-hidden">
      {/* Decorative emerald subtle glow */}
      <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 relative z-10">
        {/* Left: Live Society Status Indicator */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wider uppercase text-[11px] text-emerald-400 flex items-center gap-1">
              Live Society Operations
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-zinc-300 text-[11px] border-l border-emerald-800/60 pl-4">
            <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Grid: 100% Active</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <Droplets className="w-3.5 h-3.5 text-cyan-400" />
              <span>RO Plants: 45 PSI</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Security: 18 Patrol Squads</span>
            </div>
          </div>
        </div>

        {/* Center: Dynamic Carousel Ticker for mobile/tablets */}
        <div className="flex items-center gap-2 text-zinc-200 text-xs font-medium py-0.5 px-3 rounded-full bg-emerald-900/30 border border-emerald-800/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-300 font-semibold">
            {liveUtilityStatus[activeTab].label}:
          </span>
          <span className="text-zinc-200 text-[11px]">
            {liveUtilityStatus[activeTab].status}
          </span>
        </div>

        {/* Right: Emergency Helpline Quick Connect */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          <span className="text-zinc-400 text-[11px] hidden sm:inline">24/7 Control Room:</span>
          <a
            href={`tel:${societyOverview.helplinePhone}`}
            className="font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 text-[11px]"
          >
            <PhoneCall className="w-3 h-3 text-amber-400 animate-pulse" />
            {societyOverview.helplinePhone}
          </a>

          {onOpenSos && (
            <button
              onClick={onOpenSos}
              className="ml-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/90 hover:bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-red-900/50"
            >
              <AlertTriangle className="w-2.5 h-2.5" />
              <span>SOS Helpline</span>
            </button>
          )}

          <Link
            href="/complaints"
            className="inline-flex items-center gap-1 text-[11px] text-emerald-300 hover:text-white transition-colors font-medium border-l border-emerald-800/60 pl-2.5"
          >
            <span>Lodge Complaint</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
