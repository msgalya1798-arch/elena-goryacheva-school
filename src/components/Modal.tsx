"use client";

import { useEffect, useId, useRef, type ReactNode, type RefObject } from "react";

/** Native modal supplies focus containment, inert background and Escape support. */
export function Modal({ open, onClose, title, children, compact = false, returnFocusRef }: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  compact?: boolean;
  returnFocusRef?: RefObject<HTMLElement | null>;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const opener = returnFocusRef?.current ?? document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected) opener.focus();
    };
  }, [open, returnFocusRef]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className={`m-auto w-[92vw] max-h-[90dvh] rounded-card border border-border bg-paper p-0 text-ink backdrop:bg-ink/60 ${compact ? "max-w-lg" : "max-w-4xl"}`}
    >
      <div className="p-4 sm:p-6">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 bg-paper pb-4">
          <h2 id={titleId} className="font-display text-lg sm:text-xl pt-2">{title}</h2>
          <button type="button" onClick={onClose} className="shrink-0 min-h-11 rounded-full border border-border px-4 text-sm hover:border-violet">
            Закрыть
          </button>
        </div>
        {open && children}
      </div>
    </dialog>
  );
}
