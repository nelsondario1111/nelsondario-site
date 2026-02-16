"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

type Service = {
  title: string;
  subtitle?: string;
  tag: string;
  desc: string;
  bullets: string[];
  link: string;
  btnText: string;
  isCollab?: boolean;
};

type ProductizedPackage = {
  title: string;
  outcome: string;
  inclusions: string[];
  bestFor: string;
  startingAt: string;
};

type IntensiveOffer = {
  title: string;
  duration: string;
  summary: string;
  bestFor: string;
};

type DigitalProduct = {
  title: string;
  summary: string;
  format: string;
};

const productizedPackages: ProductizedPackage[] = [
  {
    title: "Sitio Starter",
    outcome: "Un sitio claro y calmado que genera clientes rapido.",
    inclusions: [
      "Mensajeria enfocada + arquitectura de pagina.",
      "Paginas base listas para EN/ES.",
      "Implementacion responsive mobile-first.",
      "Flujo simple de contacto + guia de handoff.",
    ],
    bestFor: "Nuevas ofertas, negocios en etapa inicial y relanzamientos limpios.",
    startingAt: "Desde ...",
  },
  {
    title: "Sitio Growth + Sistema de Contenido",
    outcome: "Web + flujo de contenido que multiplica visibilidad y confianza.",
    inclusions: [
      "Arquitectura expandida de servicios + narrativa.",
      "Estructura de recursos/articulos para visibilidad constante.",
      "SEO base + optimizacion de rendimiento.",
      "Flujo editorial para publicar con consistencia.",
    ],
    bestFor: "Founders listos para crecer autoridad sin sumar caos.",
    startingAt: "Desde ...",
  },
  {
    title: "Upgrade de Automatizacion",
    outcome: "Seguimiento, formularios y agenda con IA calmada y sistemas limpios.",
    inclusions: [
      "Flujo de recepcion con IA para intake inicial.",
      "Logica de seguimiento en CRM + plantillas de respuesta.",
      "Automatizaciones para recordatorios y nurture.",
      "Handoff al equipo + playbook operativo.",
    ],
    bestFor: "Negocios de servicios que necesitan captar y responder de forma confiable.",
    startingAt: "Desde ...",
  },
];

const intensiveOffers: IntensiveOffer[] = [
  {
    title: "Intensivo de Claridad de Negocio",
    duration: "90 min",
    summary:
      "Reset estrategico enfocado para definir tu siguiente oferta, mensaje y prioridades de ejecucion.",
    bestFor: "Empresarios en punto de inflexion que necesitan direccion clara ahora.",
  },
  {
    title: "Intensivo IA + Alineacion de Marca",
    duration: "90 min",
    summary:
      "Alinea voz de marca, experiencia de cliente y stack de automatizacion para escalar con consistencia.",
    bestFor: "Equipos listos para crecer sin perder claridad operativa.",
  },
];

const digitalProducts: DigitalProduct[] = [
  {
    title: "Kit Web Bilingue",
    summary: "Estructura y textos para lanzar EN/ES sin friccion.",
    format: "Templates + checklist",
  },
  {
    title: "Template para Contratistas",
    summary: "Plantilla moderna para posicionar local y convertir.",
    format: "Template + prompts de contenido",
  },
  {
    title: "Planos de Automatizacion con IA",
    summary: "Flujos para captacion, seguimiento y gestion.",
    format: "Blueprints + SOP base",
  },
];

const webServices: Service[] = [
  {
    title: "Construccion Web de Conversion",
    subtitle: "Diseno Web + Rendimiento",
    tag: "Core Build",
    desc: "Sitios rapidos y claros, pensados para convertir trafico calificado en conversaciones agendadas.",
    bullets: [
      "Arquitectura de paginas por intencion de compra.",
      "Implementacion optimizada para mobile y trafico local.",
      "Estructura de copy orientada a conversion.",
      "Soporte bilingue (EN/ES).",
    ],
    link: "/es/contact?topic=web-ai",
    btnText: "Iniciar proyecto web",
  },
  {
    title: "SEO Local + Sistema de Contenido",
    subtitle: "Visibilidad",
    tag: "Growth",
    desc: "Sistema practico de SEO local y contenido para que tu visibilidad crezca mes a mes.",
    bullets: [
      "Estructura local de paginas de servicio + metadata.",
      "Flujo de contenido realista para tu capacidad actual.",
      "Medicion base para llamadas y formularios.",
      "Ritmo de actualizacion sostenible para el equipo.",
    ],
    link: "/es/contact?topic=local-seo",
    btnText: "Mejorar visibilidad",
  },
  {
    title: "Soporte de Operaciones Financieras",
    subtitle: "Con Fanny",
    tag: "Colaboracion",
    desc: "Soporte practico en orden financiero e impuestos para mantener la operacion limpia mientras crecen ingresos.",
    bullets: [
      "Revision operativa de impuestos (enfoque Canada/CRA).",
      "Limpieza de procesos financieros base.",
      "Apoyo para decisiones de crecimiento.",
    ],
    link: "/es/contact?topic=other",
    btnText: "Explorar colaboracion",
    isCollab: true,
  },
];

