import type { ReactNode } from "react";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`inline-flex items-center gap-2 text-sm text-violet uppercase tracking-wide ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
      {children}
    </p>
  );
}
