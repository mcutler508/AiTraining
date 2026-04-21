import { SectionKicker } from "@/components/ui/SectionKicker";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-36 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[800px]">
          <SectionKicker number="08" label="MANIFESTO" className="mb-14 md:mb-20" />

          <div className="font-display text-[22px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-[var(--color-ink)] space-y-6">
            <p>
              Every AI course I see teaches people to chat better. I don&apos;t care about chatting better. I care about building.
            </p>
            <p>
              The tools are all here, scattered across your browser and your machine. Each one is a marvel on its own. Stitched together in the right order, they become something rarer:{" "}
              <span className="italic text-[var(--color-accent)]">a way to turn an idea into a live thing, the same weekend you had it</span>.
            </p>
            <p>
              FLOW→BUILD is my choreography — the order, the handoffs, the places to slow down and the places to let the model run. Earned from shipping real apps this way, again and again, until the path got clean.
            </p>
            <p>
              This isn&apos;t a course about prompts. It&apos;s a course about making things. If you bring the idea and the focus, you&apos;ll leave the weekend with something real that only you could have built.
            </p>
          </div>

          <div className="mt-14 md:mt-20 pt-8 border-t border-[var(--color-hairline)]">
            <p className="kicker text-[var(--color-ink-muted)]">
              — [Your Name], Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