const automationServices: Service[] = [
  {
    title: "Sistema IA de Intake + Seguimiento",
    subtitle: "Automatizacion",
    tag: "Client Flow",
    desc: "Automatiza primera respuesta, calificacion y seguimiento para que los leads no se pierdan.",
    bullets: [
      "Intake unificado desde formularios y canales.",
      "Secuencias de seguimiento para leads no agendados.",
      "Logica de agenda segun tipo de servicio.",
      "Plantillas de respuesta para velocidad y consistencia.",
    ],
    link: "/es/contact?topic=web-ai",
    btnText: "Automatizar captacion",
  },
  {
    title: "Limpieza de CRM + Capa de Automatizacion",
    subtitle: "Operaciones",
    tag: "Sistemas",
    desc: "Ordena tu CRM y conecta automatizaciones para quitar trabajo administrativo repetitivo.",
    bullets: [
      "Limpieza de pipeline y estandares de etapas.",
      "Automatizacion de tareas y recordatorios.",
      "Tracking de estado en todo el ciclo de lead.",
      "Documentacion para handoff de equipo.",
    ],
    link: "/es/contact?topic=web-ai",
    btnText: "Mejorar operaciones",
  },
];

const trainingServices: Service[] = [
  {
    title: "Workshops + Entrenamiento de Equipo",
    tag: "Enablement",
    desc: "Sesiones practicas para alinear flujo de trabajo, automatizacion y estandares de entrega.",
    bullets: [
      "Onboarding de flujos con IA para equipos.",
      "Entrenamiento SOP para intake y seguimiento.",
      "Workshops de implementacion de nuevos sistemas.",
      "Q&A para casos limite y bloqueos de ejecucion.",
    ],
    link: "/es/contact?topic=speaking-events",
    btnText: "Solicitar workshop",
  },
];

