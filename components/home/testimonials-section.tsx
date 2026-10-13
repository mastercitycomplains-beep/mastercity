import * as React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/data/portfolio-data";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 border-t border-zinc-200/80 dark:border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Trusted by technology leaders and founders.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            Read what engineering executives and founders have to say about our
            collaboration and engineering standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 flex flex-col justify-between shadow-sm relative group hover:border-indigo-500/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-indigo-100 dark:text-indigo-950 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3.5 mt-6">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex-shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
