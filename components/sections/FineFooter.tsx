const INDEX = [
  { num: "01", label: "The workshop", href: "#top" },
  { num: "02", label: "Why this exists", href: "#top" },
  { num: "03", label: "How it runs", href: "#method" },
  { num: "04", label: "Try it now", href: "#top" },
  { num: "05", label: "What you do", href: "#phases" },
  { num: "06", label: "Past projects", href: "#top" },
  { num: "07", label: "Who it's for", href: "#top" },
  { num: "08", label: "About me", href: "#manifesto" },
  { num: "09", label: "Apply", href: "#ask" },
];

export function FineFooter() {
  return (
    <footer className="border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="font-display text-[22px] tracking-[-0.02em]">
              FLOW<span className="text-[var(--color-ink-muted)] mx-[2px]">→</span>BUILD
            </p>
            <p className="mt-3 text-[15px] leading-[1.5] text-[var(--color-ink-muted)] max-w-[280px]">
              A weekend workshop. You bring an idea. You leave with a working app on the internet.
            </p>
          </div>

          <div className="md:col-span-5">
            <p className="kicker mb-5 text-[var(--color-ink-faint)]">Index</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {INDEX.map((i) => (
                <li key={i.num}>
                  <a
                    href={i.href}
                    className="kicker flex items-center gap-3 hover:text-[var(--color-ink)] transition-colors"
                  >
                    <span className="text-[var(--color-ink-faint)]">{i.num}</span>
                    <span>{i.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="kicker mb-5 text-[var(--color-ink-faint)]">Contact</p>
            <a
              href="mailto:hello@flowbuild.method"
              className="text-[15px] text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              hello@flowbuild.method
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[var(--color-hairline)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="kicker text-[var(--color-ink-faint)]">© 2026 FLOW→BUILD · Working name</p>
          <p className="kicker text-[var(--color-ink-faint)]">Built with the Halogen design system</p>
        </div>
      </div>
    </footer>
  );
}
