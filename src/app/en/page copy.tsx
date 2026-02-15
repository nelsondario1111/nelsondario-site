"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

/**
 * ✦ NelsonDario.com — Home Page ✦
 * Frequency: Truth · Beauty · Sovereignty
 * Designed for solar clarity and lunar depth
 */

export default function HomePage() {
  // ✧ Parallax scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      aria-label="Main Content"
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      {/* ✧ Golden parallax background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(242,184,101,0.15), transparent 70%)",
          transform: "translateY(var(--scroll-offset, 0px))",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* ✧ Starlight texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      {/* 🜂 HERO SECTION */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 py-32 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <h1 className="text-4xl md:text-6xl font-heading text-[var(--color-gold)] text-glow mb-6 hero">
          Nelson Dario
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Design ✧ Coaching ✧ Awakening
          <br />
          Blending technology, beauty, and consciousness to create experiences
          that awaken purpose and inspire transformation.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/en/services"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Explore Services
          </Link>
          <Link
            href="/en/book"
            className="btn-outline hover:scale-105 transform"
          >
            Book a Resonance Check
          </Link>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 INTRO / MISSION */}
      <motion.section
        id="mission"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-24 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">A New Way of Being</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          Through design, consciousness, and authentic service, I help people
          and businesses align with their higher purpose. Together we co-create
          systems of truth, beauty, and sovereignty — bridging ancient wisdom
          and future technology.
        </p>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜃 THREE PILLARS */}
      <motion.section
        id="pillars"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-8 px-8 py-20
                   bg-[color-mix(in_srgb,var(--bg-base)_82%,black)]/90
                   backdrop-blur-md"
      >
        {[
          {
            title: "Design",
            desc: "Web & brand design that transmits clarity, frequency, and trust. Every pixel is vibration — design as a healing art.",
          },
          {
            title: "Coaching",
            desc: "Conscious guidance integrating Human Design, emotional intelligence, and holistic strategy to help you remember who you are.",
          },
          {
            title: "Awakening",
            desc: "QHHT, energy work, and metaphysical tools for deep healing and expansion — supporting your soul’s journey through love.",
          },
        ].map((pillar) => (
          <motion.div
            key={pillar.title}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-8 border border-[var(--color-gold)]/20 rounded-2xl
                       hover:border-[var(--color-gold)]
                       transition-all text-center shadow-md hover:shadow-lg"
          >
            <h3 className="text-xl font-heading text-[var(--color-gold)] mb-4">
              {pillar.title}
            </h3>
            <p className="text-[var(--text-base)]/75">{pillar.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜄 CALL TO ACTION */}
      <motion.section
        id="cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-24
                   bg-gradient-to-t from-[color-mix(in_srgb,black_40%,var(--bg-base))]
                   via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <h2 className="section-title">Begin the Journey</h2>
        <p className="text-[var(--text-base)]/80 mb-10 text-lg max-w-2xl mx-auto">
          Whether through design, healing, or conscious technology —
          your transformation begins with intention.
        </p>
        <Link
          href="/en/book"
          className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
        >
          Book a Session
        </Link>
      </motion.section>

      {/* ✧ Ambient Frequency (soft tone) */}
      <AmbientTone />

      {/* ✧ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nelson Dario",
            description:
              "Designer, Conscious Coach, and Awakening Guide blending technology and spirituality.",
            url: "https://nelsondario.com",
            sameAs: [
              "https://www.instagram.com/nelsondario.co",
              "https://www.youtube.com/@NelsonDario",
              "https://www.youtube.com/@NelsonDario",
            ],
          }),
        }}
      />
    </main>
  );
}

/* ───────────────────────────────
   ✧ Optional Ambient Tone Component
   ─────────────────────────────── */
function AmbientTone() {
  useEffect(() => {
    const audio = new Audio("/sounds/soft-tone.mp3");
    audio.volume = 0.1;
    const playTone = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };
    window.addEventListener("click", playTone, { once: true });
    return () => window.removeEventListener("click", playTone);
  }, []);
  return null;
}
