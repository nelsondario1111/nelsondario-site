interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="p-8 border border-gold/20 rounded-2xl hover:border-gold transition-all text-center">
      <h3 className="text-xl font-heading text-gold mb-4">{title}</h3>
      <p className="text-softwhite/70">{description}</p>
    </div>
  );
}
