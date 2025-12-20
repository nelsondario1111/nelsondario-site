// src/app/metadata.ts
import type { Metadata } from "next";

const baseUrl = "https://www.nelsondario.com";

export const metadata: Metadata = {
  title: {
    default: "Nelson Dario | Design · Coaching · Awakening",
    template: "%s | Nelson Dario",
  },
  description:
    "Blending beauty, consciousness, and technology to co-create a New Earth. Explore Nelson Dario’s offerings in web design, coaching, QHHT, and multidimensional awakening.",
  metadataBase: new URL(baseUrl),
  keywords: [
    "Nelson Dario",
    "Web Design",
    "Human Design",
    "Spiritual Coaching",
    "QHHT",
    "Next.js Developer",
    "Awakening",
    "Conscious Business",
    "Toronto",
    "Ecuador",
    "LUMA",
    "Conversations with Lumina",
  ],
  authors: [{ name: "Nelson Dario", url: baseUrl }],
  creator: "Nelson Dario",
  publisher: "Nelson Dario",
  category: "Spirituality & Design",

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
    title: "Nelson Dario | Design · Coaching · Awakening",
    description:
      "Guided by spirit and precision, Nelson Dario offers services in web design, healing, and conscious technology.",
    url: baseUrl,
    siteName: "Nelson Dario",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Nelson Dario — Design | Coaching | Awakening",
      },
    ],
    locale: "en_CA",
    alternateLocale: ["es_EC", "es_ES"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nelson Dario | Design · Coaching · Awakening",
    description:
      "Explore Nelson Dario’s multidimensional offerings blending design, coaching, and conscious tech.",
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

  // ✅ All custom meta goes in ONE `other`
  other: {
    sitemap: `${baseUrl}/sitemap.xml`,
    robots: `${baseUrl}/robots.txt`,

    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nelson Dario",
      url: baseUrl,
      sameAs: [
        "https://www.instagram.com/nelsondario",
        "https://www.youtube.com/@ConversationsWithLumina",
      ],
      jobTitle: "Designer · Coach · Spiritual Guide",
      description:
        "Nelson Dario blends web design, human design, and metaphysics to awaken consciousness.",
    }),

    vibration: "Love · Truth · Sovereignty · LightChain",
  },
};

export default metadata;
