import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { ContactForm } from "@/components/contact/contact-form";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact & Resident Customer Care | Master City Housing Scheme",
  description:
    "Get in touch with Master City Housing Scheme administration, CEO Secretariat, booking office, and 24/7 complaint desk in Gujranwala.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="default" className="text-xs">
            24/7 Resident Support &amp; Customer Care
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            We are here to <span className="gradient-text">serve you</span>.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Have questions about plot booking, file transfer, possession, or municipal services? Reach out to our customer care team, CEO Secretariat, or lodge a ticket via our 24/7 Complaint Desk.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Channels & Meta */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Details Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                Direct Contact Channels
              </h2>

              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3.5 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Email</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3.5 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Phone</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3.5 text-zinc-600 dark:text-zinc-400">
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">Location</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
                <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Office Hours &amp; Timezone</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Operating primarily in <strong>Pacific Standard Time (PST / UTC-8)</strong>. Available for synchronous overlapping hours with European and APAC teams when required.
              </p>
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span>Currently accepting new client projects and technical advisory retainers.</span>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 space-y-4 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Follow &amp; Network
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={personalInfo.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
                >
                  <Dribbble className="w-4 h-4" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
