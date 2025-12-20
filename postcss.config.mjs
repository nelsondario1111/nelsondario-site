/** @type {import('next').NextConfig} */

const nextConfig = {
  // ✅ Modern Next.js settings
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ App Router compatible i18n (handled manually)
  // Note: In App Router, Next’s built-in i18n is deprecated.
  // We’ll manage language routes under /en and /es instead.
  // This block simply sets the default lang for metadata.
  env: {
    DEFAULT_LOCALE: "en",
  },

  // ✅ Image optimization & remote pattern security
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.pixabay.com",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.fannysamaniego.com",
      },
      {
        protocol: "https",
        hostname: "**.nelsondario.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
  },

  // ✅ Experimental features (safe)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },

  // ✅ Output settings
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ✅ Redirects for SEO and bilingual structure
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },

  // ✅ Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
