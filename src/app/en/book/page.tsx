"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/nelson-samaniego0/30min";

export default function BookPage() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      aria-label="Book a call"
      className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]"
    >
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

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
          Booking
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-5 leading-tight">
          Book a Strategy Call
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Use this call to review your website, lead flow, and automation priorities. We will map your best next step.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/en/services#packages" className="btn-outline hover:scale-105 transform">
            View Packages
          </Link>
          <Link href="/en/contact" className="btn-outline hover:scale-105 transform">
            Prefer Email?
          </Link>
        </div>
      </motion.section>

      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      <motion.section
        id="book-main"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="px-6 pb-20 md:px-10"
      >
        <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-[1.2fr,0.9fr] items-start">
          <div
            className="rounded-2xl border border-[var(--color-gold)]/25
                       bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/90
                       shadow-md backdrop-blur-md p-4 md:p-6"
          >
            <h2 className="section-title mb-3 text-left">Choose a Time</h2>
            <p className="text-sm text-[var(--text-base)]/75 mb-4">
              The calendar below shows current availability in your timezone.
              After booking, you will receive a confirmation email with all details.
            </p>

            <div
              className="calendly-inline-widget w-full"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "760px" }}
            />

            <p className="mt-3 text-[11px] text-[var(--text-base)]/60">
              If the calendar does not load, open it directly{" "}
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

          <aside
            className="rounded-2xl border border-[var(--text-base)]/15
                       bg-[var(--bg-secondary)]/95 shadow-sm p-6 md:p-7 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-sm font-heading tracking-[0.22em] uppercase text-[var(--text-base)]/70 mb-3">
                What we cover on this call
              </h3>
              <ul className="text-sm text-[var(--text-base)]/80 space-y-2">
                <li>1. Your current offer and client flow.</li>
                <li>2. Website priorities for better conversion.</li>
                <li>3. Automation opportunities for intake and follow-up.</li>
                <li>4. The best package and timeline for execution.</li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 space-y-3 text-sm text-[var(--text-base)]/80">
              <p className="font-semibold text-[var(--text-base)]/85">Notes:</p>
              <ul className="space-y-2">
                <li>1. Calls are online unless we coordinate in-person work in Toronto.</li>
                <li>2. Session type and duration are shown in Calendly.</li>
                <li>
                  3. If you do not see a time that works, send a{" "}
                  <Link
                    href="/en/contact"
                    className="underline underline-offset-4 decoration-[var(--color-gold)]/80"
                  >
                    message
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div className="border-t border-[var(--text-base)]/10 pt-4 text-xs text-[var(--text-base)]/60 space-y-2">
              <p>All calls are confidential and focused on practical next steps.</p>
            </div>
          </aside>
        </div>
      </motion.section>
    </main>
  );
}
