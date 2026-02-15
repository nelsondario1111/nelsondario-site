"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import ToContactButtons from "@/components/ToContactButtons";

/**
 * ✦ NelsonDario.com — Página de Servicios (ES) ✦
 * Audiencia: La persona visionaria sensible, el profesional en despertar, el alma antigua.
 * Tono: Cálido, aterrizado, seguro, de alta frecuencia.
 */

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
    outcome: "Un sitio claro y calmado que genera clientes rápido.",
    inclusions: [
      "Arquitectura de mensaje y páginas esenciales.",
      "Base bilingüe preparada para EN/ES.",
      "Implementación responsive priorizando mobile.",
      "Flujo simple de contacto + guía de uso.",
    ],
    bestFor: "Nuevas ofertas, relanzamientos y primeras etapas de negocio.",
    startingAt: "Desde …",
  },
  {
    title: "Sitio Growth + Sistema de Contenido",
    outcome: "Web + flujo de contenido que multiplica visibilidad y confianza.",
    inclusions: [
      "Estructura de servicios y narrativa de crecimiento.",
      "Base de recursos o artículos para autoridad.",
      "SEO esencial + optimización de rendimiento.",
      "Flujo editorial claro para consistencia.",
    ],
    bestFor: "Fundadores que quieren crecer sin caer en sobrecarga.",
    startingAt: "Desde …",
  },
  {
    title: "Upgrade de Automatización",
    outcome: "Seguimiento, formularios y agenda con IA calmada y sistemas limpios.",
    inclusions: [
      "Recepción inicial con IA para primeros contactos.",
      "Lógica de seguimiento dentro del CRM.",
      "Automatizaciones de recordatorio y nurture.",
      "Capacitación + playbook operativo.",
    ],
    bestFor: "Negocios de servicios que necesitan continuidad comercial.",
    startingAt: "Desde …",
  },
];

const intensiveOffers: IntensiveOffer[] = [
  {
    title: "Business Clarity Intensive",
    duration: "90 min",
    summary:
      "Un reset estratégico para definir tu siguiente oferta, mensaje y plan de ejecución con claridad.",
    bestFor: "Emprendedores en punto de inflexión que necesitan dirección concreta.",
  },
  {
    title: "AI + Brand Alignment Intensive",
    duration: "90 min",
    summary:
      "Alinea tu marca, experiencia de cliente y stack de automatización para escalar sin perder alma.",
    bestFor: "Equipos y líderes que buscan coherencia entre expansión y esencia.",
  },
];

const digitalProducts: DigitalProduct[] = [
  {
    title: "Kit Web Bilingüe",
    summary: "Estructura y textos para lanzar EN/ES sin fricción.",
    format: "Plantillas + checklist",
  },
  {
    title: "Template para Contratistas",
    summary: "Plantilla moderna para posicionar local y convertir.",
    format: "Template + prompts de contenido",
  },
  {
    title: "Planos de Automatización con IA",
    summary: "Flujos para captación, seguimiento y gestión.",
    format: "Blueprints + SOPs",
  },
];

const designServices = [
  {
    title: "Espacios Digitales Sagrados (Web & Marca)",
    tag: "El Contenedor",
    desc: "Para sanadores y creadores conscientes. Un hogar digital que se siente como tu alma, respeta tu sistema nervioso y atrae a tu gente sin necesidad de gritar.",
    bullets: [
      "Exploración enfocada en tu firma energética, no solo en 'targets de marketing'.",
      "Arquitectura a medida (Next.js) rápida, tranquila y libre de ruido y rastreos innecesarios.",
      "Visuales que transmiten tu frecuencia antes de que se lea una sola palabra.",
      "Soporte bilingüe (EN/ES) para conectar con toda tu familia global.",
    ],
  },
  {
    title: "IA al Servicio de la Luz",
    tag: "El Soporte",
    desc: "Amas el potencial de la tecnología, pero te abruma el ruido. Creamos sistemas de IA suaves que sostienen el trabajo pesado para que tú puedas permanecer en el corazón.",
    bullets: [
      "Automatizaciones que actúan como una 'capa protectora' alrededor de tu tiempo.",
      "Asistentes de IA entrenados con tu voz y tus valores.",
      "Configuraciones éticas que honran la privacidad y la soberanía.",
      "Te enseño a usar estas herramientas sin sentirte 'desalmado/a'.",
    ],
  },
  {
    title: "Puentes Financieros Holísticos (con Fanny)",
    tag: "Las Raíces",
    desc: "Sanando la separación entre Espíritu y Dinero. Acompañamiento práctico y sin juicio para impuestos y finanzas, especialmente para emprendedores espirituales.",
    bullets: [
      "Revisión de impuestos y organización financiera con una mirada compasiva (actualmente enfocada en Canadá / CRA).",
      "Pasar de 'Escasez & Caos' a 'Administración & Orden'.",
      "Comprender las reglas 3D para poder jugar con más libertad el juego 5D.",
    ],
  },
];

