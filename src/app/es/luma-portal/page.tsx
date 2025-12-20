"use client";

import { useState } from "react";
import Link from "next/link";

export default function LumaInterestPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: conectar con API / email / MailerLite
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] overflow-hidden">
      {/* ✧ Luz radial ambiental */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, rgba(241,201,106,0.20), transparent 70%)",
        }}
      />

      {/* Textura de cuadrícula sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-5 
                   bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)]
                   [background-size:40px_40px]"
      />

      {/* ───────────────────────────────
          ✧ Encabezado / Breadcrumb
          ─────────────────────────────── */}
      <section className="px-6 pt-16 pb-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--text-soft)] mb-4">
            LUMA · Laboratorio de Economía Viva
          </p>
          <h1 className="text-3xl md:text-4xl font-heading text-[var(--color-gold)] mb-3">
            Me Interesa LUMA
          </h1>
          <p className="text-[var(--text-base)]/80 max-w-2xl leading-relaxed">
            Esta página es para personas que sienten una resonancia genuina con{" "}
            <span className="font-semibold">LUMA</span> y quieren explorar la
            posibilidad de unirse al círculo inicial — como ayudante, sanador/a,
            creativo/a, guía o constructor/a. Responde desde el corazón; no hay
            respuestas “correctas”.
          </p>
        </div>
      </section>

      {/* ───────────────────────────────
          ✧ Diseño dos columnas
          ─────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          {/* ✧ IZQUIERDA: TARJETA FORMULARIO */}
          <div className="bg-[var(--bg-secondary)]/80 border border-[var(--color-gold)]/15 rounded-2xl shadow-xl shadow-black/5 p-6 md:p-8 backdrop-blur-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                               text-[var(--text-base)]/90 outline-none
                               focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                                 text-[var(--text-base)]/90 outline-none
                                 focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                    >
                      Ciudad / País
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                                 text-[var(--text-base)]/90 outline-none
                                 focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                  >
                    ¿Cómo sientes el llamado a participar?
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                               text-[var(--text-base)]/90 outline-none
                               focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[var(--bg-base)]">
                      Elige una opción…
                    </option>
                    <option value="offer" className="bg-[var(--bg-base)]">
                      Quiero ofrecer servicios / apoyo
                    </option>
                    <option value="receive" className="bg-[var(--bg-base)]">
                      Me gustaría recibir apoyo / guía
                    </option>
                    <option value="co-create" className="bg-[var(--bg-base)]">
                      Quiero co-crear la estructura / economía
                    </option>
                    <option value="curious" className="bg-[var(--bg-base)]">
                      Siento curiosidad y estoy explorando por ahora
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="gifts"
                    className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                  >
                    Tus principales dones, servicios o intereses
                  </label>
                  <textarea
                    id="gifts"
                    name="gifts"
                    rows={3}
                    className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                               text-[var(--text-base)]/90 outline-none
                               focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                    placeholder="Por ejemplo: coaching, sanación, diseño, tecnología, creación de comunidad, administración, música, enseñanza, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="intention"
                    className="block text-sm font-medium text-[var(--text-soft)] mb-1"
                  >
                    ¿Por qué resuena LUMA contigo en este momento?
                  </label>
                  <textarea
                    id="intention"
                    name="intention"
                    rows={4}
                    className="w-full rounded-lg border border-[var(--color-gold)]/25 bg-transparent px-3 py-2
                               text-[var(--text-base)]/90 outline-none
                               focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]"
                    placeholder="Comparte unas líneas sobre qué te llamó hasta aquí y qué esperas experimentar o co-crear."
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    Enviar mi interés en LUMA
                  </button>

                  <p className="text-xs text-[var(--text-soft)] text-center sm:text-left">
                    Leeremos tu mensaje con cuidado y te responderemos
                    personalmente si se siente alineado con el círculo actual del
                    laboratorio.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-2xl font-heading text-[var(--color-gold)] mb-3">
                  Gracias por entrar en el campo. ✧
                </h2>
                <p className="text-[var(--text-base)]/80 max-w-md mx-auto mb-6">
                  Hemos recibido tu interés en LUMA. En esta fase temprana,
                  revisamos cada mensaje de forma personal y nos pondremos en
                  contacto si el tiempo y la química se sienten correctos para el
                  círculo actual.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/es/luma" className="btn-outline">
                    Volver a la página de LUMA
                  </Link>
                  <Link href="/es/book" className="btn-primary">
                    Agendar una Conversación 1:1
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* ✧ DERECHA: CONTEXTO / COPIA */}
          <aside className="space-y-8 text-sm text-[var(--text-base)]/80">
            <div className="border border-[var(--color-gold)]/20 rounded-2xl p-5 bg-[var(--bg-secondary)]/70 backdrop-blur-sm">
              <h2 className="text-base font-heading text-[var(--color-gold)] mb-2">
                ¿Qué es el Laboratorio LUMA?
              </h2>
              <p className="leading-relaxed">
                La primera fase de LUMA es un{" "}
                <span className="font-semibold">
                  círculo pequeño y experimental
                </span>{" "}
                donde probamos intercambios reales entre personas reales —
                mezclando dinero, unidades LUMA y pura reciprocidad. No es tanto
                una plataforma, sino un campo vivo de acuerdos.
              </p>
            </div>

            <div className="border border-[var(--color-gold)]/15 rounded-2xl p-5 bg-[var(--bg-secondary)]/40">
              <h3 className="text-sm font-heading text-[var(--color-gold)] mb-2">
                ¿Para quién es?
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Sanadores/as, coaches, guías y space-holders</li>
                <li>Diseñadores/as, constructores/as y creativos/as tech</li>
                <li>
                  Personas que sienten el llamado hacia{" "}
                  <span className="font-semibold">una economía más amable</span>,
                  no solo más dinero
                </li>
              </ul>
            </div>

            <div className="border border-[var(--color-gold)]/10 rounded-2xl p-5 bg-[var(--bg-secondary)]/30">
              <h3 className="text-sm font-heading text-[var(--color-gold)] mb-2">
                ¿Qué pasa después de enviar este formulario?
              </h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Leemos tu mensaje con presencia y sin prisa.</li>
                <li>
                  Si se alinea con el experimento actual, te invitaremos a una
                  breve llamada o intercambio de voz.
                </li>
                <li>
                  Juntos decidiremos si y cómo te unes a la siguiente ronda de
                  intercambios.
                </li>
              </ol>
              <p className="mt-3 text-xs text-[var(--text-soft)] italic">
                Sin presión, sin embudo, sin urgencia — solo resonancia honesta
                y claridad mutua.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
