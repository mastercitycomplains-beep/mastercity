"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, AlertTriangle, ShieldCheck, PhoneCall } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigationLinks } from "@/data/portfolio-data";
import { societyOverview } from "@/data/society-data";
import { UtilityStatusTicker } from "@/components/society/utility-status-ticker";
import { EmergencySosModal } from "@/components/society/emergency-sos-modal";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [sosModalOpen, setSosModalOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Operations & Helpline Ticker */}
        <UtilityStatusTicker onOpenSos={() => setSosModalOpen(true)} />

        {/* Main Navigation Bar */}
        <div
          className={cn(
            "transition-all duration-300 border-b",
            scrolled
              ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80 py-2.5 shadow-sm"
              : "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-zinc-200/40 dark:border-zinc-800/40 py-3.5"
          )}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              {/* Logo / Brand */}
              <Link
                href="/"
                className="group flex items-center gap-3 focus:outline-none shrink-0"
                aria-label="Master City Housing Scheme Homepage"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-900 text-amber-300 flex items-center justify-center font-black text-base shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform border border-amber-400/30">
                  MC
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-zinc-900 dark:text-white text-base tracking-tight leading-none group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Master City
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Housing Scheme Gujranwala
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav
                aria-label="Main Navigation"
                className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
              >
                {navigationLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative",
                        isActive
                          ? "text-emerald-700 dark:text-emerald-400 font-bold bg-white dark:bg-zinc-800 shadow-sm"
                          : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action Area */}
              <div className="hidden md:flex items-center gap-2.5">
                <ThemeToggle />

                <button
                  onClick={() => setSosModalOpen(true)}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white border border-red-500/30 transition-all"
                  title="24/7 Society Emergency SOS"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>SOS</span>
                </button>

                <Link
                  href="/complaints"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Lodge Complaint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex lg:hidden items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileMenuOpen}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white/95 dark:bg-zinc-900/95 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-3 pb-6 animate-slide-up shadow-xl backdrop-blur-md">
              <nav className="flex flex-col space-y-1">
                {navigationLinks.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      )}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
                <Link
                  href="/complaints"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-500 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Lodge Society Complaint</span>
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSosModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-red-600 text-white hover:bg-red-500 shadow-sm"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>24/7 Emergency Helplines</span>
                </button>

                <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                  {societyOverview.helplinePhone} • {societyOverview.location}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Emergency SOS Modal controlled from Navbar */}
      <EmergencySosModal isOpen={sosModalOpen} onClose={() => setSosModalOpen(false)} />
    </>
  );
}
