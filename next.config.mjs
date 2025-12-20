/** @type {import('next').NextConfig} */

// ───────────────────────────────
// NelsonDario.com — 2025 Configuration
// Integration: Personal Brand + External LUMA Economy
// ───────────────────────────────

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nelsondario.com" },
      { protocol: "https", hostname: "www.lumaeconomy.com" }, // Trusted internal-external link
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

  // ✅ Routing & Redirects: The Bridge to LUMA Economy
  async redirects() {
    return [
      // 1. Root redirection to English Portal
      {
        source: "/",
        destination: "/en",
        permanent: true
      },
      // 2. Transitioning LUMA paths to the new domain (SEO preservation)
      {
        source: "/en/luma/:path*",
        destination: "https://www.lumaeconomy.com/:path*",
        permanent: true // Tells Google the move is permanent
      },
      {
        source: "/es/luma/:path*",
        destination: "https://www.lumaeconomy.com/es/:path*",
        permanent: true
      },
      // 3. Legacy cleanup: Redirecting old QHHT paths to new Soul Work
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