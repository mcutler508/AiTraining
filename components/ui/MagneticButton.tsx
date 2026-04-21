"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  ariaLabel,
}: MagneticButtonProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });

  const handlePointerMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const radius = 140;
    const dist = Math.hypot(dx, dy);
    if (dist < radius) {
      mx.set(dx * 0.25);
      my.set(dy * 0.25);
    } else {
      mx.set(0);
      my.set(0);
    }
  };

  const handlePointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const base =
    "relative inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium tracking-[-0.01em] rounded-none transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent)]"
      : "bg-transparent text-[var(--color-ink)] border border-[var(--color-hairline-hot)] hover:border-[var(--color-ink-muted)]";

  const inner = (
    <motion.span
      ref={ref}
      className={`${base} ${styles} ${className}`}
      style={{ x: springX, y: springY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-block no-underline">
        {inner}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 cursor-pointer"
    >
      {inner}
    </button>
  );
}
