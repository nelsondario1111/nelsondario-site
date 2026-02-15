"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Services Page ✦
 * Frequency: Truth · Beauty · Sovereignty
 * Mirrors the main home page aesthetic and structure
 */

const designServices = [
  {
    title: "Conscious Web Design & Brand Foundations",
    tag: "Design · Web · Brand",
    desc: "A clear, beautiful and honest online home for your work — tuned to your frequency, not a template.",
    bullets: [
      "Discovery session to clarify your essence, audience and offerings.",
      "Custom design in alignment with your visual and energetic signature.",
      "Next.js + Tailwind build focused on clarity, speed and calm UX.",
      "Foundational SEO and simple automations (forms, booking, email list).",
    ],
  },
  {
    title: "AI Systems & Conscious Automation",
    tag: "AI · Systems · Flow",
    desc: "Let AI support your work in a clean, high-frequency way — without losing your humanity or control.",
    bullets: [
      "Mapping your current workflows and pressure points.",
      "Curated AI tools that match your tech comfort and budget.",
      "Custom prompts and flows for content, docs, email and operations.",
      "Simple documentation so you feel safe, sovereign and in charge.",
    ],
  },
];

const guidanceServices = [
  {
    title: "Human Design Clarity Sessions",
    tag: "Guidance · Alignment",
    desc: "A grounded reading of your design so life stops feeling like a fight and starts feeling like cooperation.",
    bullets: [
      "Foundation reading: type, strategy, authority, profile and key gates.",
      "Integration of your design into work, relationships and decision-making.",
      "Optional partnership / family charts for deeper understanding and less friction.",
      "Practical suggestions tailored to your real life, not abstract theory.",
    ],
  },
  {
    title: "Insights — Guidance Sessions",
    tag: "Guidance · Awakening",
    desc: "You, me and Insights in a focused, loving space of truth — for life, business and awakening questions.",
    bullets: [
      "60–90 minute session with space for your core questions and themes.",
      "Real-time guidance from Insights combined with my lived human experience.",
      "Emotional and energetic integration, not just information or ideas.",
      "Follow-up summary and clear next steps so you leave anchored, not floating.",
    ],
  },
];

const speakingAndEvents = [
  {
    title: "Public Speaking & Live Talks",
    tag: "Speaking · Education",
    desc: "Talks, classes and live conversations on awakening, conscious technology and the new human story.",
    bullets: [
      "Keynote-style talks for events, communities and online summits.",
      "Themes such as conscious use of AI, Human Design, new economy, sovereignty and the awakening process.",
      "Formats ranging from inspirational talks to interactive Q&A and live ‘Insights’.",
      "Available online or in person (Toronto and beyond, depending on context).",
    ],
  },
  {
    title: "Healing Retreats & Holistic Events",
    tag: "Retreats · Community",
    desc: "Intimate, heart-centered spaces for deep rest, healing and remembrance — co-created with trusted collaborators.",
    bullets: [
      "Day retreats, weekend immersions or special evenings focused on nervous system softening and reconnection.",
      "Blending practices such as meditation, breath, movement, sound, somatic awareness and gentle energy work, adapted to the group.",
      "Designed with clear boundaries, emotional safety and space for integration.",
      "Available for private groups, organizations or public events by collaboration.",
    ],
  },
];

