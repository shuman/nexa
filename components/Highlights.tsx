const HIGHLIGHTS = [
  {
    title: "Strategic Location",
    description:
      "Set in Bashundhara Residential Area, one of Dhaka's most connected and sought-after business districts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 21s-7-5.686-7-11a7 7 0 1114 0c0 5.314-7 11-7 11z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Premium Spaces",
    description:
      "Modern, flexible office and commercial spaces engineered for productivity and a refined work environment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 11h.01M15 11h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Built for Growth",
    description:
      "A landmark destination crafted for investors and entrepreneurs ready to scale in a thriving ecosystem.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M3 17l6-6 4 4 8-8M14 7h7v7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="stagger scroll-mt-24">
      <p
        id="about"
        className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-white/50 scroll-mt-24"
      >
        NEXA Business Park is a modern commercial real estate development built
        to deliver premium office and business spaces in a strategic location —
        a vision to create a true landmark in the heart of Dhaka.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((item) => (
          <div
            key={item.title}
            className="glass-card group rounded-2xl p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
              {item.icon}
            </div>
            <h3 className="mb-1.5 text-sm font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed text-white/55">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
