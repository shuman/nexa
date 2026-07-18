import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
      <a href="#top" className="flex items-center gap-3" aria-label="NEXA Business Park home">
        <Image
          src="/logo.png"
          alt="NEXA Business Park logo"
          width={44}
          height={44}
          className="h-9 w-9 rounded-lg object-cover sm:h-10 sm:w-10"
          priority
        />
        <span className="text-sm font-semibold tracking-[0.2em] text-white/90 sm:text-base">
          NEXA
        </span>
      </a>

      <nav className="hidden items-center gap-8 text-sm text-white/60 sm:flex">
        <a href="#about" className="transition-colors hover:text-gold">
          About
        </a>
        <a href="#highlights" className="transition-colors hover:text-gold">
          Highlights
        </a>
        <a href="#contact" className="transition-colors hover:text-gold">
          Contact
        </a>
      </nav>

      <a
        href="mailto:info@nexabusinesspark.com"
        className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm transition-all hover:border-gold/50 hover:text-gold sm:text-sm"
      >
        Get in touch
      </a>
    </header>
  );
}