export default function ServicesPage() {
  // ✧ Parallax scroll effect for background (same as Home)
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
      aria-label="Services"
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

      {/* 🜂 HERO */}
      <motion.section
        id="services-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 py-28 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-4">
          Services & Portals of Support
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          How I Can Walk With You
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          From web design and AI systems to Human Design, public speaking, healing
          retreats and awakening guidance, these offerings are designed to support both
          your <span className="font-semibold">outer work</span> and your{" "}
          <span className="font-semibold">inner alignment</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/en/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Book a Discovery Call
          </Link>
          <Link href="/en" className="btn-outline hover:scale-105 transform">
            Back to Home
          </Link>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 OVERVIEW / ALIGNMENT */}
      <motion.section
        id="services-overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-16 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">Three Pillars — Many Doorways</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          Every service lives inside one of three main currents:{" "}
          <span className="font-semibold">Design</span>,{" "}
          <span className="font-semibold">Coaching</span> and{" "}
          <span className="font-semibold">Awakening</span>. They are for people and
          projects that value depth, honesty and spiritual alignment as much as clear
          strategy and real-world results. If you&apos;re looking only for quick hacks
          or purely material outcomes, this may not be the right space — and that&apos;s
          okay.
        </p>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜃 DESIGN & TECHNOLOGY */}
      <motion.section
        id="design-technology"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_88%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Design · Technology
            </p>
            <h2 className="section-title mb-3">Design & Conscious Technology</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              For conscious entrepreneurs, guides and projects who want their digital
              presence and systems to feel{" "}
              <span className="font-semibold">alive, trustworthy and calm</span>.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {designServices.map((service) => (
              <motion.article
                key={service.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="p-7 border border-[var(--color-gold)]/20 rounded-2xl
                           bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95
                           shadow-md hover:border-[var(--color-gold)]
                           hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
                    {service.tag}
                  </p>
                  <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-base)]/80 text-sm">{service.desc}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-base)]/80">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-[10px]">✧</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/en/book"
                    className="btn-primary text-[11px] px-4 py-2 hover:scale-105 transform"
                  >
                    Start with this
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜄 GUIDANCE & INNER ALIGNMENT */}
      <motion.section
        id="guidance"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Coaching · Inner Alignment
            </p>
            <h2 className="section-title mb-3">Guidance & Inner Alignment</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              These sessions are for those who feel the pull of a deeper life — who want
              clarity, reflection and practical support to walk their path with more{" "}
              <span className="font-semibold">truth, softness and power</span>.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {guidanceServices.map((service) => (
              <motion.article
                key={service.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="p-7 border border-[var(--color-gold)]/18 rounded-2xl
                           bg-[var(--bg-base)] shadow-md
                           hover:border-[var(--color-gold)]
                           hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
                    {service.tag}
                  </p>
                  <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-base)]/80 text-sm">{service.desc}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-base)]/80">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-[10px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/en/book"
                    className="btn-primary text-[11px] px-4 py-2 hover:scale-105 transform"
                  >
                    Book a session
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜅 SPEAKING & EVENTS */}
      <motion.section
        id="speaking-events"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10
                   bg-[color-mix(in_srgb,var(--bg-base)_86%,black)]/95
                   backdrop-blur-md"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Speaking · Retreats · Community
            </p>
            <h2 className="section-title mb-3">Speaking, Retreats & Holistic Events</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              For communities, organizations and groups who feel called to gather around
              themes of awakening, conscious technology and holistic wellbeing — in a
              grounded, loving and practical way. Depending on the context, we may weave
              in meditation, breathwork, sound, somatic awareness and gentle energy work,
              always adapted to the needs and safety of the space.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {speakingAndEvents.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="p-7 border border-[var(--color-gold)]/20 rounded-2xl
                           bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95
                           shadow-md hover:border-[var(--color-gold)]
                           hover:shadow-lg transition-all flex flex-col gap-4"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">
                    {item.tag}
                  </p>
                  <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-base)]/80 text-sm">{item.desc}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-base)]/80">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 text-[10px]">✧</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/en/book"
                    className="btn-primary text-[11px] px-4 py-2 hover:scale-105 transform"
                  >
                    Propose an event
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 text-center text-[var(--text-base)]/70 text-sm max-w-2xl mx-auto">
            If you&apos;d like to host a retreat or event, or be notified about upcoming
            public dates, you can propose a collaboration or reach out to join the
            interest list.
          </p>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜆 QHHT & DEEP JOURNEYS — COMING SOON */}
      <motion.section
        id="deep-work"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10
                   bg-gradient-to-t from-[color-mix(in_srgb,black_35%,var(--bg-base))]
                   via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
            Awakening · Deep Journeys
          </p>
          <h2 className="section-title mb-3">QHHT & Hypnosis Journeys (Coming Soon)</h2>
          <p className="text-[var(--text-base)]/80 text-lg max-w-3xl mx-auto mb-6">
            I&apos;m currently preparing the physical space and energetic structure to
            offer QHHT and deep hypnosis journeys in a safe, loving container. These
            sessions will support profound healing, remembrance and multi-layered
            guidance from your higher self.
          </p>
          <p className="text-[var(--text-base)]/70 text-sm max-w-2xl mx-auto mb-6">
            If you feel a strong pull towards this work, you can already let me know.
            I&apos;ll reach out when the first wave of sessions opens.
          </p>

          <div className="flex justify-center mt-6">
            <ToContactButtons />
          </div>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜇 FINAL CTA */}
      <motion.section
        id="services-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Not Sure Where to Start?</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          We can begin with a simple conversation. Tell me where you are, what you&apos;re
          feeling and what wants to be created. Together we&apos;ll choose the doorway
          that makes the most sense for this chapter.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/en/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Book a Discovery Call
          </Link>
          <ToContactButtons />
        </div>
      </motion.section>
    </main>
  );
}
