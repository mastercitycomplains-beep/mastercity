"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  subject: string;
  service: string;
  budget: string;
  message: string;
  honeypot: string; // Anti-bot field
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    subject: "",
    service: "Full-Stack Web Applications",
    budget: "$5,000 - $10,000",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = React.useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message details are required";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters describing your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Bot detection check
    if (formData.honeypot) {
      setStatus("success");
      setStatusMessage("Your inquiry has been received!");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your message has been received. I will review it and reply within 24 hours."
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          service: "Full-Stack Web Applications",
          budget: "$5,000 - $10,000",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "An error occurred while sending your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out directly via email.");
    }
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Send a Direct Message
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
          Fill out the brief form below and I&apos;ll get back to you with timeline and architectural feedback.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
            Inquiry Sent Successfully!
          </h4>
          <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
            {statusMessage}
          </p>
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStatus("idle")}
              className="text-xs"
            >
              Send Another Inquiry
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot field for spam prevention */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  errors.name
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-200 dark:border-zinc-700 focus:border-indigo-500"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-zinc-200 dark:border-zinc-700 focus:border-indigo-500"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service */}
            <div className="space-y-1.5">
              <label
                htmlFor="service"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Service Category
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                <option value="Full-Stack Web Applications">Full-Stack Web Applications</option>
                <option value="Modern Frontend & Design Systems">Modern Frontend &amp; Design Systems</option>
                <option value="MVP Development & Rapid Launch">MVP Development &amp; Rapid Launch</option>
                <option value="Codebase Audit & Speed Optimization">Performance Audit &amp; Speed Optimization</option>
                <option value="Technical Advisory / Retainer">Technical Advisory / Retainer</option>
              </select>
            </div>

            {/* Budget */}
            <div className="space-y-1.5">
              <label
                htmlFor="budget"
                className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
              >
                Estimated Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                <option value="< $5,000">&lt; $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="Hourly / Advisory Rate">Hourly / Advisory Rate</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Project Title or Short Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="e.g. Next.js SaaS MVP or Frontend Redesign"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              Project Overview &amp; Goals <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about your product, expected milestones, timeline, or current challenges..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-zinc-50 dark:bg-zinc-800/60 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                errors.message
                  ? "border-red-500 focus:border-red-500"
                  : "border-zinc-200 dark:border-zinc-700 focus:border-indigo-500"
              }`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
          </div>

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-xs text-red-600 dark:text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Notice regarding demonstration mode */}
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800 text-[11px] text-zinc-500 dark:text-zinc-400 leading-normal">
            <strong className="text-zinc-700 dark:text-zinc-300">Note:</strong> Form includes client-side validation and dispatches to <code className="text-indigo-600 dark:text-indigo-400">/api/contact</code>. Integrate your email provider (e.g. Resend, SendGrid) in <code className="text-indigo-600 dark:text-indigo-400">app/api/contact/route.ts</code> for live inbox delivery.
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={status === "submitting"}
              size="lg"
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>Validating &amp; Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
