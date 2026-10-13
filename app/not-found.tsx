import Link from "next/link";
import { ArrowLeft, Home, Compass, MessageSquare, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* Error Code Graphic */}
        <div className="relative inline-flex items-center justify-center">
          <div className="w-28 h-28 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-900/60 flex items-center justify-center text-4xl font-black text-indigo-600 dark:text-indigo-400 shadow-xl">
            404
          </div>
        </div>

        {/* Heading & Explanation */}
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold text-zinc-950 dark:text-white">
            Page Not Found
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
            The route or resource you are looking for has either been moved,
            refactored, or does not exist in this deployment.
          </p>
        </div>

        {/* Helpful Shortcut Links */}
        <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md space-y-2 text-left text-xs">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
            Suggested Destinations:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-indigo-500" />
              <span>Home Page</span>
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-indigo-500" />
              <span>Portfolio Work</span>
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              <span>Services</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
              <span>Contact</span>
            </Link>
          </div>
        </div>

        {/* Primary CTA */}
        <div>
          <Button href="/" size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Return to Safety</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
