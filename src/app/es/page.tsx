"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

type Pillar = {
  title: string;
  subtitle: string;
  desc: string;
  link: string;
};

const pillars: Pillar[] = [
  {
    title: "Sitios Web Rápidos",
    subtitle: "Diseño + Rendimiento",
    desc: "Sitios claros, rápidos y orientados a conversión para negocios de servicios en EN/ES.",
    link: "/es/services#packages",
  },
  {
    title: "SEO Local + Contenido",
    subtitle: "Visibilidad",
    desc: "Estructura de páginas y contenido para mejorar posicionamiento local y confianza.",
    link: "/es/services#packages",
  },
  {
    title: "Automatizaciones con IA",
    subtitle: "Sistemas",
    desc: "Flujos de intake, seguimiento y agenda para responder mejor y cerrar más rápido.",
    link: "/es/services#packages",
  },
];

const miniFilterItems = [
  "Quieres un sitio que te genere leads de forma consistente.",
  "Necesitas automatizar seguimiento sin perder cercanía con clientes.",
  "Buscas crecer con procesos claros, no con más caos.",
  "Estás listo para ejecutar un plan concreto en los próximos 90 días.",
];

export default function HomePageEs() {
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
      aria-label="Contenido principal"
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
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center
                   bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)]
                   to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">
          Nelson Dario
        </p>

        <p className="text-[12px] md:text-sm text-[var(--text-base)]/70 mb-6 max-w-xl">
          Diseño web + automatizaciones con IA para negocios de servicios.
        </p>

        <h1 className="text-4xl md:text-6xl font-heading text-[var(--color-gold)] text-glow mb-6 leading-tight">
          Sitios Web. Automatización. <br className="hidden md:block" /> Crecimiento.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Construye una operación digital clara que atraiga mejores leads y sostenga tu entrega sin fricción.
        </p>

        <p className="mt-4 text-sm md:text-base text-[var(--text-base)]/72">
          Sitios web rápidos + automatizaciones de IA (EN/ES).
        </p>

        <p className="max-w-2xl mt-6 text-[var(--text-base)]/75 leading-relaxed">
          Tu negocio no necesita más ruido. Necesita enfoque, estructura y ejecución.
          <br className="hidden md:block" />
          Te ayudo a convertir estrategia en <span className="font-semibold">sitio rápido</span>,{" "}
          <span className="font-semibold">sistemas de seguimiento</span> y{" "}
          <span className="font-semibold">automatizaciones confiables</span>.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/es/services#packages"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Ver paquetes
          </Link>

          <Link
            href="/es/book"
            className="btn-outline hover:scale-105 transform"
          >
            Reservar llamada estratégica
          </Link>
        </div>

        <div className="mt-12 w-full max-w-5xl grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.link} className="group block">
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
                  {pillar.subtitle}
                </p>

                <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3 group-hover:text-glow transition-all">
                  {pillar.title}
                </h3>

                <p className="text-sm text-[var(--text-base)]/75 leading-relaxed">{pillar.desc}</p>

                <div className="mt-5 text-xs uppercase tracking-widest font-semibold text-[var(--color-gold)]/85 group-hover:text-[var(--color-gold)]">
                  Entrar <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </motion.section>

      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      <motion.section
        id="mission"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-24 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">Claridad de Negocio + Sistemas</h2>

        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          Mi trabajo une <span className="font-semibold">sitio web</span>, <span className="font-semibold">SEO local</span> y{" "}
          <span className="font-semibold">automatizaciones</span> para que tu operación sea simple, medible y sostenible.
        </p>

        <div
          className="mt-10 max-w-3xl w-full text-left rounded-2xl border border-[var(--color-gold)]/15
                     bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/30 backdrop-blur-sm p-7"
        >
          <h4 className="text-sm uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-4">
            Esto es para ti si…
          </h4>

          <ul className="space-y-3 text-[var(--text-base)]/75 text-sm">
            {miniFilterItems.map((item) => (
              <li key={item} className="flex gap-3 items-start">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]/70 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

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
        <h2 className="section-title">¿Por dónde empezamos?</h2>

        <p className="text-[var(--text-base)]/80 mb-10 text-lg max-w-2xl mx-auto">
          Si quieres avanzar con dirección clara, empieza con el paquete que mejor encaja con tu etapa.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/es/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Reservar llamada estratégica
          </Link>

          <Link
            href="/es/services#packages"
            className="btn-outline hover:scale-105 transform"
          >
            Ver paquetes
          </Link>
        </div>
      </motion.section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nelson Dario",
            jobTitle: "Diseñador Web y Especialista en Automatización con IA",
            description:
              "Ayudo a negocios de servicios a crecer con sitios web rápidos, SEO local y automatizaciones con IA.",
            url: "https://nelsondario.com/es",
            inLanguage: "es",
            sameAs: [
              "https://www.instagram.com/nelsondario.co",
              "https://www.youtube.com/@NelsonDario",
            ],
            knowsAbout: [
              "Diseño Web",
              "SEO Local",
              "Automatización con IA",
              "CRM",
              "Sistemas de Captación",
            ],
          }),
        }}
      />
    </main>
  );
}
