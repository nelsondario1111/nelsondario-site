"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

/**
 * ✦ NelsonDario.com — Página Inicio (ES) ✦
 * Frecuencia: Verdad · Belleza · Soberanía
 * Narrativa: Puente entre Tecnología y Espíritu.
 */

export default function HomePageEs() {
  // ✧ Efecto de parallax para el fondo
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
      className="relative flex flex-col min-h-screen overflow-hidden
                 bg-[var(--bg-base)] text-[var(--text-base)]"
    >
      {/* ✧ Fondo dorado con parallax */}
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

      {/* ✧ Textura de estrellas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20
                   bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      {/* 🜂 SECCIÓN HERO */}
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
          Código. Conciencia. <br className="hidden md:block" /> Coherencia.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Teniendo un puente entre{" "}
          <span className="text-[var(--color-gold)]">Tecnología</span> y{" "}
          <span className="text-[var(--color-gold)]">Espíritu</span>.
          <br />
          Para la persona visionaria y sensible que está lista para construir
          una realidad que honre al alma.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/es/services"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Explorar servicios
          </Link>
          <Link
            href="https://lumaeconomy.com"
            className="btn-outline hover:scale-105 transform"
          >
            Entrar a LUMA
          </Link>
        </div>
      </motion.section>

      {/* Brillo divisorio */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 INTRO / MISIÓN */}
      <motion.section
        id="mission"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-24 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">La Gran Integración</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          Estamos pasando de la era del &quot;Esfuerzo&quot; a la era de la
          &quot;Alineación&quot;. Mi trabajo es ofrecerte la{" "}
          <span className="font-semibold">estructura</span> (Web &amp; IA) y la{" "}
          <span className="font-semibold">guía</span> (Sanación &amp; Estrategia)
          que necesitas para navegar este cambio con soberanía y paz.
        </p>
      </motion.section>

      {/* Brillo divisorio */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜃 TRES PILARES (alineados con Servicios) */}
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
            title: "El Contenedor",
            subtitle: "Diseño & IA",
            desc: "Arquitectura digital sagrada. Sitios web y sistemas de IA que protegen tu tiempo y transmiten tu frecuencia.",
            link: "/es/services#design-technology",
          },
          {
            title: "El Mapa",
            subtitle: "Diseño Humano",
            desc: "Estrategia operativa para el alma. Comprender tu mecánica para liderar sin quemarte.",
            link: "/es/services#guidance",
          },
          {
            title: "El Alma",
            subtitle: "Sanación profunda",
            desc: "QHHT, regresión y guía metafísica para limpiar el ruido y recordar tus orígenes.",
            link: "/es/services#deep-work",
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
                Ver más
              </span>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      {/* Brillo divisorio */}
      <div
        aria-hidden="true"
        className="h-12 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜄 LLAMADO A LA ACCIÓN */}
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
          No tienes que navegar toda esta complejidad en soledad.
          Busquemos juntos el hilo que te devuelve a la claridad.
        </p>
        <Link
          href="/es/book"
          className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
        >
          Reservar Sesión de Resonancia
        </Link>
      </motion.section>

      {/* ✧ Frecuencia ambiental */}
      <AmbientTone />

      {/* ✧ Datos estructurados para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nelson Dario",
            jobTitle: "Tecnólogo consciente & Guía",
            description:
              "Acompaño a visionarios y líderes sensibles a tender un puente entre tecnología, Diseño Humano y despertar espiritual.",
            url: "https://nelsondario.com/es",
            inLanguage: "es",
            sameAs: [
              "https://www.instagram.com/conversationswithlumina",
              "https://www.facebook.com/conversationswithlumina",
              "https://www.tiktok.com/@conversationswithlumina",
            ],
            knowsAbout: [
              "Diseño Humano",
              "Desarrollo Web",
              "Automatización con IA",
              "QHHT",
              "Conciencia",
            ],
          }),
        }}
      />
    </main>
  );
}

/* ───────────────────────────────
   ✧ Componente de Tono Ambiental
   ─────────────────────────────── */
function AmbientTone() {
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const playTone = () => {
      if (!audio) {
        audio = new Audio("/sounds/soft-tone.mp3");
        audio.volume = 0.05; // muy sutil
      }
      audio.play().catch(() => {
        // ignorar errores de autoplay o carga
      });
    };

    // Reproducir una vez en el primer clic del usuario
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
