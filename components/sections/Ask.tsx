"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionKicker } from "@/components/ui/SectionKicker";

export function Ask() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // placeholder: in production wire to a list provider; here we just acknowledge
    setSubmitted(true);
  };

  return (
    <section id="ask" className="py-28 md:py-40 border-t border-[var(--color-hairline)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-[820px]">
          <SectionKicker number="09" label="EARLY ACCESS" className="mb-14 md:mb-20" />

          <h2 className="font-display text-[48px] md:text-[88px] leading-[0.98] tracking-[-0.03em] text-[var(--color-ink)] mb-8 md:mb-10">
            Leave with <br />
            a <span className="italic text-[var(--color-accent)]">live URL</span>.
          </h2>

          <p className="text-[19px] md:text-[22px] leading-[1.45] text-[var(--color-ink-muted)] mb-12 max-w-[640px]">
            Cohort 01 runs as a hands-on weekend. You bring one app idea; you leave with it deployed. Early-access seats are priced at cost and include the PRD template pack.
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-stretch gap-3 max-w-[540px]"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@work.com"
                  required
                  className="flex-1 bg-transparent border border-[var(--color-hairline-hot)] px-4 py-3 text-[16px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] focus:outline-none focus:border-[var(--color-ink-muted)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--color-accent)] text-[var(--color-accent-ink)] px-6 py-3 text-[15px] font-medium hover:bg-[var(--color-accent)]/90 transition-opacity"
                >
                  Save my seat
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="confirm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-l-2 border-[var(--color-accent)] pl-5 py-2"
              >
                <p className="font-display text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.02em] text-[var(--color-ink)]">
                  You&apos;re on the list.
                </p>
                <p className="mt-2 text-[15px] text-[var(--color-ink-muted)]">
                  I&apos;ll email you personally before Cohort 01 opens. — Founder
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="kicker mt-8 text-[var(--color-ink-faint)]">
            No credit card · Unsubscribe any time
          </p>
        </div>
      </div>
    </section>
  );
}
