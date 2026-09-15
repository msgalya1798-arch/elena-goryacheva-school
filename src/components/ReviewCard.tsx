import Image from "next/image";
import type { Testimonial } from "@/types/content";

export function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="h-full overflow-hidden rounded-card border border-border bg-white shadow-sm transition-all duration-reveal hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-[340px] sm:h-[380px] w-full bg-lavender/20 border-b border-border">
        <Image
          src={testimonial.screenshot}
          alt={`Отзыв: ${testimonial.result}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-3 sm:p-4"
        />
      </div>

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
