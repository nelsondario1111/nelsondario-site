import Link from "next/link";

export default function LocalSeoChecklistPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Resource · Checklist</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Local SEO Checklist
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          A practical baseline for service businesses that want better local visibility and cleaner lead flow.
        </p>

        <section className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/80 p-7 mb-8">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Core Checklist</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/78">
            <li>Claim and verify your Google Business Profile.</li>
            <li>Align business name, address, and phone across website + listings.</li>
            <li>Create one focused service page per offer and city/area served.</li>
            <li>Use descriptive page titles and meta descriptions with local intent.</li>
            <li>Add internal links between homepage, service pages, and contact page.</li>
            <li>Collect and respond to client reviews consistently.</li>
            <li>Keep mobile speed and Core Web Vitals in a healthy range.</li>
            <li>Track calls/forms by source so you know what channels work.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/70 p-7 mb-10">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Weekly Rhythm</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/75">
            <li>1. Update one service page with clearer proof or FAQ.</li>
            <li>2. Publish one short local post or insight tied to client questions.</li>
            <li>3. Request one review from a recent satisfied client.</li>
            <li>4. Check form/call conversion data and refine weak pages.</li>
          </ul>
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
