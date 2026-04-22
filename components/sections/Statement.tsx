"use client";

import { MaskReveal } from "@/components/ui/MaskReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { SplitText } from "@/components/motion/SplitText";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section id="top" className="pt-20 md:pt-24 pb-14 md:pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionKicker number="01" label="TRAINING ¦ BUILD REAL APPS" className="mb-8 md:mb-10" />

        <h1 className="font-display font-medium text-[clamp(40px,6vw,80px)] leading-[1.08] tracking-[-0.03em] text-[var(--color-ink)] max-w-[1040px]">
          <span className="block">
            <MaskReveal>Build the app</MaskReveal>
          </span>
          <span className="block">
            <MaskReveal delay={0.1}>you&apos;ve been meaning to build.</MaskReveal>
          </span>
          <span className="block">
            <SplitText
              delay={0.95}
              stagger={0.035}
              duration={0.6}
              className="italic text-[var(--color-accent)]"
            >
              And the next one.
            </SplitText>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-7 md:mt-9 max-w-[620px] text-[18px] md:text-[20px] leading-[1.5] text-[var(--color-ink-muted)]"
        >
          Sessions for non-developers with an idea worth building. We work through it together &mdash; plan it, build it, deploy it. The real payoff is that you leave knowing how to do the next one on your own.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-7 md:mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#ask" variant="primary">
            Save a seat
          </MagneticButton>
          <MagneticButton href="#method" variant="ghost">
            See how it runs ↓
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
