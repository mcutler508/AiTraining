export function Marquee() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 border-b border-[var(--color-hairline)] bg-[var(--color-canvas)]/90 backdrop-blur-[2px]">
      <div className="h-full max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#top" className="font-display text-[17px] tracking-[-0.02em] text-[var(--color-ink)] no-underline">
          FLOW<span className="text-[var(--color-ink-muted)] mx-[2px]">→</span>BUILD
        </a>
        <nav className="hidden md:flex items-center gap-7">
          <a href="#method" className="kicker hover:text-[var(--color-ink)] transition-colors">How it runs</a>
          <a href="#phases" className="kicker hover:text-[var(--color-ink)] transition-colors">What you do</a>
          <a href="#manifesto" className="kicker hover:text-[var(--color-ink)] transition-colors">About me</a>
          <a href="#ask" className="kicker hover:text-[var(--color-ink)] transition-colors">Apply</a>
        </nav>
        <a href="#ask" className="kicker text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
          Get in touch →
        </a>
      </div>
    </header>
  );
}
