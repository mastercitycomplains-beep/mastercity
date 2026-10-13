"use client";

import * as React from "react";
import Link from "next/link";
import {
  Star,
  PlusCircle,
  ArrowRight,
  BadgeCheck,
  ThumbsUp,
  Sparkles,
} from "lucide-react";
import { initialReviews } from "@/data/society-data";

export function HomeReviewsPreview() {
  return (
    <section className="py-20 bg-zinc-50 dark:bg-zinc-950/80 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Resident &amp; Investor Voice</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              What Residents Say About Master City
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light">
              4.9★ rating backed by hundreds of overseas Pakistanis and satisfied resident families enjoying peaceful, luxurious living.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/reviews"
              className="py-2.5 px-5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold text-xs shadow-md transition-colors flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Upload Your Review</span>
            </Link>

            <Link
              href="/reviews"
              className="py-2.5 px-4 rounded-2xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold text-xs transition-colors flex items-center gap-1"
            >
              <span>See All Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 Featured Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialReviews.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {review.createdAt}
                  </span>
                </div>

                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                  &ldquo;{review.title}&rdquo;
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-4">
                  {review.reviewText}
                </p>

                {review.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {review.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Author Strip */}
              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={review.avatarUrl}
                    alt={review.authorName}
                    className="w-9 h-9 rounded-xl object-cover border border-zinc-200 dark:border-zinc-700"
                  />
                  <div>
                    <div className="font-bold text-xs text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                      <span>{review.authorName}</span>
                      <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      {review.authorRole} • {review.block}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-zinc-500 font-medium">
                  <ThumbsUp className="w-3 h-3 text-amber-500" />
                  <span>{review.helpfulCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
