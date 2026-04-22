"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type SectionInfo = {
  id: string;
  num: string;
  label: string;
};

/**
 * A small floating badge, pinned bottom-left, that shows the current section
 * (number + label) as the user scrolls. Uses IntersectionObserver so it has
 * zero scroll-cost and works correctly with the horizontal-pinned sections.
 *
 * Mount once in app/layout.tsx inside <body>. Pass the site's section list:
 *
 *   <SectionIndicator sections={[
 *     { id: "top",       num: "01", label: "The sessions" },
 *     { id: "tension",   num: "02", label: "Why this exists" },
 *     ...
 *   ]} />
 *
 * The page's <section> elements must have matching `id` attributes.
 */
export function SectionIndicator({ sections }: { sections: SectionInfo[] }) {
  const [active, setActive] = useState<SectionInfo | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.id);
            if (match) setActive(match);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      aria-hidden
      className="fixed bottom-5 left-5 z-40 pointer-events-none hidden md:block"
    >
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3 py-1.5 bg-[var(--color-canvas)]/85 backdrop-blur-sm border border-[var(--color-hairline-hot)]"
            style={{
              fontFamily: "var(--font-mono), ui-monospace, monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span className="text-[var(--color-accent)]">{active.num}</span>
            <span className="text-[var(--color-ink-faint)]">·</span>
            <span className="text-[var(--color-ink)]">{active.label}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
