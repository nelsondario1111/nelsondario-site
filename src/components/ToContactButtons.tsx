"use client";

import Link from "next/link";

export default function ToContactButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Primary — Book a call */}
      <Link
        href="/en/book"
        className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-gold-strong)] bg-[color:var(--color-gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-midnight)] shadow-sm transition hover:bg-[color:var(--color-gold-strong)] hover:shadow-md"
      >
        Book a call
      </Link>

      {/* Secondary — Email */}
      <a
        href="mailto:info@nelsondario.com"
        className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--gold-rgb),0.45)] bg-[rgba(5,8,22,0.55)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--color-gold)] shadow-sm backdrop-blur-sm transition hover:bg-[rgba(var(--gold-rgb),0.14)] hover:text-[color:var(--color-gold-strong)]"
      >
        Email me
      </a>
    </div>
  );
}
