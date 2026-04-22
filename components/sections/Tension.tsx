import { SectionKicker } from "@/components/ui/SectionKicker";
import { Hairline } from "@/components/ui/Hairline";

export function Tension() {
  return (
    <section id="tension" className="py-14 md:py-20 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="02" label="WHY THIS EXISTS" className="mb-10 md:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <p className="kicker mb-4 text-[var(--color-ink-faint)]">What most AI courses give you</p>
              <p className="text-[18px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                A prompt library. A few keyboard shortcuts. The sense that you&apos;re supposed to be impressed. You close the tab with a slightly shorter email and the same unbuilt ideas in your head.
              </p>
            </div>

            <div className="hidden md:block md:col-span-1 relative">
              <div className="absolute inset-y-0 left-1/2 w-px bg-[var(--color-hairline)]" aria-hidden />
            </div>

            <div className="md:col-span-6">
              <p className="kicker mb-4 text-[var(--color-ink-faint)]">What you get here</p>
              <p className="font-display text-[26px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)]">
                One idea you&apos;ve been sitting on, turned into a working app you can actually show people.{" "}
                <span className="italic text-[var(--color-accent)]">Plus the skill to build the next.</span>{" "}
                With the code in a repo you own.
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <Hairline />
          </div>
        </div>
      </div>
    </section>
  );
}
