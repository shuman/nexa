export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.12),transparent_60%),radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(99,102,241,0.08),transparent_55%)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />

      {/* Floating orbs */}
      <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px]" />
    </div>
  );
}
