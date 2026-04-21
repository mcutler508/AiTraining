import { SectionKicker } from "@/components/ui/SectionKicker";
import { Hairline } from "@/components/ui/Hairline";

export function Tension() {
  return (
    <section className="py-24 md:py-36 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="02" label="TENSION" className="mb-14 md:mb-20" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            <div className="md:col-span-5">
              <p className="kicker mb-4 text-[var(--color-ink-faint)]">What most AI training teaches</p>
              <p className="text-[18px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                Prompt tips. Token tricks. Ten ways to ask ChatGPT the same question. You close the tab with a cleaner email draft and the same blank folder on your desktop. Nothing you can run. Nothing you can share. Nothing that&apos;s actually yours.
              </p>
            </div>

            <div className="hidden md:block md:col-span-1 relative">
              <div className="absolute inset-y-0 left-1/2 w-px bg-[var(--color-hairline)]" aria-hidden />
            </div>

            <div className="md:col-span-6">
              <p className="kicker mb-4 text-[var(--color-ink-faint)]">What you actually want</p>
              <p className="font-display text-[26px] md:text-[34px] leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)]">
                An idea in your head.{" "}
                <span className="italic text-[var(--color-accent)]">A live URL by the end of the weekend.</span>{" "}
                A real app — your app — running on the internet, built with AI at every step.
              </p>
            </div>
          </div>

          <div className="mt-20 md:mt-28">
            <Hairline />
          </div>
        </div>
      </div>
    </section>
  );
}
