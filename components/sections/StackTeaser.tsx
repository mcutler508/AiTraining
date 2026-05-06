type Pillar = {
  label: string;
  line: string;
};

const PILLARS: Pillar[] = [
  {
    label: "Frontend",
    line: "Type-safe React framework. File-based routing, server components where they earn it, design tokens end-to-end.",
  },
  {
    label: "Local dev & testing",
    line: "Hot-reload in seconds. A scripted local stack so you debug your code, not your machine. Tests wired to the build.",
  },
  {
    label: "Data layer",
    line: "Managed Postgres with row-level security. Schema-as-code migrations. A typed query path from database to component.",
  },
  {
    label: "Auth & deploy",
    line: "Managed identity for sessions and tokens. Push to git, get a preview URL. One-command rollback when something bites.",
  },
];

export function StackTeaser() {
  return (
    <section
      id="stack"
      className="py-16 md:py-24 border-t border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <div className="kicker flex items-center gap-3 mb-10 md:mb-12 text-[var(--color-ink-muted)]">
            <span className="text-[var(--color-ink)]">+</span>
            <span aria-hidden className="text-[var(--color-ink-faint)]">·</span>
            <span>UNDER THE HOOD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-12 md:mb-16">
            <div className="md:col-span-7">
              <h2 className="font-display text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
                Yes, it&apos;s{" "}
                <span className="italic text-[var(--color-accent)]">real software</span>.
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-3">
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                Not a no-code wrapper. Not a sandbox you can&apos;t leave. You ship a
                React app on a real stack, in a repo you own, on infrastructure
                engineers actually use.
              </p>
            </div>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-hairline)] border border-[var(--color-hairline)]">
            {PILLARS.map((p) => (
              <div
                key={p.label}
                className="bg-[var(--color-canvas)] p-6 md:p-8"
              >
                <p className="kicker text-[var(--color-ink-faint)] mb-3">
                  {p.label}
                </p>
                <p className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-ink)]">
                  {p.line}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="/stack"
              className="group inline-flex items-center gap-2 text-[15px] md:text-[16px] text-[var(--color-ink)] border-b border-[var(--color-hairline-hot)] hover:border-[var(--color-accent)] pb-1 transition-colors"
            >
              <span>Read the technical breakdown</span>
              <span
                aria-hidden
                className="text-[var(--color-accent)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="kicker text-[var(--color-ink-faint)]">
              For engineers, architects, and the technically curious
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
