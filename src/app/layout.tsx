// app/layout.tsx

/* ───────────────────────────────
   ✦ Nelson Dario Root Layout ✦
   Purpose: Global fonts, SEO, ambient shimmer.
   Frequency: Gold + Midnight (permanent night temple)
   Maintained with love by Nelson & Lumina
   ─────────────────────────────── */

import "./globals.css";

import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { Lato, Playfair_Display } from "next/font/google";
import { ClientRootShell } from "./ClientRootShell";

/* ✧ Font setup */
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

/* ✦ Viewport (Next will inject the meta tag for you) */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/* ✦ Metadata (can be adjusted or extended later) */
export const metadata: Metadata = {
  title: "Nelson Dario · Design | Coaching | Awakening",
  description:
    "Uniting consciousness, creativity, and technology — design for the awakening age.",
  metadataBase: new URL("https://nelsondario.com"),
  themeColor: "#0a0a0f",
  openGraph: {
    title: "Nelson Dario · Design | Coaching | Awakening",
    description:
      "Uniting consciousness, creativity, and technology — design for the awakening age.",
    url: "https://nelsondario.com",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Dario",
    description:
      "Truth · Beauty · Sovereignty · The fusion of light and design.",
  },
  icons: {
    icon: "/favicon-dark.ico",
  },
  other: {
    "frequency-signature":
      "Truth · Beauty · Sovereignty · 432 Hz / 528 Hz",
  },
};

/* Optional: if you still need a separate export somewhere else */
export const metadataConfig: Metadata = metadata;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body
        className={`${lato.variable} ${playfair.variable}
          font-sans antialiased flex flex-col min-h-screen
          bg-[var(--bg-base)] text-[var(--text-base)]
          overflow-x-hidden selection:bg-[var(--color-gold)] selection:text-[var(--color-midnight)]
          transition-colors duration-700 ease-in-out`}
      >
        {/* ClientRootShell renders global nav + footer.
            On /en/luma-portal, body.luma-portal-mode will hide them
            via CSS so the LUMA Portal can use its own chrome. */}
        <ClientRootShell>{children}</ClientRootShell>
      </body>
    </html>
  );
}
