"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

/**
 * ✦ NelsonDario.com — Home Page ✦
 * Updates:
 * - Locale-aware internal links (EN/ES safe)
 * - Removed all sound / ambient tone logic
 * - Option A hero copy (Archetype line + micro-story + clearer positioning)
 * - Removed duplicate “secondary pillars” section
 * - Moved mini-filter below Mission (shorter hero on mobile)
 * - JSON-LD sameAs aligned with actual footer socials
 */

type Pillar = {
  title: string;
  subtitle: string;
  desc: string;
  link: string;
  note?: string;
};

export default function HomePage() {
  const pathname = usePathname() || "/en";
  const locale: "en" | "es" = pathname.startsWith("/es") ? "es" : "en";

  // ✧ Parallax scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.15;
      document.documentElement.style.setProperty("--scroll-offset", `${offset}px`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillars: Pillar[] = useMemo(
    () => [
      {
        title: locale === "es" ? "El Recipiente" : "The Vessel",
        subtitle: locale === "es" ? "Diseño & IA" : "Design & AI",
        desc:
          locale === "es"
            ? "Arquitectura digital sagrada. Sitios web y sistemas de IA que protegen tu tiempo y transmiten tu frecuencia."
            : "Sacred digital architecture. Websites and AI systems that protect your time and transmit your frequency.",
        link: `/${locale}/services#design-technology`,
      },
      {
        title: locale === "es" ? "El Mapa" : "The Map",
        subtitle: locale === "es" ? "Diseño Humano" : "Human Design",
        desc:
          locale === "es"
            ? "Estrategia operativa para el alma. Entiende tu mecánica para liderar sin agotarte."
            : "Operational strategy for the soul. Understanding your mechanics so you can lead without burning out.",
        link: `/${locale}/services#guidance`,
      },
      {
        title: locale === "es" ? "El Alma" : "The Soul",
        subtitle:
          locale === "es" ? "Hipnoterapia del Ser Superior" : "Higher Self Hypnotherapy",
        desc:
          locale === "es"
            ? "Regresión del alma y guía en trance profundo para liberar patrones, recibir claridad y volver a la coherencia."
            : "Soul regression and deep-trance guidance to release old patterns, receive clarity, and return to coherence.",
        link: `/${locale}/services#deep-work`,
        note:
          locale === "es"
            ? "Método independiente inspirado en tradiciones de regresión profunda (no afiliado a QHHT)."
            : "Independent method inspired by deep regression traditions (not affiliated with QHHT).",
      },
    ],
    [locale]
  );

  const miniFilterItems = useMemo(() => {
    return locale === "es"
      ? [
          "Eres sensible, intuitivo y ya no quieres plantillas genéricas.",
          "Quieres estructura para tus dones (ofertas, sistemas, contenedores).",
          "Sientes que la tecnología es parte de tu misión — no tu enemiga.",
          "Estás listo para construir algo real en los próximos 6–12 meses.",
        ]
      : [
          "You’re sensitive, intuitive, and done with generic templates.",
          "You want structure around your gifts (offers, systems, containers).",
          "You feel tech is part of the mission—not the enemy.",
          "You’re ready to build something real in the next 6–12 months.",
        ];
  }, [locale]);

  return (
    <main
      aria-label="Main Content"
      className="relative flex flex-col min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]"
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

      {/* 🜂 HERO SECTION (Option A) */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        {/* Top label */}
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          Nelson Dario
        </p>

        {/* Archetype line */}
        <p className="text-[12px] md:text-sm text-[var(--text-base)]/70 mb-6 max-w-xl">
          {locale === "es"
            ? "Arquitecto de sistemas luminosos para visionarios sensibles."
            : "Architect of luminous systems for sensitive visionaries."}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-heading text-[var(--color-gold)] text-glow mb-6 leading-tight">
          {locale === "es" ? (
            <>
              Código. Conciencia. <br className="hidden md:block" /> Coherencia.
            </>
          ) : (
            <>
              Code. Consciousness. <br className="hidden md:block" /> Coherence.
            </>
          )}
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          {locale === "es" ? (
            <>
              Un puente entre <span className="text-[var(--color-gold)]">tecnología</span> y{" "}
              <span className="text-[var(--color-gold)]">espíritu</span>—para que tus sistemas,
              tu trabajo y tu vida cuenten la misma verdad.
            </>
          ) : (
            <>
              I bridge <span className="text-[var(--color-gold)]">technology</span> and{" "}
              <span className="text-[var(--color-gold)]">spirit</span>—so your systems, your work,
              and your life all tell the same truth.
            </>
          )}
        </p>

        {/* Micro-story */}
        <p className="max-w-2xl mt-6 text-[var(--text-base)]/75 leading-relaxed">
          {locale === "es" ? (
            <>
              No estás aquí para escapar del mundo. Estás aquí para{" "}
              <span className="text-[var(--color-gold)] font-semibold">reescribirlo</span>—con claridad,
              soberanía y amor.
              <br className="hidden md:block" />
              Te ayudo a traducir lo invisible en <span className="font-semibold">diseño limpio</span>,{" "}
              <span className="font-semibold">IA serena</span> y{" "}
              <span className="font-semibold">guía del Ser Superior</span> que funciona en la vida real.
            </>
          ) : (
            <>
              You&apos;re not here to escape the world. You&apos;re here to{" "}
              <span className="text-[var(--color-gold)] font-semibold">rewrite it</span>—with clarity,
              sovereignty, and love.
              <br className="hidden md:block" />
              I help you translate the unseen into <span className="font-semibold">clean design</span>,{" "}
              <span className="font-semibold">calm AI</span>, and{" "}
              <span className="font-semibold">Higher Self guidance</span> that actually works in real life.
            </>
          )}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href={`/${locale}/services`}
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            {locale === "es" ? "Explorar el trabajo" : "Explore the Work"}
          </Link>

          <Link
            href={`/${locale}/book`}
            className="btn-outline hover:scale-105 transform"
          >
            {locale === "es" ? "Reservar Sesión de Resonancia" : "Book a Resonance Check"}
          </Link>
        </div>

        {/* Symbolic anchors (3 pillars) */}
        <div className="mt-12 w-full max-w-5xl grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.title} href={p.link} className="group block">
              <motion.article
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="h-full p-7 rounded-2xl border text-left
                           border-[var(--color-gold)]/20
                           bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/40
                           hover:border-[var(--color-gold)] hover:bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/60
                           backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/55 mb-2">
                  {p.subtitle}
                </p>

                <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3 group-hover:text-glow transition-all">
                  {p.title}
                </h3>

                <p className="text-sm text-[var(--text-base)]/75 leading-relaxed">{p.desc}</p>

                {p.note && (
                  <p className="mt-3 text-[11px] text-[var(--text-base)]/55 leading-relaxed">
                    {p.note}
                  </p>
                )}

                <div className="mt-5 text-xs uppercase tracking-widest font-semibold text-[var(--color-gold)]/85 group-hover:text-[var(--color-gold)]">
                  {locale === "es" ? "Entrar" : "Enter"}{" "}
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </motion.article>
            </Link>
          ))}
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
        <h2 className="section-title">
          {locale === "es" ? "La Gran Integración" : "The Great Integration"}
        </h2>

        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          {locale === "es" ? (
            <>
              Estamos pasando de la era del &quot;esfuerzo&quot; a la era de la &quot;alineación&quot;.
              Mi trabajo es sostener la <span className="font-semibold">estructura</span> (Web &amp; IA) y la{" "}
              <span className="font-semibold">guía</span> (Ser Superior &amp; Estrategia) para navegar este cambio con
              soberanía y paz.
            </>
          ) : (
            <>
              We are moving from the age of &quot;Hustle&quot; to the age of &quot;Alignment.&quot;
              My work is to provide the <span className="font-semibold">structure</span> (Web &amp; AI) and the{" "}
              <span className="font-semibold">guidance</span> (Higher Self &amp; Strategy) you need to navigate this
              shift with sovereignty and peace.
            </>
          )}
        </p>

        {/* Mini filter moved here (below Mission) */}
        <div
          className="mt-10 max-w-3xl w-full text-left rounded-2xl border border-[var(--color-gold)]/15
                     bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/30 backdrop-blur-sm p-7"
        >
          <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-4">
            {locale === "es" ? "Esto es para ti si…" : "This is for you if…"}
          </h4>

          <ul className="space-y-3 text-[var(--text-base)]/75 text-sm">
            {miniFilterItems.map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]/70 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
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
        <h2 className="section-title">
          {locale === "es" ? "¿Por dónde empezamos?" : "Where do we begin?"}
        </h2>

        <p className="text-[var(--text-base)]/80 mb-10 text-lg max-w-2xl mx-auto">
          {locale === "es"
            ? "No tienes que navegar la complejidad solo. Encontremos el hilo que te devuelve a la claridad."
            : "You don't have to navigate the complexity alone. Let's find the thread that leads you back to clarity."}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/book`}
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            {locale === "es" ? "Reservar" : "Book a Resonance Check"}
          </Link>

          <Link
            href={`/${locale}/services#deep-work`}
            className="btn-outline hover:scale-105 transform"
          >
            {locale === "es" ? "Explorar el Trabajo del Alma" : "Explore Soul Work"}
          </Link>
        </div>
      </motion.section>

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
              "Helping sensitive visionaries and leaders bridge technology, Human Design, and Higher Self guidance through design, AI, and soul-aligned hypnosis work.",
            url: "https://nelsondario.com",
            sameAs: [
              "https://www.instagram.com/nelsondario.co",
              "https://www.tiktok.com/@conversationswithlumina",
              "https://www.youtube.com/@NelsonDario",
            ],
            knowsAbout: [
              "Human Design",
              "Web Development",
              "AI Automation",
              "Hypnotherapy",
              "Regression Hypnotherapy",
              "Higher Self Guidance",
              "Consciousness",
            ],
          }),
        }}
      />
    </main>
  );
}
