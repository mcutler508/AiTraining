export function Position() {
  return (
    <section className="relative py-20 md:py-28 bg-[var(--color-accent)] text-[var(--color-accent-ink)] overflow-hidden">
      {/* Grain texture — desaturated fractal noise, multiplied over the yellow to mute it */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.38]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='280' height='280'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Subtle vertical vignette — adds depth without looking like a gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,0.00) 0%, rgba(10,10,11,0.00) 55%, rgba(10,10,11,0.10) 100%)",
        }}
      />

      {/* Soft halo near the quote — pulls attention without being showy */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 45%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          {/* Inverted kicker — dark ink on muted-accent bg */}
          <div
            className="flex items-center gap-3 mb-10 md:mb-12 uppercase"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "13px",
              letterSpacing: "0.08em",
              fontWeight: 500,
              color: "var(--color-accent-ink)",
            }}
          >
            <span>06</span>
            <span aria-hidden style={{ opacity: 0.35 }}>·</span>
            <span style={{ opacity: 0.7 }}>WHO THIS IS FOR</span>
          </div>

          <blockquote>
            <p className="font-display text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--color-accent-ink)]">
              <span style={{ color: "var(--color-accent-ink)", opacity: 0.45 }}>&ldquo;</span>
              You don&apos;t have to know how to code. You do have to know what you want to build.
              <span style={{ color: "var(--color-accent-ink)", opacity: 0.45 }}>&rdquo;</span>
            </p>
            <footer
              className="mt-8 md:mt-10 uppercase"
              style={{
                fontFamily: "var(--font-mono), ui-monospace, monospace",
                fontSize: "13px",
                letterSpacing: "0.08em",
                fontWeight: 500,
                color: "var(--color-accent-ink)",
                opacity: 0.7,
              }}
            >
              — the one prerequisite
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
