// components/PageHero.tsx
import React from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "soft" | "plain";
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "left",
  variant = "soft",
  children,
}: PageHeroProps) {
  const isCentered = align === "center";

  const wrapperAlignment = isCentered ? "items-center text-center" : "items-start text-left";

  const cardBackground =
    variant === "soft"
      ? "bg-[color:var(--bg-secondary)]/80 shadow-sm border border-[rgba(0,0,0,0.04)]"
      : "bg-transparent";

  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:px-8 lg:px-10">
        <div
          className={`flex flex-col gap-4 rounded-3xl ${wrapperAlignment} ${cardBackground} 
                      backdrop-blur-sm px-6 py-8 md:px-10 md:py-10`}
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
              {eyebrow}
            </p>
          )}

          <h1 className="text-3xl font-semibold leading-tight text-[color:var(--text-strong)] md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="max-w-2xl text-sm md:text-base text-[color:var(--text-soft)]">
              {subtitle}
            </p>
          )}

          {children && (
            <div className={isCentered ? "mt-4 flex flex-wrap justify-center gap-3" : "mt-4 flex flex-wrap gap-3"}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
