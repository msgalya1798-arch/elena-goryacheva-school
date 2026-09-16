"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import Image from "next/image";
import type { Testimonial } from "@/types/content";

export function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="h-full overflow-hidden rounded-card border border-border bg-white shadow-sm transition-all duration-reveal hover:-translate-y-0.5 hover:shadow-lg">
      <button type="button" aria-haspopup="dialog" aria-label={`Увеличить отзыв: ${testimonial.result}`} onClick={() => setOpen(true)} className="relative block h-[340px] sm:h-[380px] w-full bg-lavender/20 border-b border-border">
        <Image
          src={testimonial.screenshot}
          alt={`Отзыв: ${testimonial.result}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-3 sm:p-4"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-white px-3 py-2 text-sm text-violet shadow-sm">Увеличить ↗</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title={testimonial.result}>
        <Image src={testimonial.screenshot} alt={`Отзыв: ${testimonial.result}`} width={1200} height={1600} sizes="92vw" className="w-full h-auto" />
        <a href={testimonial.screenshot} target="_blank" rel="noopener noreferrer" className="inline-flex py-3 mt-3 text-violet underline">Открыть оригинал в новой вкладке</a>
      </Modal>

      <div className="flex min-h-[220px] flex-col p-5 sm:p-6">
        {testimonial.label && (
          <span className="mb-3 inline-flex w-fit rounded-full bg-lavender px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-violet-deep">
            {testimonial.label}
          </span>
        )}

        <h3 className="font-display text-xl leading-tight text-ink">{testimonial.result}</h3>
        <p className="mt-3 text-sm leading-relaxed text-graphite">{testimonial.story}</p>

        <div className="mt-auto pt-5">
          <div className="border-t border-border pt-4">
            <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
