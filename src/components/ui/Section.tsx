// components/ui/Section.tsx
import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
  const sectionClasses = [
    "relative",
    "py-12",
    "md:py-16",
    "lg:py-20",
    "px-6",
    "md:px-8",
    "lg:px-10",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={sectionClasses}>
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {(title || subtitle) && (
          <header className="max-w-3xl">
            {title && (
              <h2 className="text-2xl font-semibold text-[color:var(--text-strong)] md:text-3xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-2 text-sm md:text-base text-[color:var(--text-soft)]">
                {subtitle}
              </p>
            )}
          </header>
        )}

        {children && <div>{children}</div>}
      </div>
    </section>
  );
}
