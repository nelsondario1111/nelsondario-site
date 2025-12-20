interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="py-20 px-6 text-center bg-black/40 backdrop-blur-sm">
      {title && (
        <h2 className="text-3xl md:text-4xl font-heading text-gold mb-8">
          {title}
        </h2>
      )}
      <div className="max-w-4xl mx-auto">{children}</div>
    </section>
  );
}
