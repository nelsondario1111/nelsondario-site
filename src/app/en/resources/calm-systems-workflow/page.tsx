import Link from "next/link";

export default function CalmSystemsWorkflowPage() {
  return (
    <main className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-base)] px-6 py-24 md:px-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--text-base)]/60 mb-3">Resource · Workflow</p>
        <h1 className="text-3xl md:text-5xl font-heading text-[var(--color-gold)] text-glow mb-6">
          Calm Systems Intake + Follow-up Workflow
        </h1>
        <p className="text-[var(--text-base)]/80 text-lg leading-relaxed mb-10">
          A simple flow to move leads from first inquiry to booked call without chaos.
        </p>

        <section className="rounded-2xl border border-[var(--color-gold)]/15 bg-[color-mix(in_srgb,var(--bg-base)_94%,black)]/80 p-7 mb-8">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Workflow Stages</h2>
          <ol className="space-y-3 text-sm text-[var(--text-base)]/78 list-decimal list-inside">
            <li><span className="font-semibold">Capture:</span> Route all inquiries to one intake form.</li>
            <li><span className="font-semibold">Tag:</span> Assign source + service interest automatically.</li>
            <li><span className="font-semibold">Acknowledge:</span> Send immediate confirmation with timeline.</li>
            <li><span className="font-semibold">Qualify:</span> Use 2-3 decision questions before booking.</li>
            <li><span className="font-semibold">Follow-up:</span> Trigger 2 reminder sequences over 7 days.</li>
            <li><span className="font-semibold">Book:</span> Send clean scheduling link only when qualified.</li>
            <li><span className="font-semibold">Review:</span> Track booked, no-response, and not-fit outcomes.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-[var(--text-base)]/12 bg-[var(--bg-base)]/70 p-7 mb-10">
          <h2 className="text-xl font-heading text-[var(--color-gold)] mb-4">Minimum Automation Set</h2>
          <ul className="space-y-3 text-sm text-[var(--text-base)]/75">
            <li>Automatic intake confirmation email.</li>
            <li>Internal alert to CRM or inbox.</li>
            <li>48-hour follow-up for unbooked leads.</li>
            <li>Final check-in at day 7 with clear next step.</li>
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