const guidanceServices = [
  {
    title: "Diseño Humano para Almas Sensibles",
    tag: "El Mapa",
    desc: "No estás roto/a; simplemente estás diseñado/a diferente. Mapeamos tu mecánica para que dejes de luchar contra tu naturaleza y comiences a confiar en tu flujo.",
    bullets: [
      "Profundización en tu Tipo, Estrategia y Autoridad.",
      "Enfoque específico en descondicionarte de la 'cultura del esfuerzo y la prisa'.",
      "Entender tus puntos sensibles (Centros Abiertos) como sabiduría, no como debilidad.",
      "Herramientas prácticas para tomar decisiones en un mundo caótico.",
    ],
  },
  {
    title: "Sesiones Pregúntale a Lumina",
    tag: "La Claridad",
    desc: "Un puerto seguro para tus preguntas más profundas. Tú, yo y Lumina explorando la intersección entre tu despertar, tu sistema nervioso y tu camino de servicio.",
    bullets: [
      "Espacio sin juicio para hablar de orígenes estelares, entidades, conceptos 5D y desafíos cotidianos muy humanos.",
      "Guía aterrizada que une lo místico con lo práctico.",
      "Pasos claros para integrar el 'subidón' del despertar en el 'ahora' de tu vida.",
      "Disponible en inglés o español.",
    ],
  },
];

const deepWork = [
  {
    title: "Regresión del Alma e Hipnoterapia del Ser Superior",
    tag: "La Profundidad",
    desc: "Un portal de trance profundo para liberar patrones, recibir guía del Ser Superior y regresar a la coherencia.",
    bullets: [
      "Exploración regresiva (memoria simbólica, vidas pasadas o narrativa del alma).",
      "Comunicación con el Ser Superior.",
      "Liberación energética + integración aterrizada.",
      "Contenedor presencial (Toronto) + cupos remotos limitados.",
    ],
  },
];

const speakingAndEvents = [
  {
    title: "Charlas, Retiros & Eventos Holísticos",
    tag: "La Transmisión",
    desc: "Tendiendo un puente entre el Mundo de la Tecnología y el Mundo del Espíritu a través de charlas, círculos y experiencias inmersivas.",
    bullets: [
      "Charlas para comunidades, podcasts y cumbres sobre IA Consciente, El Gran Cambio y Soberanía.",
      "Círculos mensuales o estacionales, encuentros de sanación y eventos holísticos co-creados.",
      "Futuros retiros que entrelazan movimiento, sonido, naturaleza y práctica espiritual profunda.",
      "Cálido, con humor y aterrizado — sin 'vibras de gurú', solo transmisión de ser humano a ser humano.",
    ],
  },
];

