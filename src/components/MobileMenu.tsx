"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/Modal";
import { primaryNav } from "@/content/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Открыть меню"
        onClick={() => setOpen(true)}
        className="w-11 h-11 flex flex-col items-center justify-center gap-1.5"
      >
        {[0, 1, 2].map((line) => <span key={line} aria-hidden className="block h-0.5 w-6 bg-ink" />)}
      </button>
      <Modal open={open} onClose={close} title="Меню школы" compact>
        <nav aria-label="Мобильная навигация" className="flex flex-col">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} onClick={close} className="py-3 text-base border-b border-border hover:text-violet">
              {link.label}
            </Link>
          ))}
          <Link href="/#finder" onClick={close} className="mt-5 inline-flex justify-center rounded-full bg-violet px-5 py-3 text-white">
            Подобрать обучение
          </Link>
        </nav>
      </Modal>
    </div>
  );
}
