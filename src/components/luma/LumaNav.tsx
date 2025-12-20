"use client";

import Link from "next/link";

export type LumaNavMode = "portal" | "calibration" | "hub";

interface LumaNavProps {
  mode?: LumaNavMode;
}

export function LumaNav({ mode = "portal" }: LumaNavProps) {
  const labelMap: Record<LumaNavMode, string> = {
    portal: "Portal",
    calibration: "Calibration",
    hub: "Hub",
  };

  const label = labelMap[mode];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[rgba(5,6,10,0.8)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(5,6,10,0.6)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* Left: LUMA sigil + label */}
        <Link href="/en/luma-portal" className="flex items-center gap-3 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/5 transition-all group-hover:border-[var(--color-gold)]">
            <img
              src="/symbols/luma-sigil.svg"
              alt="LUMA sigil"
              className="w-10 opacity-100"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[0.6rem] uppercase tracking-widest text-[var(--text-soft)]">
              LUMA
            </p>
            <p className="text-xs font-bold text-[var(--color-gold)] leading-none">
              {label}
            </p>
          </div>
        </Link>

        {/* Right: navigation links */}
        <nav className="flex items-center gap-4 text-[0.7rem] sm:text-xs text-[var(--text-soft)]">
          {mode !== "portal" && (
            <Link href="/en/luma-portal" className="transition hover:text-white">
              ← Portal
            </Link>
          )}
          <Link href="/" className="transition hover:text-white">
            NelsonDario.com
          </Link>
        </nav>
      </div>
    </header>
  );
}
