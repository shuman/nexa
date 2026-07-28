export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-xs text-white/40 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} NEXA Business Park. All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
          Crafted in Dhaka, Bangladesh
        </p>
      </div>
    </footer>
  );
}
