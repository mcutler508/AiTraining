"use client";

import { motion } from "framer-motion";
import { hairlineDrawVariants } from "@/lib/motion";

export function Hairline({ className = "" }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      className={`h-px bg-[var(--color-hairline)] w-full ${className}`}
      variants={hairlineDrawVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-5% 0px" }}
    />
  );
}
