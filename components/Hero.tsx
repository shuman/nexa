import Image from "next/image";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <section
      id="top"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pb-16 pt-10 text-center sm:px-8 sm:pt-16"
    >
      {/* Logo */}
      <div className="stagger mb-8 flex flex-col items-center sm:mb-10">
        <div className="animate-float rounded-[28px] p-2 shadow-[0_20px_60px_-15px_rgba(212,175,55,0.35)]">
          <Image
            src="/logo.png"
            alt="NEXA Business Park"
            width={128}
            height={128}
            className="h-24 w-24 rounded-[20px] object-cover sm:h-32 sm:w-32"
            priority
          />
        </div>
      </div>

      {/* Eyebrow */}
      <div className="stagger mb-5 flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/90">
          Dhaka · Bangladesh
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60" />
      </div>

      {/* Title */}
      <h1 className="stagger text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
        <span className="block text-white">NEXA</span>
        <span className="gold-text animate-shimmer mt-1 block">Business Park</span>
      </h1>

      {/* Subtitle */}
      <p className="stagger mt-6 max-w-2xl text-base text-white/70 sm:text-xl">
        A premium commercial development designed to be a landmark destination
        for businesses, investors, and entrepreneurs.
      </p>

      {/* Injected blocks */}
      <div className="mt-10 w-full max-w-3xl">{children}</div>
    </section>
  );
}
