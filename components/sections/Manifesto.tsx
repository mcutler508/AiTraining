import { SectionKicker } from "@/components/ui/SectionKicker";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-14 md:py-20 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[800px]">
          <SectionKicker number="06" label="WHY I MADE THIS" className="mb-10 md:mb-12" />

          <div className="font-display text-[22px] md:text-[28px] leading-[1.4] tracking-[-0.01em] text-[var(--color-ink)] space-y-6">
            <p>
              I&apos;ve watched a lot of smart people spend a year &ldquo;learning AI&rdquo; and come out the other side with nothing to show for it. A folder of saved prompts. A half-finished side project. A quiet sense they&apos;re falling behind.
            </p>
            <p>
              It&apos;s not that they&apos;re lazy. It&apos;s that the learning curve is real. A handful of new concepts, in the right order. Climbing it alone from scratch is slow and demoralizing. Most people give up on the third broken install.
            </p>
            <p>
              The missing piece isn&apos;t a better prompt library. It&apos;s{" "}
              <span className="italic text-[var(--color-accent)]">a clear path</span>{" "}
              from an idea to something that actually runs on the internet, with someone next to you when you hit the parts that make you want to quit.
            </p>
            <p>
              I spent the last year figuring out what that path looks like. What order to do things in, when to trust the AI, when to push back, when to stop fiddling and ship. I used it to build my own tools, and the apps in the section above.
            </p>
            <p>
              These sessions are the version of that path where I&apos;m sitting next to you. You bring an idea you&apos;ve been meaning to build. We ship it together, and you leave knowing how to ship the next one without me.
            </p>
          </div>

          <div className="mt-10 md:mt-14 pt-6 border-t border-[var(--color-hairline)]">
            <p className="kicker text-[var(--color-ink-muted)]">
              — [Your Name]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