export default function ServicesPageEs() {
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
      aria-label="Servicios"
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
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:40px_40px] animate-[twinkle_12s_linear_infinite]"
      />

      <motion.section
        id="services-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center px-6 py-28 text-center bg-gradient-to-b from-[var(--bg-base)] via-[var(--bg-base)] to-[color-mix(in_srgb,var(--bg-base)_80%,black)]"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-4">Servicios</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Sistemas Web + Automatizacion para Crecer
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Servicios practicos para negocios de servicios que necesitan mejor visibilidad, operaciones limpias y flujo constante de leads.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link href="/es/services#packages" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Ver paquetes
          </Link>
          <Link href="/es/contact" className="btn-outline hover:scale-105 transform">
            Hacer una pregunta
          </Link>
        </div>
      </motion.section>

      <div aria-hidden="true" className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent" />

      <motion.section
        id="services-overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-16 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">Construido para Ejecucion Real</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          El objetivo es simple: mejores leads, respuesta mas rapida y entrega mas limpia.
          Combinamos web, SEO local y automatizacion para un crecimiento medible y sostenible.
        </p>
      </motion.section>

      <motion.section
        id="packages"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Ofertas Base</p>
            <h2 className="section-title mb-3">Formas de trabajar juntos</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Paquetes de alcance fijo para crear momentum, claridad y flujo de caja consistente.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {productizedPackages.map((pkg) => (
              <ProductizedPackageCard key={pkg.title} item={pkg} locale="es" />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="intensives"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">High-Touch</p>
            <h2 className="section-title mb-3">Intensivos</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Opciones de alto nivel para acelerar decisiones y ejecucion.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {intensiveOffers.map((item) => (
              <IntensiveCard key={item.title} item={item} locale="es" />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="digital-products"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]/95"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Capa Semi-Pasiva</p>
            <h2 className="section-title mb-3">Productos Digitales</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Activos practicos para implementar mas rapido entre sesiones.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {digitalProducts.map((item) => (
              <DigitalProductCard key={item.title} item={item} locale="es" />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="design-technology"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_88%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Web + Visibilidad</p>
            <h2 className="section-title mb-3">Web y Sistemas de Crecimiento</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Primero construimos la base: claridad de oferta, paginas que convierten y visibilidad local.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="guidance"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Automatizacion</p>
            <h2 className="section-title mb-3">Flujo de Clientes + Operaciones</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Reemplaza cuellos de botella manuales con automatizaciones simples que tu equipo pueda mantener.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {automationServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="operations"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 md:px-10 bg-gradient-to-t from-[color-mix(in_srgb,black_35%,var(--bg-base))] via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">Enablement</p>
            <h2 className="section-title mb-3">Entrenamiento + Implementacion</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Workshops y acompanamiento para asegurar que los sistemas realmente se usen.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-1">
            {trainingServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="services-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Empieza Donde Estas</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Si quieres sistemas mas limpios y mejor flujo de leads, podemos definir tu siguiente paso hoy.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/es/book" className="btn-primary hover:scale-105 transform hover:animate-pulseGlow">
            Reservar llamada estrategica
          </Link>
          <ToContactButtons />
        </div>
      </motion.section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Nelson Dario",
            url: "https://nelsondario.com/es/services",
            areaServed: ["Toronto", "Canada", "Remoto"],
            serviceType: [
              "Diseno Web",
              "SEO Local",
              "Automatizacion con IA",
              "Sistemas CRM",
              "Intensivos de Negocio",
            ],
          }),
        }}
      />
    </main>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`p-7 rounded-2xl border flex flex-col gap-4 relative overflow-hidden h-full
                 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/90 backdrop-blur-sm
                 shadow-md hover:shadow-lg transition-all
                 ${
                   service.isCollab
                     ? "border-[var(--color-gold)]/40"
                     : "border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]"
                 }
                 `}
    >
      {service.isCollab && (
        <div className="absolute top-0 right-0 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-[9px] uppercase tracking-wider px-3 py-1 rounded-bl-lg border-b border-l border-[var(--color-gold)]/20">
          Colab
        </div>
      )}

      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-base)]/60 mb-2">{service.tag}</p>

        <h3 className="text-xl font-heading text-[var(--color-gold)] mb-1">{service.title}</h3>

        {service.subtitle && (
          <p className="text-xs uppercase tracking-wider text-[var(--text-base)]/50 mb-2">{service.subtitle}</p>
        )}

        <p className="text-[var(--text-base)]/80 text-sm leading-relaxed mt-2">{service.desc}</p>
      </div>

      <ul className="mt-2 space-y-2 text-sm text-[var(--text-base)]/70 flex-grow">
        {service.bullets.map((item) => (
          <li key={item} className="flex gap-2 items-start">
            <span className="mt-[5px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/5">
        <Link href={service.link} className="text-[11px] uppercase tracking-widest font-semibold flex items-center gap-2 group text-[var(--color-gold)]">
          <span>{service.btnText}</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.article>
  );
}

function ProductizedPackageCard({ item, locale }: { item: ProductizedPackage; locale: "en" | "es" }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="p-7 rounded-2xl border border-[var(--color-gold)]/20 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/90 shadow-md hover:shadow-lg hover:border-[var(--color-gold)] transition-all h-full flex flex-col"
    >
      <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/80 mb-4">{item.outcome}</p>

      <ul className="space-y-2 text-sm text-[var(--text-base)]/75">
        {item.inclusions.map((bullet) => (
          <li key={bullet} className="flex gap-2 items-start">
            <span className="mt-[6px] w-1 h-1 rounded-full bg-[var(--color-gold)] shrink-0 opacity-70" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-[var(--text-base)]/65">
        <span className="uppercase tracking-[0.18em] text-[var(--text-base)]/50">Ideal para</span>
        <br />
        {item.bestFor}
      </p>

      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)]/85">{item.startingAt}</p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10 flex flex-wrap gap-2">
        <Link href={`/${locale}/book`} className="btn-primary text-[11px] px-4 py-2">
          Reservar llamada estrategica
        </Link>
        <Link href={`/${locale}/contact`} className="btn-outline text-[11px] px-4 py-2">
          Hacer una pregunta
        </Link>
      </div>
    </motion.article>
  );
}

function IntensiveCard({ item, locale }: { item: IntensiveOffer; locale: "en" | "es" }) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="p-7 rounded-2xl border border-[var(--color-gold)]/18 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-md hover:border-[var(--color-gold)] transition-all h-full flex flex-col"
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-base)]/55 mb-2">{item.duration}</p>
      <h3 className="text-xl font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/78">{item.summary}</p>
      <p className="mt-4 text-sm text-[var(--text-base)]/68">
        <span className="font-semibold text-[var(--text-base)]/78">Ideal para:</span> {item.bestFor}
      </p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10">
        <Link href={`/${locale}/contact?topic=intensive`} className="btn-outline text-[11px] px-4 py-2">
          Aplicar / Solicitar invitacion
        </Link>
      </div>
    </motion.article>
  );
}

function DigitalProductCard({ item, locale }: { item: DigitalProduct; locale: "en" | "es" }) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="p-6 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/85 shadow-sm hover:border-[var(--color-gold)] hover:shadow-md transition-all h-full flex flex-col"
    >
      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-base)]/55 mb-2">{item.format}</p>
      <h3 className="text-lg font-heading text-[var(--color-gold)] mb-3">{item.title}</h3>
      <p className="text-sm text-[var(--text-base)]/75">{item.summary}</p>
      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10">
        <Link href={`/${locale}/resources#resource-waitlist`} className="btn-outline text-[11px] px-4 py-2">
          Unirme a lista de espera
        </Link>
      </div>
    </motion.article>
  );
}
