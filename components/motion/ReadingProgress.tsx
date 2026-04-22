"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin accent-colored bar at the very top of the viewport that fills left→right
 * as the user scrolls through the document. Always-on, minimal, sets the tone
 * that this page has been considered.
 *
 * Mount once in app/layout.tsx inside <body>, before {children}.
 */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-[var(--color-accent)] pointer-events-none"
      style={{
        scaleX,
        boxShadow:
          "0 0 10px rgba(216, 255, 60, 0.55), 0 1px 0 rgba(216, 255, 60, 0.28)",
      }}
    />
  );
}
