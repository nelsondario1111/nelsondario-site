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
        title: locale === "es" ? "Sitios Web Rápidos" : "Fast Websites",
        subtitle: locale === "es" ? "Diseño + Rendimiento" : "Design + Performance",
        desc:
          locale === "es"
            ? "Sitios claros, rápidos y orientados a conversión para negocios de servicios en EN/ES."
            : "Clear, high-performance websites built to convert for service businesses in EN/ES.",
        link: `/${locale}/services#packages`,
      },
      {
        title: locale === "es" ? "SEO Local + Contenido" : "Local SEO + Content",
        subtitle: locale === "es" ? "Visibilidad" : "Visibility",
        desc:
          locale === "es"
            ? "Estructura de páginas y contenido para mejorar posicionamiento local y confianza."
            : "Page and content systems designed to improve local ranking and buyer trust.",
        link: `/${locale}/services#packages`,
      },
      {
        title: locale === "es" ? "Automatizaciones con IA" : "AI Automations",
        subtitle: locale === "es" ? "Sistemas" : "Systems",
        desc:
          locale === "es"
            ? "Flujos de intake, seguimiento y agenda para responder mejor y cerrar más rápido."
            : "Intake, follow-up, and scheduling workflows to improve response times and close rates.",
        link: `/${locale}/services#packages`,
      },
    ],
    [locale]
  );

  const miniFilterItems = useMemo(() => {
    return locale === "es"
      ? [
          "Quieres un sitio que te genere leads de forma consistente.",
          "Necesitas automatizar seguimiento sin perder cercanía con clientes.",
          "Buscas crecer con procesos claros, no con más caos.",
          "Estás listo para ejecutar un plan concreto en los próximos 90 días.",
        ]
      : [
          "You want a website that consistently generates qualified leads.",
          "You need follow-up automation without losing human client experience.",
          "You want clear systems for growth instead of more complexity.",
          "You are ready to execute a concrete 90-day plan.",
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
            ? "Diseño web + automatizaciones con IA para negocios de servicios."
            : "Web design + AI automations for service businesses."}
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-heading text-[var(--color-gold)] text-glow mb-6 leading-tight">
          {locale === "es" ? (
            <>
              Sitios Web. Automatización. <br className="hidden md:block" /> Crecimiento.
            </>
          ) : (
            <>
              Websites. Automation. <br className="hidden md:block" /> Growth.
            </>
          )}
        </h1>

        {/* Subhead */}
        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          {locale === "es" ? (
            <>
              Construye una operación digital clara que atraiga mejores leads y sostenga tu entrega sin fricción.
            </>
          ) : (
            <>
              Build a clear digital operation that attracts better leads and supports delivery without friction.
            </>
          )}
        </p>

        <p className="mt-4 text-sm md:text-base text-[var(--text-base)]/72">
          {locale === "es"
            ? "Sitios web rápidos + automatizaciones de IA calmadas (EN/ES)."
            : "Fast websites + calm AI automations (EN/ES)."}
        </p>

        {/* Micro-story */}
        <p className="max-w-2xl mt-6 text-[var(--text-base)]/75 leading-relaxed">
          {locale === "es" ? (
            <>
              Tu negocio no necesita más ruido. Necesita enfoque, estructura y ejecución.
              <br className="hidden md:block" />
              Te ayudo a convertir estrategia en <span className="font-semibold">sitio rápido</span>,{" "}
              <span className="font-semibold">sistemas de seguimiento</span> y{" "}
              <span className="font-semibold">automatizaciones confiables</span>.
            </>
          ) : (
            <>
              Your business does not need more noise. It needs focus, structure, and execution.
              <br className="hidden md:block" />
              I help you turn strategy into <span className="font-semibold">fast web delivery</span>,{" "}
              <span className="font-semibold">lead follow-up systems</span>, and{" "}
              <span className="font-semibold">reliable automations</span>.
            </>
          )}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href={`/${locale}/services#packages`}
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            {locale === "es" ? "Ver paquetes" : "View Packages"}
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
        <h2 className="section-title">{locale === "es" ? "Claridad de Negocio + Sistemas Calmados" : "Business Clarity + Calm Systems"}</h2>

        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          {locale === "es" ? (
            <>
              Mi trabajo es unir <span className="font-semibold">sitio web</span>, <span className="font-semibold">SEO local</span> y{" "}
              <span className="font-semibold">automatizaciones</span> para que tu operación sea simple, medible y sostenible.
            </>
          ) : (
            <>
              My work connects <span className="font-semibold">website</span>, <span className="font-semibold">local SEO</span>, and{" "}
              <span className="font-semibold">automation</span> so your operation becomes simple, measurable, and sustainable.
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
            ? "Si quieres avanzar con una dirección clara, empecemos por el paquete correcto para tu etapa."
            : "If you want to move forward with clear direction, start with the package that fits your current stage."}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href={`/${locale}/book`}
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            {locale === "es" ? "Reservar" : "Book a Resonance Check"}
          </Link>

          <Link
            href={`/${locale}/services#packages`}
            className="btn-outline hover:scale-105 transform"
          >
            {locale === "es" ? "Ver paquetes" : "View Packages"}
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
            jobTitle: "Web Designer & AI Automation Specialist",
            description:
              "Helping service businesses build fast websites, local SEO systems, and calm AI automations.",
            url: "https://nelsondario.com",
            sameAs: [
              "https://www.instagram.com/nelsondario.co",
              "https://www.youtube.com/@NelsonDario",
            ],
            knowsAbout: [
              "Web Development",
              "Web Design",
              "Local SEO",
              "AI Automation",
              "Conversion Optimization",
              "Content Systems",
            ],
          }),
        }}
      />
    </main>
  );
}
