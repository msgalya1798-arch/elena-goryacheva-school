import Image from "next/image";
import type { Testimonial } from "@/types/content";

export function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-card border border-border bg-white overflow-hidden shadow-sm transition-shadow duration-reveal hover:shadow-lg">
      <div className="relative w-full aspect-[3/4] bg-paper">
        <Image
          src={testimonial.screenshot}
          alt={`Отзыв: ${testimonial.result}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain"
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-graphite">{testimonial.result}</p>
        <p className="text-xs text-ink font-medium mt-1">{testimonial.name}</p>
      </div>
    </div>
  );
}
