"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Keep SSR and the first client render identical, including reduced-motion users. */
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
        [{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 320, delay: delay * 1000, easing: "ease-out" },
      );
      observer.disconnect();
    });
    const stop = () => { if (preference.matches) { animation?.cancel(); observer.disconnect(); } };
    observer.observe(element);
    preference.addEventListener("change", stop);
    return () => { observer.disconnect(); animation?.cancel(); preference.removeEventListener("change", stop); };
  }, [delay]);
  return <div ref={ref}>{children}</div>;
}
