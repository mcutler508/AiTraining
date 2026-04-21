"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";

type Node = {
  num: string;
  name: string;
  hint: string;
};

const NODES: Node[] = [
  { num: "01", name: "SCOPE", hint: "Fri evening" },
  { num: "02", name: "SET UP", hint: "Sat morning" },
  { num: "03", name: "PLAN", hint: "Sat midday" },
  { num: "04", name: "BUILD", hint: "Sat / Sun" },
  { num: "05", name: "SHIP", hint: "Sun evening" },
];

export function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const inView = useInView(inViewRef, { once: true, margin: "-20% 0px -20% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mobileLineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      ref={ref}
      className="py-28 md:py-40 border-t border-[var(--color-hairline)]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="03" label="HOW THE WEEKEND RUNS" className="mb-10 md:mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 mb-16 md:mb-24">
            <div className="md:col-span-7">
              <h2 className="font-display text-[40px] md:text-[72px] leading-[1.0] tracking-[-0.02em] text-[var(--color-ink)]">
                Five phases,{" "}
                <span className="italic text-[var(--color-accent)]">two days.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:pt-4">
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-ink-muted)]">
                Friday evening we scope your idea. Saturday we plan and build. Sunday we ship. You&apos;ll know exactly what we&apos;re doing at every point.
              </p>
            </div>
          </div>

          {/* Desktop: horizontal pipeline */}
          <div ref={inViewRef} className="hidden md:block">
            <div className="relative py-10">
              {/* background hairline */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[var(--color-hairline)]" aria-hidden />
              {/* animated fill */}
              <motion.div
                style={{ width: lineWidth }}
                className="absolute left-0 top-1/2 -translate-y-1/2 h-px bg-[var(--color-accent)]"
                aria-hidden
              />
              {/* nodes */}
              <div className="relative flex justify-between items-center">
                {NODES.map((n, i) => (
                  <div key={n.num} className="flex flex-col items-center gap-4">
                    <p className="kicker text-[var(--color-ink-faint)]">{n.hint}</p>
                    <NodeDotTracked index={i} scrollTarget={ref} />
                    <div className="text-center">
                      <p
                        className="font-display text-[22px] leading-none text-[var(--color-ink)]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {n.num}
                      </p>
                      <p className="kicker mt-2 text-[var(--color-ink-muted)]">{n.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="kicker text-[var(--color-ink-faint)] mt-14 text-center"
            >
              Same five phases every cohort. Your idea is what makes it different.
            </motion.p>
          </div>

          {/* Mobile: vertical pipeline */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* background rail */}
              <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--color-hairline)]" aria-hidden />
              <motion.div
                style={{ height: mobileLineHeight }}
                className="absolute left-[7px] top-3 w-px bg-[var(--color-accent)]"
                aria-hidden
              />

              <div className="space-y-12">
                {NODES.map((n, i) => (
                  <div key={n.num} className="relative">
                    <div className="absolute -left-[29px] top-[6px]">
                      <NodeDotTracked index={i} scrollTarget={ref} />
                    </div>
                    <p className="kicker text-[var(--color-ink-faint)] mb-1">{n.hint}</p>
                    <p className="font-display text-[22px] leading-none text-[var(--color-ink)]">
                      {n.num}
                    </p>
                    <p className="kicker mt-2 text-[var(--color-ink-muted)]">{n.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="kicker text-[var(--color-ink-faint)] mt-12 text-center">
              Same five phases every cohort. Your idea is what makes it different.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component that subscribes to scrollYProgress via its own useTransform
function NodeDotTracked({
  index,
  scrollTarget,
}: {
  index: number;
  scrollTarget: React.RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start 70%", "end 30%"],
  });
  const threshold = index / (NODES.length - 1);
  const bg = useTransform(
    scrollYProgress,
    [Math.max(0, threshold - 0.04), threshold],
    ["var(--color-canvas)", "var(--color-accent)"]
  );
  const border = useTransform(
    scrollYProgress,
    [Math.max(0, threshold - 0.04), threshold],
    ["var(--color-hairline-hot)", "var(--color-accent)"]
  );
  return (
    <motion.div
      style={{ backgroundColor: bg, borderColor: border }}
      className="w-[14px] h-[14px] rounded-full border"
    />
  );
}

