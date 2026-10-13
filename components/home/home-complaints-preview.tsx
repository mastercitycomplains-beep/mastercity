"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
  PhoneCall,
  UserCheck,
  Wrench,
} from "lucide-react";
import { initialComplaints, societyOverview } from "@/data/society-data";

export function HomeComplaintsPreview() {
  const [trackInput, setTrackInput] = React.useState("");
  const [quickResult, setQuickResult] = React.useState<(typeof initialComplaints)[0] | null>(null);
  const [searched, setSearched] = React.useState(false);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const clean = trackInput.trim().toUpperCase();
    const found = initialComplaints.find(
      (c) =>
        c.trackingNumber.toUpperCase().includes(clean) ||
        c.phone.replace(/[^0-9]/g, "").includes(clean.replace(/[^0-9]/g, ""))
    );
    setQuickResult(found || null);
  };

  return (
    <section className="py-20 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Transparent Municipal Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Complaint Management &amp; Tracking Portal
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light">
              We hold ourselves accountable to every resident. Submit municipal, electrical, security, or sanitation issues and track them in real time until complete resolution.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/complaints"
              className="py-2.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-1.5"
            >
              <span>Open Full Complaint Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Tracking Tool */}
          <div className="lg:col-span-5 bg-zinc-50 dark:bg-zinc-850/70 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 space-y-5">
            <div>
              <h3 className="font-bold text-base text-zinc-900 dark:text-white flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Instant Ticket Status Checker</span>
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Enter your Tracking ID or phone number to check live field officer progress.
              </p>
            </div>

            <form onSubmit={handleQuickTrack} className="space-y-3">
              <input
                type="text"
                value={trackInput}
                onChange={(e) => setTrackInput(e.target.value)}
                placeholder="e.g. MC-CMP-2026-9041 or 0300..."
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs focus:ring-2 focus:ring-emerald-500 font-mono"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs shadow-md transition-colors"
              >
                Track Progress Now
              </button>
            </form>

            {searched && (
              <div className="pt-2 animate-fade-in">
                {quickResult ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-emerald-800 dark:text-emerald-200">
                        {quickResult.trackingNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded-full font-bold text-[10px] bg-emerald-200 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                        {quickResult.status}
                      </span>
                    </div>
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                      {quickResult.title}
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-300 text-[11px]">
                      {quickResult.block} • Officer: {quickResult.assignedOfficer?.name}
                    </div>
                    <Link
                      href={`/complaints?track=${quickResult.trackingNumber}`}
                      className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline pt-1"
                    >
                      <span>View Detailed Lifecycle Timeline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ) : (
                  <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200 space-y-1">
                    <div className="font-bold">No active record found for this input.</div>
                    <p className="text-[11px]">
                      Try sample code: <code>MC-CMP-2026-9041</code> or lodge a new complaint.
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-500">Need immediate help?</span>
              <Link
                href="/complaints"
                className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                + Lodge New Complaint
              </Link>
            </div>
          </div>

          {/* Right Column: Live Stream of Recently Resolved Tickets */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Recently Addressed &amp; Resolved Municipal Issues</span>
              </h3>
              <span className="text-[11px] text-zinc-400">Live Community Stream</span>
            </div>

            <div className="space-y-3">
              {initialComplaints.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-850/50 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        {item.trackingNumber}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300">
                        {item.category}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          item.status === "Resolved"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">
                      {item.title}
                    </div>

                    <div className="text-[11px] text-zinc-500">
                      {item.block} • {item.houseNo}
                    </div>
                  </div>

                  <Link
                    href={`/complaints`}
                    className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold text-xs transition-colors shrink-0 text-center"
                  >
                    View Status
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
