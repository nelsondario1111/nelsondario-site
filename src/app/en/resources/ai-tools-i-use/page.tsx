import Link from "next/link";

type ToolItem = {
  category: string;
  tools: string[];
  note: string;
};

const toolSets: ToolItem[] = [
  {
    category: "Research + Strategy",
    tools: ["ChatGPT", "Perplexity"],
    note: "Used for synthesis, positioning drafts, and offer framing.",
  },
  {
    category: "Content + Delivery",
    tools: ["Notion AI", "Google Docs AI"],
    note: "Used for SOP drafting, content repurposing, and project notes.",
  },
  {
    category: "Automation Layer",
    tools: ["Zapier", "Make", "Airtable"],
    note: "Used to connect forms, CRM actions, and follow-up automations.",
  },
  {
    category: "Client Communication",
    tools: ["Loom", "Calendly"],
    note: "Used to keep async communication and scheduling clean.",
  },
];

export default function AiToolsPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Resource · Tools</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          AI Tools I Actually Use
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          A practical stack for service businesses that want useful automation without tool overload.
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
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Selection Rule</h2>
          <p className="text-sm text-[var(--text-base)]/75">
            If a tool does not reduce response time, protect focus, or improve client experience,
            it does not stay in the stack.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/en/resources" className="btn-outline text-[11px] px-4 py-2">
            Back to Resources
          </Link>
          <Link href="/en/services#packages" className="btn-primary text-[11px] px-4 py-2">
            View Packages
          </Link>
        </div>
      </div>
    </main>
  );
}
