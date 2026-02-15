/** @type {import('next').NextConfig} */

// ───────────────────────────────
// NelsonDario.com — 2025 Configuration
// Integration: Personal Brand
// ───────────────────────────────

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nelsondario.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" }
    ],
    formats: ["image/avif", "image/webp"]
  },

  // ✅ Security headers: Protecting the Sovereign Vessel
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          }
        ]
      }
    ];
  },

  // ✅ Routing & Redirects
  async redirects() {
    return [
      // 1. Root redirection to English Portal
      {
        source: "/",
        destination: "/en",
        permanent: true
      },
      // 2. Legacy cleanup: Redirecting old QHHT paths to new Soul Work
      {
        source: "/en/qhht",
        destination: "/en/services#deep-work",
        permanent: true
      },
      {
        source: "/es/qhht",
        destination: "/es/services#deep-work",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
