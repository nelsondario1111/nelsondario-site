"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

/**
 * ✦ NelsonDario.com — Booking Page (EN) ✦
 * Purpose: Internal booking portal that embeds Calendly
 * Frequency: Calm · Clear · Sovereign
 */

// ⬇️ Replace this with your real Calendly URL
const CALENDLY_URL =
  "https://calendly.com/nelson-samaniego0/30min";

export default function BookPage() {
  // ✧ Parallax scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✧ Load Calendly script on client
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <main
      aria-label="Book a session"
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
        id="book-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          Booking · Resonance Check
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Book Your Session
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          This space is for{" "}
          <span className="font-semibold">Resonance Check calls</span> and
          sessions that support your journey — whether that&apos;s{" "}
          <span className="font-semibold">Web &amp; AI</span>,{" "}
          <span className="font-semibold">Human Design</span>, or{" "}
          <span className="font-semibold">deep healing work</span>.
          <br className="hidden md:block" />
          Choose a time that feels spacious for you, and we&apos;ll meet there.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/en/services" className="btn-outline hover:scale-105 transform">
            View Services First
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Prefer to Message Me?
          </Link>
        </div>
      </motion.section>

      {/* Divider glow */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 BOOKING CONTENT */}
      <motion.section
        id="book-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 pb-20 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr,0.9fr] items-start">
          {/* Calendly embed */}
          <div
            className="rounded-2xl border border-[var(--color-gold)]/25
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/90
                       shadow-md backdrop-blur-md p-4 md:p-6"
          >
            <h2 className="section-title mb-3 text-left">
              Choose Your Time
            </h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-4">
              The calendar below shows my current availability in your timezone.
              Once you pick a time, you&apos;ll receive a confirmation email with
              all the details and a link to reschedule if needed.
            </p>

            <div
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "760px" }}
            />

            <p className="mt-3 text-[11px] text-[var(--text-base)]/60">
              If the calendar doesn&apos;t load, you can also open it directly{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 decoration-[var(--color-gold)]/80"
              >
                at this link
              </a>
              .
            </p>
          </div>

          {/* Side explanation / guidance */}
          <aside
            className="rounded-2xl border border-[var(--text-base)]/15
                       bg-[var(--bg-secondary)]/95 shadow-sm p-6 md:p-7 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-sm font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3">
                What is a Resonance Check?
              </h3>
              <p className="text-sm text-[var(--text-base)]/80 mb-3">
                A gentle, focused conversation where we feel into:
              </p>
              <ul className="text-sm text-[var(--text-base)]/80 space-y-2">
                <li>✦ Where you are on your path right now.</li>
                <li>✦ What you&apos;re sensing wants to shift or be created.</li>
                <li>✦ Which portal (Web &amp; AI, Human Design, Healing) fits best.</li>
                <li>✦ Whether it feels aligned for us to work together at this time.</li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 space-y-3 text-sm text-[var(--text-base)]/80">
              <p className="font-semibold text-[var(--text-base)]/85">
                A few notes:
              </p>
              <ul className="space-y-2">
                <li>✦ Sessions are held online (video) unless we explicitly plan in-person work in Toronto.</li>
                <li>✦ You&apos;ll see the duration and type of session on the Calendly event itself.</li>
                <li>✦ If you don&apos;t see a time that works, you can always{" "}
                  <Link
                    href="/en/contact"
                    className="underline underline-offset-4 decoration-[var(--color-gold)]/80"
                  >
                    send me a message
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 text-xs text-[var(--text-base)]/60 space-y-2">
              <p>
                All calls are held in a field of{" "}
                <span className="font-semibold">respect, confidentiality, and sovereignty</span>.
              </p>
              <p>
                You&apos;re free to come with your questions, doubts, and hopes — we&apos;ll
                let the conversation show us what wants to unfold.
              </p>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
