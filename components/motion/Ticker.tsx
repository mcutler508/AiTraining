"use client";

import { motion } from "framer-motion";

type Props = {
  items: string[];
  speed?: number;            // seconds for one full loop. Lower = faster.
  variant?: "canvas" | "accent";
  size?: "md" | "lg" | "xl";
};

/**
 * Full-width horizontal ticker band. A classic editorial move — use once on a
 * page, between two sections, as a rhythmic break. Two copies of the content
 * slide left at a constant rate, producing a seamless infinite loop.
 *
 * Usage:
 *   <Ticker
 *     items={["Build real things", "Ship them", "Build the next one"]}
 *     speed={45}
 *     variant="canvas"
 *   />
 *
 * `variant="accent"` flips to the yellow background — reserve for sites where
 * you haven't already used the accent-yellow trick elsewhere.
 */
export function Ticker({
  items,
  speed = 45,
  variant = "canvas",
  size = "lg",
}: Props) {
  const content = items.join("   ·   ");
  const isAccent = variant === "accent";

  const sizeClass = {
    md: "text-[36px] md:text-[56px]",
    lg: "text-[44px] md:text-[72px]",
    xl: "text-[56px] md:text-[96px]",
  }[size];

  return (
    <div
      className={`relative w-full overflow-hidden border-y py-6 md:py-10 ${
        isAccent
          ? "bg-[var(--color-accent)] text-[var(--color-accent-ink)] border-black/20"
          : "bg-[var(--color-canvas)] text-[var(--color-ink)] border-[var(--color-hairline-hot)]"
      }`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <span className={`font-display italic leading-none tracking-[-0.02em] pr-12 ${sizeClass}`}>
          {content}
        </span>
        <span
          aria-hidden
          className={`font-display italic leading-none tracking-[-0.02em] pr-12 ${sizeClass}`}
        >
          {content}
        </span>
      </motion.div>

      {/* edge fades so text doesn't appear to pop in/out at viewport edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24"
        style={{
          background: isAccent
            ? "linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)"
            : "linear-gradient(90deg, var(--color-canvas) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24"
        style={{
          background: isAccent
            ? "linear-gradient(270deg, var(--color-accent) 0%, transparent 100%)"
            : "linear-gradient(270deg, var(--color-canvas) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
