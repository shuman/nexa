export default function StatusBadge() {
  return (
    <div className="stagger mb-12 flex justify-center">
      <div className="group inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-5 py-2.5 backdrop-blur-sm transition-all hover:border-gold/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span className="text-sm font-medium tracking-wide text-gold">
          Website Under Development
        </span>
      </div>
    </div>
  );
}
