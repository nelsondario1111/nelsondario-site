/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 👇 turn LightningCSS off so PostCSS handles Tailwind
    css: { lightningcss: false },
  },
}

export default nextConfig
