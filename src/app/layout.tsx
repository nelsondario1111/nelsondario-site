// src/app/layout.tsx

/* ───────────────────────────────
   Nelson Dario Root Layout
   Purpose: Global fonts and metadata
   ─────────────────────────────── */

import "./globals.css";

import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Sora, Source_Sans_3 } from "next/font/google";
import { ClientRootShell } from "./ClientRootShell";

/* ✧ Font setup */
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

/* ✦ Viewport (Next will inject the meta tag for you) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0f", // ✅ moved here (correct for Next 16)
};

/* ✦ Metadata (can be adjusted or extended later) */
export const metadata: Metadata = {
  title: "Nelson Dario · Web Design + AI Automations",
  description:
    "Fast websites, local SEO, and AI automations for service businesses.",
  metadataBase: new URL("https://nelsondario.com"),

  // ❌ REMOVE themeColor from metadata (Next 16 warning)
  // themeColor: "#0a0a0f",

  openGraph: {
    title: "Nelson Dario · Web Design + AI Automations",
    description:
      "Fast websites, local SEO, and AI automations for service businesses.",
    url: "https://nelsondario.com",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Dario",
    description: "Web design, local SEO, and AI automations for business growth.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  other: {
    "service-focus": "web-design-local-seo-ai-automation",
  },
};

/* Optional: if you still need a separate export somewhere else */
export const metadataConfig: Metadata = metadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body
        className={`${sourceSans3.variable} ${sora.variable}
          font-sans antialiased flex flex-col min-h-screen
          bg-[var(--bg-base)] text-[var(--text-base)]
          overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-[var(--color-midnight)]
          transition-colors duration-700 ease-in-out`}
      >
        <ClientRootShell>{children}</ClientRootShell>
      </body>
    </html>
  );
}
