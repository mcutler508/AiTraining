import { SectionKicker } from "@/components/ui/SectionKicker";

export function Position() {
  return (
    <section className="py-28 md:py-40 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1000px] mx-auto">
          <SectionKicker number="07" label="POSITION" className="mb-14 md:mb-20" />

          <blockquote>
            <p className="font-display text-[40px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]">
              <span className="text-[var(--color-ink-muted)]">&ldquo;</span>
              Don&apos;t just talk to the AI. Build something with it — and ship it.
              <span className="text-[var(--color-ink-muted)]">&rdquo;</span>
            </p>
            <footer className="kicker mt-10 md:mt-14 text-[var(--color-ink-muted)]">
              — The FLOW→BUILD thesis
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
