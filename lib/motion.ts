import type { Transition, Variants } from "framer-motion";

export const EASE_OUT_EXPO: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_OUT_QUART: Transition["ease"] = [0.25, 1, 0.5, 1];

export const maskRevealVariants: Variants = {
  initial: { clipPath: "inset(0 100% -0.25em 0)", opacity: 0.001 },
  animate: {
    clipPath: "inset(0 0% -0.25em 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

export const maskRevealStagger: Variants = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
  },
};

export const maskWordVariants: Variants = {
  initial: { clipPath: "inset(0 100% -0.25em 0)", opacity: 0.001 },
  animate: {
    clipPath: "inset(0 0% -0.25em 0)",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
};

export const hairlineDrawVariants: Variants = {
  initial: { scaleX: 0, transformOrigin: "0% 50%" },
  animate: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};
