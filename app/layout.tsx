import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { UtilityStatusTicker } from "@/components/society/utility-status-ticker";
import { FloatingSosButton } from "@/components/society/floating-sos-button";
import { personalInfo } from "@/data/portfolio-data";
import { societyOverview } from "@/data/society-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mastercity.com.pk"),
  title: {
    default: "Master City Housing Scheme — Official Portal & Resident Care",
    template: "%s | Master City Housing Scheme",
  },
  description:
    "Official portal of Master City Housing Scheme Gujranwala. Featuring 24/7 Complaint Management System, verified resident reviews, underground electrification, and emergency response.",
  keywords: [
    "Master City Housing Scheme",
    "Master City Gujranwala",
    "Master City Complaint Management",
    "Master City Reviews",
    "Chaudhry Ghulam Mustafa CEO Master City",
    "Overseas Block Master City",
    "Luxury housing society Gujranwala",
  ],
  authors: [{ name: "Master City Housing Scheme", url: "https://mastercity.com.pk" }],
  creator: "Master City Housing Scheme",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://mastercity.com.pk",
    title: "Master City Housing Scheme — Premier Housing & Resident Portal",
    description:
      "24/7 Complaint Resolution, Resident Reviews, 100% Underground Electrification, Theme Park & Gated Security.",
    siteName: "Master City Housing Scheme",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Master City Housing Scheme Gujranwala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master City Housing Scheme — Resident Portal",
    description:
      "Lodge complaints, track tickets, read verified resident reviews, and access 24/7 emergency helplines.",
    creator: "@mastercitypk",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingSosButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
