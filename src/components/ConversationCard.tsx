interface ConversationCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

export function ConversationCard({ title, description, videoUrl }: ConversationCardProps) {
  return (
    <div className="rounded-xl border border-gold/30 p-6 text-center bg-black/30 hover:border-gold transition-all">
      <h3 className="text-xl font-heading text-gold mb-3">{title}</h3>
      <p className="text-softwhite/70 mb-4">{description}</p>
      <iframe
        className="w-full aspect-video rounded-lg border border-gold/20"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}
