"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { maskRevealStagger, maskWordVariants } from "@/lib/motion";

type MaskRevealProps = {
  children: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  once?: boolean;
};

export function MaskReveal({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
  once = true,
}: MaskRevealProps) {
  const words = children.split(" ");
  return (
    <motion.span
      className={className}
      variants={maskRevealStagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-10% 0px" }}
      transition={{ delayChildren: delay }}
      style={{ display: "inline-block" }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            paddingBottom: "0.15em",
            marginBottom: "-0.15em",
          }}
        >
          <motion.span
            variants={maskWordVariants}
            style={{ display: "inline-block", willChange: "clip-path" }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// Non-splitting variant for layout-preserving reveals on nodes (not strings)
export function MaskRevealNode({
  children,
  className = "",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      variants={maskWordVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
