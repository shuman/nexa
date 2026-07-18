export default function Contact() {
  return (
    <section
      id="contact"
      className="stagger mt-14 scroll-mt-24 rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm sm:p-8"
    >
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.25em] text-gold/80">
        Get in touch
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {/* Address */}
        <a
          href="https://maps.google.com/?q=Bashundhara+Residential+Area+Dhaka"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 text-left"
        >
          <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold transition-colors group-hover:bg-gold/15">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="block">
            <span className="block text-xs uppercase tracking-wide text-white/40">
              Address
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-white/80 transition-colors group-hover:text-white">
              Plot 844/E, Block I
              <br />
              Bashundhara Residential Area
              <br />
              Dhaka 1229, Bangladesh
            </span>
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:owners@nexabusinesspark.com"
          className="group flex items-start gap-4 text-left"
        >
          <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-gold transition-colors group-hover:bg-gold/15">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="block">
            <span className="block text-xs uppercase tracking-wide text-white/40">
              Email
            </span>
            <span className="mt-1 block break-all text-sm text-white/80 transition-colors group-hover:text-gold">
              owners@nexabusinesspark.com
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
