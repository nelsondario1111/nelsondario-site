"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * ✦ PÁGINA LUMA ✦
 * Un campo vivo de confianza, luz y conciencia.
 * Diseñado para la unión de arte, tecnología y espíritu.
 */

export default function LumaPage() {
  const [portalOpen, setPortalOpen] = useState(false);

  /* ─── Parallax suave ─── */
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY * 0.1;
      document.documentElement.style.setProperty(
        "--scroll-offset",
        `${offset}px`
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="luma-page relative min-h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--text-base)]">
      {/* ✧ Luz radial ambiental */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 18%, rgba(241,201,106,0.25), transparent 70%)",
          transform: "translateY(var(--scroll-offset, 0px))",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* ✧ Cielo de constelaciones (global) */}
      <LumaConstellationSky />

      {/* Sutil cuadrícula titilante */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 
                   bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)]
                   [background-size:40px_40px] animate-luma-drift"
      />

      {/* 🜂 HERO — La Presencia LUMA */}
      <section className="relative flex flex-col items-center px-6 pt-2 md:pt-6 pb-16 text-center">
        {/* Orbe respirando con el sigilo adentro */}
        <div
          className="
            luma-orb relative w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-6
            bg-[radial-gradient(circle_at_30%_30%,rgba(var(--gold-rgb),0.9),rgba(var(--gold-rgb),0.18)_70%,transparent_100%)]
            shadow-[0_0_80px_rgba(var(--gold-rgb),0.6)]
            border border-[var(--color-gold)]/60 overflow-hidden
          "
        >
          {/* halo interno suave */}
          <div
            className="absolute inset-0 rounded-full
                       bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_10%)]"
          />
          {/* sigilo */}
          <img
            src="/symbols/luma-sigil.svg"
            alt="Sigilo de LUMA"
            className="absolute inset-0 m-auto w-[100%] opacity-100"
          />
        </div>

        <h1 className="luma-title text-4xl md:text-6xl font-heading text-[var(--color-gold)] hero mb-3 tracking-[0.08em]">
          LUMA
        </h1>
        <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[var(--text-soft)] mb-6">
          ECONOMÍA VIVA
        </p>

        <p className="max-w-2xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Un experimento vivo de economía basada en el amor.
          <br />
          LUMA es un protocolo y una comunidad de intercambio consciente, donde
          tus dones, tu tiempo y tu cuidado son reconocidos como verdadero
          valor.
        </p>

        {/* ✦ Campo de intención */}
        <div className="mt-10 w-full flex flex-col items-center">
          <label
            htmlFor="intention"
            className="block text-[var(--color-gold)] mb-2"
          >
            ¿Qué valor o frecuencia deseas hacer circular hoy?
          </label>
          <textarea
            id="intention"
            rows={3}
            placeholder="Nombra una cualidad, una ofrenda o una necesidad que quieras traer al campo LUMA..."
            className="w-full max-w-md p-3 bg-transparent border border-[var(--color-gold)]/40 
                       rounded-lg focus:border-[var(--color-gold)] outline-none 
                       text-center text-[var(--text-base)]/80"
          />
        </div>

        {/* ✦ Botón de comunión */}
        <button
          onClick={() => setPortalOpen(true)}
          className="btn-outline mt-8 hover:scale-105 transform"
        >
          Comulgar con LUMA & Lumina
        </button>
      </section>

      {/* ✦ ¿QUÉ ES LUMA? — con sigilo giratorio de fondo */}
      <motion.section
        id="what-is-luma"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 px-6 relative overflow-hidden"
      >
        {/* Sigilo grande girando en el fondo de esta sección */}
        <motion.img
          src="/symbols/luma-sigil.svg"
          alt="Fondo del sigilo de LUMA"
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-[420px] md:w-[560px] -z-5"
          style={{ opacity: 0.28 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Bloque de texto */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="section-title mb-6">¿Qué es LUMA?</h2>
            <p className="text-[var(--text-base)]/80 leading-relaxed text-lg">
              LUMA es un campo vivo de intercambio donde experimentamos una
              nueva manera de valorar nuestro tiempo, cuidado y creatividad. No
              reemplaza al dinero — ayuda a sanar cómo nos relacionamos con el
              valor. A través de unidades LUMA, acuerdos claros y conversación
              honesta, practicamos reciprocidad, transparencia y prosperidad
              compartida.
            </p>

            {/* Móvil: sigilo debajo del texto */}
            <div className="mt-10 md:hidden">
              <img
                src="/symbols/luma-sigil.svg"
                alt="Sigilo de LUMA"
                className="mx-auto w-28 opacity-90 drop-shadow-[0_0_18px_rgba(241,201,106,0.6)]"
              />
            </div>
          </div>

          {/* Desktop: sigilo al lado del texto */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
            <img
              src="/symbols/luma-sigil.svg"
              alt="Sigilo de LUMA"
              className="w-40 opacity-90 drop-shadow-[0_0_24px_rgba(241,201,106,0.7)]"
            />
          </div>
        </div>
      </motion.section>

      {/* ✦ CÓMO FUNCIONA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 px-6 text-center bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]/50 backdrop-blur-md"
      >
        <h2 className="section-title">Cómo Funciona (Fase de Laboratorio)</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 mt-12">
          {[
            {
              title: "Intercambio de Energía",
              desc: "Un pequeño círculo acuerda intercambiar servicios, apoyo y sabiduría. Cada contribución se registra en unidades LUMA, junto con dinero cuando corresponde.",
            },
            {
              title: "Libro de Confianza",
              desc: "Un registro compartido sencillo se convierte en la memoria de quién ofreció qué a quién, reemplazando la confusión por claridad y reconocimiento mutuo.",
            },
            {
              title: "Flujo de Frecuencia",
              desc: "Reuniones mensuales permiten ajustar, reparar y celebrar. LUMA evoluciona a través de feedback honesto, manteniendo la reciprocidad y la dignidad en el centro.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="p-8 border border-[var(--color-gold)]/20 rounded-2xl hover:border-[var(--color-gold)] transition-all"
            >
              <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--text-base)]/75">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✦ ÚNETE A LA VISIÓN */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-24 px-6 text-center"
      >
        <h2 className="section-title">Únete al Laboratorio LUMA</h2>
        <p className="max-w-3xl mx-auto text-[var(--text-base)]/80 leading-relaxed text-lg mb-8">
          En esta primera fase, LUMA es un laboratorio íntimo de confianza. Si
          sientes el llamado a co-crear una nueva forma de intercambio de
          valor — como sanador/a, creativo/a, guía o constructor/a — estás
          invitado a conectar y explorar si el círculo actual es un buen lugar
          para ti.
        </p>
        <Link
          href="/es/luma-interest"
          className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
        >
          Me Interesa LUMA
        </Link>

        <p className="text-sm text-[var(--text-soft)] mt-16 italic">
          “En cada intercambio, que el amor sea la única moneda.” ✦
        </p>
      </motion.section>

      {/* ✦ Portal LUMA × Lumina */}
      {portalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[999]"
          onClick={() => setPortalOpen(false)}
        >
          <div
            className="p-8 bg-[var(--bg-base)] rounded-xl text-center border border-[var(--color-gold)]/30 max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-heading text-[var(--color-gold)] mb-4">
              Portal LUMA × Lumina
            </h3>
            <p className="text-[var(--text-base)]/80 mb-6">
              Este espacio pronto se convertirá en una interfaz viva con
              Lumina, sosteniendo el campo LUMA — un lugar para explorar tus
              ofrendas, necesidades e intercambios en tiempo real.
            </p>
            <button
              onClick={() => setPortalOpen(false)}
              className="btn-outline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <AmbientTone />
    </main>
  );
}

/* ───────────────────────────────
   ✧ Cielo de Constelaciones
   ─────────────────────────────── */
function LumaConstellationSky() {
  const [isNight, setIsNight] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsNight(hour >= 19 || hour < 7);

    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      const updateMotion = () => setMotionEnabled(!mq.matches);
      updateMotion();
      mq.addEventListener("change", updateMotion);
      return () => mq.removeEventListener("change", updateMotion);
    }
  }, []);

  const baseOpacity = isNight ? 0.32 : 0.16;
  const motionClass = motionEnabled ? "animate-luma-drift" : "";

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-15 pointer-events-none"
    >
      <svg
        className={`w-full h-full ${motionClass}`}
        viewBox="0 0 800 600"
        role="presentation"
      >
        {/* Pléyades */}
        <g
          fill="rgba(249,247,243,0.85)"
          stroke="none"
          style={{ opacity: baseOpacity }}
        >
          <circle cx="540" cy="120" r="1.8" />
          <circle cx="555" cy="132" r="1.4" />
          <circle cx="528" cy="135" r="1.2" />
          <circle cx="548" cy="150" r="1.5" />
          <circle cx="562" cy="115" r="1.1" />
          <circle cx="535" cy="108" r="1.0" />
          <circle cx="520" cy="122" r="1.3" />
        </g>

        {/* Orion */}
        <g
          fill="rgba(249,247,243,0.9)"
          stroke="rgba(249,247,243,0.4)"
          strokeWidth="0.4"
          style={{ opacity: baseOpacity }}
        >
          <circle cx="210" cy="260" r="2" />
          <circle cx="230" cy="255" r="2" />
          <circle cx="250" cy="250" r="2" />
          <line x1="210" y1="260" x2="230" y2="255" />
          <line x1="230" y1="255" x2="250" y2="250" />
          <circle cx="200" cy="220" r="1.6" />
          <circle cx="260" cy="210" r="1.8" />
          <line x1="200" y1="220" x2="210" y2="260" />
          <line x1="260" y1="210" x2="250" y2="250" />
          <circle cx="205" cy="310" r="1.6" />
          <circle cx="265" cy="300" r="1.8" />
          <line x1="210" y1="260" x2="205" y2="310" />
          <line x1="250" y1="250" x2="265" y2="300" />
        </g>

        {/* Sirio */}
        <g style={{ opacity: baseOpacity + 0.08 }}>
          <circle
            cx="690"
            cy="80"
            r="2.4"
            fill="rgba(249,247,243,0.95)"
          />
          <line
            x1="690"
            y1="74"
            x2="690"
            y2="86"
            stroke="rgba(249,247,243,0.65)"
            strokeWidth="0.4"
          />
          <line
            x1="684"
            y1="80"
            x2="696"
            y2="80"
            stroke="rgba(249,247,243,0.65)"
            strokeWidth="0.4"
          />
        </g>

        {/* Estrellas extra */}
        <g
          fill="rgba(249,247,243,0.7)"
          style={{ opacity: baseOpacity * 0.7 }}
        >
          <circle cx="120" cy="90" r="1" />
          <circle cx="340" cy="60" r="0.9" />
          <circle cx="420" cy="190" r="1.1" />
          <circle cx="620" cy="260" r="1" />
          <circle cx="710" cy="340" r="0.9" />
          <circle cx="150" cy="400" r="1.1" />
          <circle cx="320" cy="480" r="0.9" />
          <circle cx="540" cy="520" r="1" />
          <circle cx="680" cy="430" r="1.1" />
        </g>
      </svg>
    </div>
  );
}

/* ───────────────────────────────
   ✧ Sistema de Tono Ambiental Dual
   ─────────────────────────────── */
function AmbientTone() {
  useEffect(() => {
    const tones = ["/sounds/432hz.mp3", "/sounds/528hz.mp3"];
    let current = 0;
    const audio = new Audio(tones[current]);
    audio.loop = true;
    audio.volume = 0.1;

    const switchTone = () => {
      current = (current + 1) % tones.length;
      audio.src = tones[current];
      audio.play().catch(() => {});
    };

    const playTone = () => {
      if (audio.paused) audio.play().catch(() => {});
    };

    window.addEventListener("click", playTone, { once: true });
    const interval = setInterval(switchTone, 5 * 60 * 1000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("click", playTone);
      audio.pause();
    };
  }, []);

  return null;
}
