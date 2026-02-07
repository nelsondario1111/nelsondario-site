"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

/**
 * ✦ NelsonDario.com — Home Page ✦
 * Frequency: Truth · Beauty · Sovereignty
 * Updated to match the "Bridge Between Worlds" narrative.
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
        className="flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-4">
          Nelson Dario
        </p>

        <h1 className="text-4xl md:text-6xl font-heading text-[var(--color-gold)] text-glow mb-6 leading-tight">
          Code. Consciousness. <br className="hidden md:block" /> Coherence.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Bridging the gap between{" "}
          <span className="text-[var(--color-gold)]">Technology</span> and{" "}
          <span className="text-[var(--color-gold)]">Spirit</span>.
          <br />
          For the sensitive visionary ready to build a reality that honors the soul.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/en/services"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Explore the Work
          </Link>
          <Link
            href="https://lumaeconomy.com"
            className="btn-outline hover:scale-105 transform"
          >
            Enter LUMA
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
        <h2 className="section-title">The Great Integration</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          We are moving from the age of &quot;Hustle&quot; to the age of
          &quot;Alignment.&quot; My work is to provide the{" "}
          <span className="font-semibold">structure</span> (Web &amp; AI) and the{" "}
          <span className="font-semibold">guidance</span> (Healing &amp; Strategy) you need
          to navigate this shift with sovereignty and peace.
        </p>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜃 THREE PILLARS (Aligned with Services) */}
      <motion.section
        id="pillars"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-3 gap-8 px-8 py-20
                   bg-[color-mix(in_srgb,var(--bg-base)_82%,black)/0.9]
                   backdrop-blur-md"
      >
        {[
          {
            title: "The Vessel",
            subtitle: "Design & AI",
            desc: "Sacred digital architecture. Websites and AI systems that protect your time and transmit your frequency.",
            link: "/en/services#design-technology",
          },
          {
            title: "The Map",
            subtitle: "Human Design",
            desc: "Operational strategy for the soul. Understanding your mechanics so you can lead without burning out.",
            link: "/en/services#guidance",
          },
          {
            title: "The Soul",
            subtitle: "Deep Healing",
            desc: "QHHT, regression, and metaphysical guidance to clear the noise and remember your origins.",
            link: "/en/services#deep-work",
          },
        ].map((pillar) => (
          <Link href={pillar.link} key={pillar.title} className="block group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="h-full p-8 border border-[var(--color-gold)]/20 rounded-2xl
                         bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]/40
                         hover:border-[var(--color-gold)] hover:bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/60
                         transition-all text-center shadow-md hover:shadow-lg flex flex-col items-center"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/50 mb-3 group-hover:text-[var(--color-gold)] transition-colors">
                {pillar.subtitle}
              </p>
              <h3 className="text-2xl font-heading text-[var(--color-gold)] mb-4 group-hover:text-glow transition-all">
                {pillar.title}
              </h3>
              <p className="text-[var(--text-base)]/75 text-sm leading-relaxed mb-6">
                {pillar.desc}
              </p>
              <span className="mt-auto text-xs border-b border-[var(--color-gold)]/30 pb-1 text-[var(--color-gold)]/80 group-hover:border-[var(--color-gold)] group-hover:text-[var(--color-gold)] transition-all">
                Learn More
              </span>
            </motion.div>
          </Link>
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
        <h2 className="section-title">Where do we begin?</h2>
        <p className="text-[var(--text-base)]/80 mb-10 text-lg max-w-2xl mx-auto">
          You don&apos;t have to navigate the complexity alone.
          Let&apos;s find the thread that leads you back to clarity.
        </p>
        <Link
          href="/en/book"
          className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
        >
          Book a Resonance Check
        </Link>
      </motion.section>

      {/* ✧ Ambient Frequency */}
      <AmbientTone />

      {/* ✧ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nelson Dario",
            jobTitle: "Conscious Technologist & Guide",
            description:
              "Helping sensitive visionaries and leaders bridge technology, human design, and spiritual awakening.",
            url: "https://nelsondario.com",
            sameAs: [
              "https://www.instagram.com/conversationswithlumina",
              "https://www.facebook.com/conversationswithlumina",
              "https://www.tiktok.com/@conversationswithlumina",
            ],
            knowsAbout: [
              "Human Design",
              "Web Development",
              "AI Automation",
              "QHHT",
              "Consciousness",
            ],
          }),
        }}
      />
    </main>
  );
}

/* ───────────────────────────────
   ✧ Ambient Tone Component
   ─────────────────────────────── */
function AmbientTone() {
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const playTone = () => {
      if (!audio) {
        audio = new Audio("/sounds/soft-tone.mp3");
        audio.volume = 0.05; // very subtle
      }
      audio.play().catch(() => {
        // ignore autoplay or loading errors
      });
    };

    // Play once on first user click anywhere on the window
    window.addEventListener("click", playTone, { once: true });

    return () => {
      window.removeEventListener("click", playTone);
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  }, []);

  return null;
}
