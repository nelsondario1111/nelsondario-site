import Link from "next/link";

type ToolItem = {
  category: string;
  tools: string[];
  note: string;
};

const toolSets: ToolItem[] = [
  {
    category: "Investigación + Estrategia",
    tools: ["ChatGPT", "Perplexity"],
    note: "Para síntesis, borradores de posicionamiento y definición de ofertas.",
  },
  {
    category: "Contenido + Entrega",
    tools: ["Notion AI", "Google Docs AI"],
    note: "Para SOPs, reutilización de contenido y notas de proyecto.",
  },
  {
    category: "Capa de Automatización",
    tools: ["Zapier", "Make", "Airtable"],
    note: "Para conectar formularios, CRM y secuencias de seguimiento.",
  },
  {
    category: "Comunicación con Clientes",
    tools: ["Loom", "Calendly"],
    note: "Para mantener comunicación asíncrona y agenda más limpia.",
  },
];

export default function AiToolsPageEs() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Recurso · Herramientas</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Herramientas de IA que Sí Uso
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          Stack práctico para negocios de servicios que quieren automatizar sin saturarse de herramientas.
        </p>

        <div className="space-y-6 mb-10">
          {toolSets.map((item) => (
            <section
              key={item.category}
              className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/80 p-6"
            >
              <h2 className="text-xl font-heading text-[var(--color-gold)] mb-3">{item.category}</h2>
              <p className="text-sm text-[var(--text-base)]/80 mb-3">{item.tools.join(" · ")}</p>
              <p className="text-sm text-[var(--text-base)]/72">{item.note}</p>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/70 p-7 mb-10">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Regla de Selección</h2>
          <p className="text-sm text-[var(--text-base)]/75">
            Si una herramienta no reduce tiempos de respuesta, protege foco o mejora la experiencia
            del cliente, no se queda en el stack.
          </p>
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
