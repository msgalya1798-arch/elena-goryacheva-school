"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Раздел 6.5 ТЗ: opacity + translateY 8–12px, 220–360ms, без каскадов дольше 500ms.
 * Основной контент остаётся видимым без JS; движение — только progressive enhancement.
 * useReducedMotion гарантирует отключение при prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ y: 10 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.32, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
