"use client";

import * as React from "react";
import { Bell, Calendar, ChevronRight, Tag, Info } from "lucide-react";
import { societyAnnouncements } from "@/data/society-data";
import { cn } from "@/lib/utils";

export function AnnouncementsCard() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  const filtered = societyAnnouncements.filter(
    (ann) => selectedCategory === "All" || ann.category === selectedCategory
  );

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white">
              Official Society Notice Board
            </h3>
            <p className="text-xs text-zinc-500">
              Latest circulars, maintenance schedules &amp; community events
            </p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {["All", "Important", "Community", "Maintenance", "Event"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1 rounded-full font-medium transition-colors whitespace-nowrap",
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-200/80 dark:border-zinc-800 hover:border-emerald-400/60 transition-all space-y-2 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-mono text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  {item.date}
                </span>
                <span
                  className={cn(
                    "px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider",
                    item.category === "Important"
                      ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                      : item.category === "Maintenance"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                      : "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                  )}
                >
                  {item.category}
                </span>
              </div>
              <h4 className="font-bold text-sm text-zinc-900 dark:text-white leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
              <span>Master City Administration</span>
              <span className="flex items-center gap-0.5">
                Official Circular <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
