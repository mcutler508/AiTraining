"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Props = {
  children: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  className?: string;
};

/**
 * Character-by-character reveal using transform + opacity. Each char fades up
 * from 80% below its natural position with a short stagger.
 *
 * Why not clip-path: the CSS `inset()` function clamps negative values to 0,
 * so a clip rectangle cannot extend above the element's box. That clips italic
 * ascenders (A, d, h, t) on display serifs. Transform + opacity has no such
 * limitation — ink is free to render anywhere.
 *
 * Best used on short phrases — 2 to 8 words. On longer strings the total
 * duration stretches uncomfortably. For long H1s use MaskReveal on each line
 * and reserve SplitText for one accent phrase per page.
 */
export function SplitText({
  children,
  delay = 0,
  stagger = 0.025,
  duration = 0.7,
  className = "",
}: Props) {
  const chars = useMemo(() => Array.from(children), [children]);

  return (
    <span aria-label={children} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          initial={{ y: "80%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{ willChange: "transform, opacity" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </span>
  );
}
