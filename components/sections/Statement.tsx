"use client";

import { MaskReveal } from "@/components/ui/MaskReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section id="top" className="pt-32 md:pt-40 pb-24 md:pb-36">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[1120px]">
          <SectionKicker number="01" label="TRAINING ¦ BUILD REAL APPS WITH AI" className="mb-14 md:mb-20" />

          <h1 className="font-display font-medium text-[clamp(56px,10vw,128px)] leading-[0.95] tracking-[-0.03em] text-[var(--color-ink)]">
            <span className="block">
              <MaskReveal>From idea</MaskReveal>
            </span>
            <span className="block">
              <MaskReveal delay={0.1}>to deployed app,</MaskReveal>
            </span>
            <span className="block">
              <MaskReveal delay={0.2}>in </MaskReveal>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                className="italic text-[var(--color-accent)]"
                style={{ display: "inline-block" }}
              >
                one flow.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 md:mt-14 max-w-[720px] text-[20px] md:text-[24px] leading-[1.4] text-[var(--color-ink-muted)]"
          >
            A hands-on weekend in my custom method — the choreography I use to take an idea from the back of a napkin to a working app on the internet. No engineering background required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 md:mt-14 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#ask" variant="primary">
              Get early access
            </MagneticButton>
            <MagneticButton href="#method" variant="ghost">
              See the method ↓
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
