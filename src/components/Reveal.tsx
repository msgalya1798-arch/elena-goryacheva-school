"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Раздел 6.5 ТЗ: translateY 8–12px, 220–360ms, без каскадов дольше 500ms.
 * Основной контент остаётся видимым без JS; движение — только progressive enhancement.
 * SSR и первый клиентский render используют одну и ту же видимую разметку.
 */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      animation = element.animate(
        [{ transform: "translateY(10px)" }, { transform: "translateY(0)" }],
        { duration: 320, delay: delay * 1000, easing: "ease-out" },
      );
      observer.disconnect();
    }, { rootMargin: "-80px" });
    const stop = () => {
      if (preference.matches) { animation?.cancel(); observer.disconnect(); }
    };
    observer.observe(element);
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stop);
    };
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}