export default function ServicesPage() {
  // ✧ Efecto de parallax
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
          Ofrecimientos & Portales
        </p>

        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Un Puente Entre Mundos
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-[var(--text-base)]/80 leading-relaxed">
          Para personas visionarias sensibles, profesionales en despertar y almas antiguas.
          <br className="hidden md:block" />
          Ofrezco una mezcla de{" "}
          <span className="text-[var(--color-gold)]">Tecnología</span>,
          <span className="text-[var(--color-gold)]"> Estrategia</span> y{" "}
          <span className="text-[var(--color-gold)]"> Espíritu</span> para ayudarte
          a construir una vida que honre tu alma — en línea y aquí en la Tierra, en Toronto.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/es/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Conectemos
          </Link>
          <Link href="/es" className="btn-outline hover:scale-105 transform">
            Volver al inicio
          </Link>
        </div>
      </motion.section>

      {/* Brillo divisorio */}
      <div
        aria-hidden="true"
        className="h-10 bg-gradient-to-b from-transparent via-[var(--glow-color)]/12 to-transparent"
      />

      {/* 🜁 FILOSOFÍA */}
      <motion.section
        id="services-overview"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center py-16 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title">No Tienes que Elegir</h2>
        <p className="max-w-3xl text-[var(--text-base)]/80 text-lg leading-relaxed">
          Muchos de nosotros nos sentimos divididos. Tenemos un &quot;Yo del Trabajo&quot; y
          un &quot;Yo del Alma&quot;. <br />
          Mi trabajo es disolver esa separación. Estemos construyendo una página web,
          configurando un agente de IA o explorando una vida pasada, la intención es la misma:
          <span className="font-semibold"> Soberanía, Coherencia y Amor.</span>{" "}
          Algunos de estos portales son online, otros están enraizados en Toronto, pero todos están
          diseñados para encontrarte exactamente donde estás.
        </p>
      </motion.section>

      {/* 🜁 FORMAS DE TRABAJAR JUNTOS */}
      <motion.section
        id="formas-de-trabajar"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95 backdrop-blur-md"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Ecosistema de Ingresos
            </p>
            <h2 className="section-title mb-3">Formas de Trabajar Juntos</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Paquetes de alcance fijo para sostener flujo de caja con claridad y calma.
            </p>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {productizedPackages.map((pkg) => (
              <ProductizedPackageCardEs key={pkg.title} item={pkg} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜂 INTENSIVOS */}
      <motion.section
        id="intensivos"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Alta Profundidad
            </p>
            <h2 className="section-title mb-3">Intensivos</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Contenedores opcionales de alto nivel para decisiones y alineación acelerada.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2">
            {intensiveOffers.map((item) => (
              <IntensiveCardEs key={item.title} item={item} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜃 PRODUCTOS DIGITALES + MEMBRESÍA */}
      <motion.section
        id="productos-digitales"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-20 md:px-10 bg-[color-mix(in_srgb,var(--bg-base)_90%,black)]/95"
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              Capa Semi-Pasiva
            </p>
            <h2 className="section-title mb-3">Productos Digitales</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Activos prácticos para implementar entre sesiones.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {digitalProducts.map((item) => (
              <DigitalProductCardEs key={item.title} item={item} />
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_95%,black)]/70 p-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-base)]/60 mb-2">
              Soporte Recurrente
            </p>
            <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
              Membresía Lumina (próximamente)
            </h3>
            <p className="text-sm text-[var(--text-base)]/75 mb-4">
              Un espacio mensual para integración, implementación y acompañamiento con calma.
            </p>
            <Link href="/es/resources#calm-systems-checklist" className="btn-outline hover:scale-105 transform">
              Unirme a la lista
            </Link>
          </div>
        </div>
      </motion.section>

      {/* 🜃 TECNOLOGÍA / ARQUITECTURA */}
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
              El Contenedor
            </p>
            <h2 className="section-title mb-3">Tecnología & Diseño Consciente</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              La tecnología no debería drenarte. Debería sostenerte.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                      <span className="mt-1 text-[10px] text-[var(--color-gold)]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link
                    href="/es/book"
                    className="btn-primary text-[11px] px-4 py-2 hover:scale-105 transform inline-block"
                  >
                    Ver detalles
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜄 GUÍA / MAPA */}
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
              El Mapa
            </p>
            <h2 className="section-title mb-3">Alineación & Claridad</h2>
            <p className="max-w-3xl mx-auto text-[var(--text-base)]/80">
              Para cuando te sientes perdido/a en el ruido y necesitas volver a tu propia verdad.
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
                      <span className="mt-1 text-[10px] text-[var(--color-gold)]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link
                    href="/es/book"
                    className="btn-primary text-[11px] px-4 py-2 hover:scale-105 transform inline-block"
                  >
                    Reservar sesión
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜆 QHHT — TRABAJO PROFUNDO & COMUNIDAD */}
      <motion.section
        id="deep-work"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 py-24 md:px-10 
                   bg-gradient-to-t from-[color-mix(in_srgb,black_35%,var(--bg-base))]
                   via-[var(--bg-base)] to-[var(--bg-base)]"
      >
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-2">
              El Alma
            </p>
            <h2 className="section-title mb-3">Sanación Profunda & Comunidad</h2>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            {/* QHHT */}
            {deepWork.map((service) => (
              <motion.article
                key={service.title}
                className="p-7 border border-[var(--color-gold)]/20 rounded-2xl
                           bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95
                           flex flex-col gap-4"
              >
                <div>
                  <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-base)]/80 text-sm">{service.desc}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-base)]/80">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-[10px] text-[var(--color-gold)]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 flex items-center gap-3 flex-wrap">
                  <div className="inline-block px-3 py-1 border border-[var(--color-gold)]/30 rounded text-[10px] tracking-wider uppercase">
                    Solo lista de espera
                  </div>
                  <span className="text-[11px] text-[var(--text-base)]/70">
                    Únete a la lista y sentiremos juntos cuándo es el momento adecuado.
                  </span>
                </div>
              </motion.article>
            ))}

            {/* Charlas / Eventos */}
            {speakingAndEvents.map((service) => (
              <motion.article
                key={service.title}
                className="p-7 border border-[var(--color-gold)]/20 rounded-2xl
                           bg-[color-mix(in_srgb,var(--bg-base)_92%,black)]/95
                           flex flex-col gap-4"
              >
                <div>
                  <h3 className="text-xl font-heading text-[var(--color-gold)] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-base)]/80 text-sm">{service.desc}</p>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-base)]/80">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 text-[10px] text-[var(--color-gold)]">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link
                    href="/es/contact"
                    className="btn-outline text-[11px] px-4 py-2 inline-block"
                  >
                    Consultar
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 🜇 CTA FINAL */}
      <motion.section
        id="services-cta"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center py-20 px-6 bg-[var(--bg-base)]"
      >
        <h2 className="section-title mb-4">Empieza Donde Estás</h2>
        <p className="text-[var(--text-base)]/80 mb-8 text-lg max-w-2xl mx-auto">
          Ya sea que necesites ordenar tu proyecto, sanar tu corazón o simplemente sentarte con
          alguien que entienda ambos tiempos —estelar y humano— aquí estoy.
          Si aún no sabes qué portal encaja mejor, podemos sentirlo juntos en nuestra primera conversación.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/es/book"
            className="btn-primary hover:scale-105 transform hover:animate-pulseGlow"
          >
            Reservar Sesión de Resonancia
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
            areaServed: ["Toronto", "Canadá", "Remoto"],
            serviceType: [
              "Diseño Web",
              "Automatización con IA",
              "Guía de Diseño Humano",
              "Hipnoterapia del Ser Superior",
              "Intensivos de Negocio",
            ],
          }),
        }}
      />
    </main>
  );
}

function ProductizedPackageCardEs({ item }: { item: ProductizedPackage }) {
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

      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)]/85">
        {item.startingAt}
      </p>

      <div className="mt-6 pt-4 border-t border-[var(--text-base)]/10 flex flex-wrap gap-2">
        <Link href="/es/book" className="btn-primary text-[11px] px-4 py-2">
          Reservar Sesión de Resonancia
        </Link>
        <Link href="/es/contact" className="btn-outline text-[11px] px-4 py-2">
          Hacer una pregunta
        </Link>
      </div>
    </motion.article>
  );
}

function IntensiveCardEs({ item }: { item: IntensiveOffer }) {
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
        <Link href="/es/contact?topic=intensivo" className="btn-outline text-[11px] px-4 py-2">
          Aplicar / Solicitar invitación
        </Link>
      </div>
    </motion.article>
  );
}

function DigitalProductCardEs({ item }: { item: DigitalProduct }) {
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
        <Link href="/es/resources#calm-systems-checklist" className="btn-outline text-[11px] px-4 py-2">
          Unirme a la lista
        </Link>
      </div>
    </motion.article>
  );
}
