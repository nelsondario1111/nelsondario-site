import Link from "next/link";

export default function LocalSeoChecklistPageEs() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Recurso · Checklist</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Checklist de SEO Local
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          Base práctica para negocios de servicios que quieren más visibilidad local y flujo de leads más claro.
        </p>

        <section className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/80 p-7 mb-8">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Checklist Base</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/78">
            <li>Reclamar y verificar tu perfil de Google Business Profile.</li>
            <li>Alinear nombre, dirección y teléfono en web y listados.</li>
            <li>Crear una página de servicio enfocada por oferta y zona.</li>
            <li>Optimizar títulos y metadescripciones con intención local.</li>
            <li>Conectar enlaces internos entre inicio, servicios y contacto.</li>
            <li>Solicitar y responder reseñas de clientes de forma constante.</li>
            <li>Revisar velocidad móvil y Core Web Vitals.</li>
            <li>Medir llamadas/formularios por canal para decidir mejor.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/70 p-7 mb-10">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Ritmo Semanal</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/75">
            <li>1. Mejorar una página de servicio con pruebas o FAQs.</li>
            <li>2. Publicar una nota corta sobre dudas reales de clientes.</li>
            <li>3. Pedir una reseña a un cliente satisfecho reciente.</li>
            <li>4. Revisar conversiones y ajustar páginas débiles.</li>
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/es/resources" className="btn-outline text-[11px] px-4 py-2">
            Volver a Recursos
          </Link>
          <Link href="/es/services#packages" className="btn-primary text-[11px] px-4 py-2">
            Ver paquetes
          </Link>
        </div>
      </div>
    </main>
  );
}
