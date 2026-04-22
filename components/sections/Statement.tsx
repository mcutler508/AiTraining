"use client";

import { MaskReveal } from "@/components/ui/MaskReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionKicker } from "@/components/ui/SectionKicker";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { motion } from "framer-motion";

export function Statement() {
  return (
    <section id="top" className="pt-24 md:pt-28 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <SectionKicker number="01" label="TRAINING ¦ BUILD REAL APPS" className="mb-10 md:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h1 className="font-display font-medium text-[clamp(52px,8.5vw,112px)] leading-[0.95] tracking-[-0.03em] text-[var(--color-ink)]">
              <span className="block">
                <MaskReveal>Build the app</MaskReveal>
              </span>
              <span className="block">
                <MaskReveal delay={0.1}>you&apos;ve been meaning</MaskReveal>
              </span>
              <span className="block">
                <MaskReveal delay={0.2}>to build. </MaskReveal>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="italic text-[var(--color-accent)]"
                  style={{ display: "inline-block" }}
                >
                  And the next one.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 md:mt-10 max-w-[600px] text-[19px] md:text-[22px] leading-[1.45] text-[var(--color-ink-muted)]"
            >
              Sessions for non-developers with an idea worth building. We work through it together — plan it, build it, deploy it. The real payoff is that you leave knowing how to do the next one on your own.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="#ask" variant="primary">
                Save a seat
              </MagneticButton>
              <MagneticButton href="#method" variant="ghost">
                What we do each day ↓
              </MagneticButton>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <HeroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
