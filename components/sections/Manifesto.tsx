import { SectionKicker } from "@/components/ui/SectionKicker";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-36 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[800px]">
          <SectionKicker number="08" label="WHY I MADE THIS" className="mb-14 md:mb-20" />

          <div className="font-display text-[22px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-[var(--color-ink)] space-y-6">
            <p>
              I&apos;ve watched a lot of smart people spend a year &ldquo;learning AI&rdquo; and come out the other side with nothing to show for it. A folder of saved prompts. A half-finished side project. A quiet sense they&apos;re falling behind.
            </p>
            <p>
              The missing piece isn&apos;t a better prompt library. It&apos;s{" "}
              <span className="italic text-[var(--color-accent)]">a clear path</span>{" "}
              from an idea to something that actually runs on the internet.
            </p>
            <p>
              I spent the last year figuring out what that path looks like &mdash; what order to do things in, when to trust the AI, when to push back, when to stop fiddling and ship. I used it to build my own tools, and the apps in the section above.
            </p>
            <p>
              This workshop is the version of that path you can walk in one weekend with me sitting next to you. You bring an idea you&apos;ve been meaning to build. By Sunday night, it has a URL.
            </p>
          </div>

          <div className="mt-14 md:mt-20 pt-8 border-t border-[var(--color-hairline)]">
            <p className="kicker text-[var(--color-ink-muted)]">
              — [Your Name], workshop lead
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
