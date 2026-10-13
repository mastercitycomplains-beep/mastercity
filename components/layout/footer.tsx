import * as React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Mail,
  MapPin,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import { personalInfo, navigationLinks } from "@/data/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/80 bg-white/50 dark:bg-zinc-950/80 backdrop-blur-md pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-zinc-200/80 dark:border-zinc-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 text-amber-300 flex items-center justify-center font-black text-base shadow-md border border-amber-400/30">
                MC
              </div>
              <div>
                <span className="font-extrabold text-zinc-900 dark:text-white text-base">
                  Master City
                </span>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Housing Scheme Gujranwala • CEO Office
                </p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Premier luxury master-planned community featuring 100% underground
              electrification, single-pole amusement parks, and 24/7 rapid municipal resident care.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                24/7 Emergency Command &amp; Resident Care Desk
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Resident Portals
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/complaints"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                >
                  Lodge Complaint
                </Link>
              </li>
              <li>
                <Link
                  href="/complaints"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Track Complaint by ID
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                >
                  Resident &amp; Investor Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Upload Your Review
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  CEO Message &amp; Vision
                </Link>
              </li>
            </ul>
          </div>

          {/* Society Sectors & Facilities */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Sectors &amp; Amenities
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Overseas Block
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Executive Block Villas
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Single-Pole Theme Park
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  Grand Jamia Mosque
                </span>
              </li>
              <li>
                <span className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  RO Water Filtration Plants
                </span>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                <span className="truncate">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Dribbble Profile"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved. Built with
            Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link
              href="/sitemap.xml"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Sitemap
            </Link>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" /> for performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
