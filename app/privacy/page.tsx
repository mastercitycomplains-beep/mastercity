import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy and data protection terms for the portfolio and services of Alex Vance.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="default" className="text-xs">
            Legal &amp; Compliance
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Last Updated: May 2024 &bull; Effective immediately for all visitors.
          </p>
        </div>

        {/* Content Document */}
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 sm:p-12 shadow-sm space-y-8 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-900/60">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <p className="text-xs text-indigo-950 dark:text-indigo-200 font-medium">
              Your privacy is respected. This website does not sell personal information, does not run invasive tracking ads, and collects only what is strictly necessary to communicate with you.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              1. Information We Collect
            </h2>
            <p>
              When you visit this portfolio website, we collect minimal data required to provide a fast and secure browsing experience:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>
                <strong>Direct Communications:</strong> When you voluntarily fill out the contact inquiry form, we collect your name, email address, project requirements, and estimated budget.
              </li>
              <li>
                <strong>Server &amp; Access Logs:</strong> Standard server logs captured by hosting providers (such as Vercel) which include IP address, browser type, referral URLs, and timestamps to diagnose technical faults.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              2. How Your Information is Used
            </h2>
            <p>
              The information submitted through this website is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Evaluate project requirements and respond to your inquiries.</li>
              <li>Provide software consulting and development proposals.</li>
              <li>Maintain website security, prevent spam, and optimize Core Web Vitals.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              3. Cookies and Local Storage
            </h2>
            <p>
              This website uses lightweight local browser storage strictly to remember your preferred visual appearance (Light Mode vs. Dark Mode). We do not employ third-party advertising tracking cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              4. Third-Party Infrastructure
            </h2>
            <p>
              This website is deployed and hosted on Vercel Inc. and utilizes CDN nodes globally. Any network-level telemetry is processed in accordance with industry-standard SOC 2 and GDPR compliant practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              5. Data Retention &amp; Your Rights
            </h2>
            <p>
              You may at any time request the deletion of your submitted contact messages or inquire about any stored communications by contacting{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-indigo-600 dark:text-indigo-400 underline font-semibold"
              >
                {personalInfo.email}
              </a>.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              6. Contact Information
            </h2>
            <p className="text-xs">
              For any privacy or security questions regarding this site:
            </p>
            <div className="text-xs space-y-1 font-mono text-zinc-600 dark:text-zinc-400">
              <p>Alex Vance Portfolio</p>
              <p>Email: {personalInfo.email}</p>
              <p>Location: {personalInfo.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
