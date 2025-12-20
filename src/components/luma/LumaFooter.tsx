"use client";

export function LumaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-[0.65rem] uppercase tracking-widest text-[var(--text-soft)] opacity-60 md:flex-row md:items-center md:justify-between">
        <p>© {year} LUMA · Economy of Light</p>
        <p>Managed by Nelson Dario · Powered by Luma AI</p>
      </div>
    </footer>
  );
}
