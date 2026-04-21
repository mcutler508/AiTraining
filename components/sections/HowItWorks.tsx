"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";

function StepIndicator({
  progress,
  index,
  total,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const bg = useTransform(
    progress,
    [index / total - 0.05, index / total, (index + 1) / total],
    ["var(--color-hairline-hot)", "var(--color-ink)", "var(--color-hairline-hot)"]
  );
  return <motion.div className="h-px w-10" style={{ backgroundColor: bg }} />;
}

type Step = {
  num: string;
  name: string;
  heading: string;
  body: string;
};

const STEPS: Step[] = [
  {
    num: "I",
    name: "THE BRIEF",
    heading: "The idea becomes legible.",
    body: "Loose in your head. Sharp on the page. The first object you can hand to anything — a person, a tool, a machine — and have it understood the same way twice.",
  },
  {
    num: "II",
    name: "THE ROOM",
    heading: "You cross a threshold.",
    body: "The environment changes. The brief is already here. The assistants already know why you arrived. The work now has a place to happen, with everything within reach.",
  },
  {
    num: "III",
    name: "THE MAP",
    heading: "Direction enters.",
    body: "Shape proposes itself. You push back, pick the detours, commit to a path. This is where taste lives — and where the run stops looking like anyone else's.",
  },
  {
    num: "IV",
    name: "THE MAKING",
    heading: "The thing takes form.",
    body: "Under your hands, one piece at a time. You're directing, not typing from scratch. Problems appear and get solved in minutes. Momentum is the feeling.",
  },
  {
    num: "V",
    name: "THE RELEASE",
    heading: "It leaves your machine.",
    body: "A URL anyone can open. A real thing, built by you, on the internet. The loop closes — and the next one begins, cleaner, faster, sharper than the last.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // Translate horizontally: 5 panels, need to travel (4 / 5) of full width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="phases" className="border-t border-[var(--color-hairline)]">
      {/* Mobile: vertical stack */}
      <div className="md:hidden py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionKicker number="05" label="THE FIVE MOVES" className="mb-12" />
          <h2 className="font-display text-[40px] leading-[1.0] tracking-[-0.02em] mb-12">
            Five phases. One flow.
          </h2>
          <div className="space-y-10">
            {STEPS.map((s) => (
              <article key={s.num} className="border-t border-[var(--color-hairline)] pt-6">
                <div className="kicker flex items-center gap-3 mb-4">
                  <span className="text-[var(--color-ink)]">{s.num}</span>
                  <span className="text-[var(--color-ink-faint)]">·</span>
                  <span>{s.name}</span>
                </div>
                <h3 className="font-display text-[28px] leading-[1.1] tracking-[-0.02em] mb-3">
                  {s.heading}
                </h3>
                <p className="text-[17px] leading-[1.55] text-[var(--color-ink-muted)]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: pinned horizontal */}
      <div ref={ref} className="hidden md:block relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-10 pt-28">
            <SectionKicker number="05" label="THE FIVE MOVES" className="mb-10" />
            <h2 className="font-display text-[64px] leading-[1.0] tracking-[-0.02em]">
              Five phases. One flow.
            </h2>
          </div>

          <motion.div
            style={{ x }}
            className="absolute top-[50%] left-[10vw] flex gap-10"
          >
            {STEPS.map((s, i) => (
              <article
                key={s.num}
                className="w-[78vw] max-w-[900px] flex-shrink-0 border border-[var(--color-hairline)] p-10 lg:p-14 bg-[var(--color-canvas)]"
              >
                <div className="kicker flex items-center gap-4 mb-6">
                  <span className="font-display text-[64px] leading-none text-[var(--color-ink)] tracking-[-0.03em]" style={{ letterSpacing: "-0.03em" }}>
                    {s.num}
                  </span>
                  <span className="text-[var(--color-ink-faint)]">·</span>
                  <span>{s.name}</span>
                  <span className="ml-auto text-[var(--color-ink-faint)]">
                    {i + 1} / {STEPS.length}
                  </span>
                </div>
                <h3 className="font-display text-[44px] lg:text-[56px] leading-[1.0] tracking-[-0.02em] mb-6 max-w-[700px]">
                  {s.heading}
                </h3>
                <p className="text-[19px] lg:text-[21px] leading-[1.5] text-[var(--color-ink-muted)] max-w-[620px]">
                  {s.body}
                </p>
              </article>
            ))}
          </motion.div>

          {/* Bottom rail / indicator */}
          <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
            <p className="kicker text-[var(--color-ink-faint)]">Scroll ↓ to advance</p>
            <div className="flex gap-2">
              {STEPS.map((_, i) => (
                <StepIndicator key={i} progress={scrollYProgress} index={i} total={STEPS.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
