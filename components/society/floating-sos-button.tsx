"use client";

import * as React from "react";
import { AlertTriangle, PhoneCall, FileText } from "lucide-react";
import { EmergencySosModal } from "@/components/society/emergency-sos-modal";
import Link from "next/link";

export function FloatingSosButton() {
  const [isSosOpen, setIsSosOpen] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Quick Complaint Float Shortcut */}
        <Link
          href="/complaints"
          className="group flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-900/30 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 border border-emerald-500/40"
          title="Lodge or Track Society Complaint"
        >
          <FileText className="w-4 h-4 text-emerald-200" />
          <span className="hidden sm:inline">Lodge Complaint</span>
        </Link>

        {/* SOS Emergency Floating Button */}
        <button
          onClick={() => setIsSosOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 text-white text-xs sm:text-sm font-extrabold shadow-2xl shadow-red-600/40 transition-all hover:scale-105 active:scale-95 border-2 border-white/20 animate-pulse"
          aria-label="Open 24/7 Society Emergency Helplines"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
          <AlertTriangle className="w-4 h-4 text-white" />
          <span>24/7 SOS Helpline</span>
        </button>
      </div>

      <EmergencySosModal isOpen={isSosOpen} onClose={() => setIsSosOpen(false)} />
    </>
  );
}
