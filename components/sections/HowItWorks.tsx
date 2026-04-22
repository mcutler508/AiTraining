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
    num: "01",
    name: "SCOPE",
    heading: "Get clear on what you're actually making.",
    body: "Before any code, we turn the fuzzy thing in your head into a one-page brief. Who it's for. What it does. What it deliberately doesn't do. This page guides every decision from here on.",
  },
  {
    num: "02",
    name: "SET UP",
    heading: "Get your tools talking to each other.",
    body: "You'll set up a clean workspace where your notes, your AI helpers, and your code all live in one place. I walk you through it step by step. No guessing, no broken installs.",
  },
  {
    num: "03",
    name: "PLAN",
    heading: "Decide what ships and what waits.",
    body: "We map the shortest path from brief to live URL. You pick the stack, the scope, and the first milestone. The AI proposes, you decide. I help you tell the difference between a good suggestion and a bad one.",
  },
  {
    num: "04",
    name: "BUILD",
    heading: "Work through it one piece at a time.",
    body: "You build, break things, and fix them. The AI drafts the code, you review every change, I'm there when something doesn't work. You stay in the driver's seat the whole way through.",
  },
  {
    num: "05",
    name: "SHIP",
    heading: "Push it live.",
    body: "When it's ready, we put your code in a repo you own and deploy it to the web. You leave with a working URL, a tidy codebase, and a playbook you can run yourself the next time.",
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
      <div className="md:hidden py-14">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionKicker number="04" label="WHAT YOU ACTUALLY DO" className="mb-10" />
          <h2 className="font-display text-[40px] leading-[1.0] tracking-[-0.02em] mb-12">
            What you actually do.
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
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Title block */}
          <div className="flex-shrink-0 w-full pt-16 lg:pt-20 pb-2">
            <div className="max-w-[1280px] mx-auto px-10">
              <SectionKicker number="04" label="WHAT YOU ACTUALLY DO" className="mb-5" />
              <h2 className="font-display text-[48px] lg:text-[56px] leading-[1.0] tracking-[-0.02em]">
                What you actually do.
              </h2>
            </div>
          </div>

          {/* Horizontal track — fills remaining vertical space, cards centered inside */}
          <div className="flex-1 min-h-0 relative">
            <motion.div
              style={{ x }}
              className="absolute top-1/2 -translate-y-1/2 left-[10vw] flex gap-10"
            >
              {STEPS.map((s, i) => (
                <article
                  key={s.num}
                  className="w-[78vw] max-w-[860px] flex-shrink-0 border border-[var(--color-hairline)] p-8 lg:p-12 bg-[var(--color-canvas)]"
                >
                  <div className="kicker flex items-center gap-4 mb-5">
                    <span className="font-display text-[44px] lg:text-[52px] leading-none text-[var(--color-ink)] tracking-[-0.03em]">
                      {s.num}
                    </span>
                    <span className="text-[var(--color-ink-faint)]">·</span>
                    <span>{s.name}</span>
                    <span className="ml-auto text-[var(--color-ink-faint)]">
                      {i + 1} / {STEPS.length}
                    </span>
                  </div>
                  <h3 className="font-display text-[32px] lg:text-[44px] leading-[1.05] tracking-[-0.02em] mb-4 max-w-[700px]">
                    {s.heading}
                  </h3>
                  <p className="text-[16px] lg:text-[18px] leading-[1.5] text-[var(--color-ink-muted)] max-w-[620px]">
                    {s.body}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Bottom rail */}
          <div className="flex-shrink-0 w-full px-10 pb-8 pt-4 flex items-center justify-between">
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
