import Link from "next/link";

export default function CalmSystemsWorkflowPageEs() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Recurso · Workflow</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Flujo Calm de Intake + Seguimiento
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          Flujo simple para pasar de consulta inicial a llamada reservada sin caos.
        </p>

        <section className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/80 p-7 mb-8">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Etapas del Flujo</h2>
          <ol className="space-y-3 text-sm text-[var(--text-base)]/78 list-decimal list-inside">
            <li><span className="font-semibold">Captar:</span> Centraliza consultas en un solo formulario.</li>
            <li><span className="font-semibold">Etiquetar:</span> Marca origen e interés de servicio automáticamente.</li>
            <li><span className="font-semibold">Confirmar:</span> Envía acuse inmediato con tiempos claros.</li>
            <li><span className="font-semibold">Calificar:</span> Usa 2-3 preguntas antes de agendar.</li>
            <li><span className="font-semibold">Dar seguimiento:</span> Activa 2 recordatorios en 7 días.</li>
            <li><span className="font-semibold">Agendar:</span> Comparte enlace solo al lead calificado.</li>
            <li><span className="font-semibold">Revisar:</span> Mide agendados, no respuesta y no fit.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/70 p-7 mb-10">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Automatizaciones Mínimas</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/75">
            <li>Confirmación automática al enviar formulario.</li>
            <li>Alerta interna al CRM o bandeja principal.</li>
            <li>Seguimiento a las 48 horas si no agenda.</li>
            <li>Último check-in al día 7 con siguiente paso.</li>
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
