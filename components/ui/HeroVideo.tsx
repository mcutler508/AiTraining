"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Drop these files in /public to activate the hero video:
 *   /hero.mp4        — primary (h.264, ~45s, muted, loop-ready, <4MB)
 *   /hero.webm       — optional WebM/VP9 fallback for better compression
 *   /hero-poster.jpg — still frame shown on load / reduced motion (1200x1500 recommended)
 */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function HeroVideo() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[4/5] lg:aspect-[4/5] border border-[var(--color-hairline-hot)] bg-[#0C0C0E] overflow-hidden"
    >
      {/* corner marks */}
      <CornerMarks />

      {reducedMotion ? (
        <img
          src="/hero-poster.jpg"
          alt="A 45-second demo: from idea to a deployed app."
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          aria-label="A 45-second demo: from idea to a deployed app."
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* bottom kicker bar */}
      <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-[#000000CC] to-transparent">
        <span className="kicker text-[var(--color-ink)]">45s demo</span>
        <span className="kicker text-[var(--color-ink-faint)]">idea → live app</span>
      </div>
    </motion.div>
  );
}

function CornerMarks() {
  return (
    <>
      {[
        "top-2 left-2 border-t border-l",
        "top-2 right-2 border-t border-r",
        "bottom-2 left-2 border-b border-l",
        "bottom-2 right-2 border-b border-r",
      ].map((cls) => (
        <span
          key={cls}
          aria-hidden
          className={`pointer-events-none absolute w-3 h-3 border-[var(--color-ink-faint)] ${cls}`}
        />
      ))}
    </>
  );
}
