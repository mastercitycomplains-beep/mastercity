import * as React from "react";
import Link from "next/link";
import {
  Layers,
  Palette,
  Rocket,
  Gauge,
  ArrowRight,
  Check,
  Clock,
} from "lucide-react";
import { servicesData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Palette,
  Rocket,
  Gauge,
};

export function ServicesPreview() {
  return (
    <section className="py-20 bg-zinc-50/50 dark:bg-zinc-950/50 border-t border-zinc-200/80 dark:border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Services &amp; Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              High-velocity engineering for ambitious products.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Whether you need a ground-up SaaS MVP built in weeks or need to eliminate
              bottlenecks in an existing enterprise frontend, I bring battle-tested expertise.
            </p>
          </div>

          <div>
            <Button href="/services" variant="outline" size="md">
              <span>View All Services &amp; Packages</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Layers;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                      <Clock className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Timeline: {service.timeline}</span>
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-white">
                      From {service.pricingTier.startingAt}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/services#${service.id}`}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
