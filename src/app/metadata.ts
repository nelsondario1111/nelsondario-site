// src/app/metadata.ts
import type { Metadata } from "next";

const baseUrl = "https://www.nelsondario.com";

export const metadata: Metadata = {
  title: {
    default: "Nelson Dario | Web Design + AI Automations",
    template: "%s | Nelson Dario",
  },
  description:
    "Fast websites, local SEO, and AI automations for service businesses in EN/ES.",
  metadataBase: new URL(baseUrl),
  keywords: [
    "Nelson Dario",
    "Web Design",
    "Local SEO",
    "AI Automation",
    "CRM",
    "Lead Generation",
    "Bilingual Website",
    "Toronto",
  ],
  authors: [{ name: "Nelson Dario", url: baseUrl }],
  creator: "Nelson Dario",
  publisher: "Nelson Dario",
  category: "Business Services",

  alternates: {
    canonical: baseUrl,
    languages: {
      "en-CA": `${baseUrl}/en`,
      "es-EC": `${baseUrl}/es`,
    },
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Nelson Dario | Web Design + AI Automations",
    description:
      "Practical systems for growth: websites, local SEO, and AI automations.",
    url: baseUrl,
    siteName: "Nelson Dario",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nelson Dario — Web Design + AI Automations",
      },
    ],
    locale: "en_CA",
    alternateLocale: ["es_EC", "es_ES"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nelson Dario | Web Design + AI Automations",
    description:
      "Fast websites, local SEO, and AI automation systems for service businesses.",
    images: [`${baseUrl}/og-image.jpg`],
    creator: "@nelsondario",
  },

  manifest: "/manifest.webmanifest",

  appLinks: {
    web: { url: baseUrl, should_fallback: true },
  },

  referrer: "strict-origin-when-cross-origin",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    sitemap: `${baseUrl}/sitemap.xml`,
    robots: `${baseUrl}/robots.txt`,
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nelson Dario",
      url: baseUrl,
      sameAs: [
        "https://www.instagram.com/nelsondario.co",
        "https://www.youtube.com/@NelsonDario",
      ],
      jobTitle: "Web Designer and AI Automation Specialist",
      description:
        "Helping service businesses grow with practical website and automation systems.",
    }),
  },
};

export default metadata;
