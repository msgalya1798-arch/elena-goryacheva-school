"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { primaryNav } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`block h-0.5 w-6 bg-ink transition-transform duration-reveal ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-ink transition-opacity duration-reveal ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-ink transition-transform duration-reveal ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Мобильная навигация"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 border-b border-border bg-paper px-6 py-4 flex flex-col"
          >
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="py-3 text-base text-ink hover:text-violet transition-colors duration-reveal border-b border-border last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#finder"
              onClick={close}
              className="mt-5 mb-1 inline-flex justify-center items-center rounded-full bg-violet px-5 py-3 text-sm text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:bg-violet-deep"
            >
              Подобрать обучение
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
