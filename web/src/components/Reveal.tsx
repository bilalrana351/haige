"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/* Motivation: reveals sequence the argument as the reader scrolls. Once, never looping.
   Full transform strings keep Motion on the hardware-accelerated path. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={`reveal ${className}`}
      initial={reduce ? false : { opacity: 0, transform: "translateY(16px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Tag>
  );
}
