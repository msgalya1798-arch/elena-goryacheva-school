"use client";

import Image from "next/image";
import { useRef } from "react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export interface GalleryItem {
  src?: string;
  alt: string;
}

export function HorizontalGallery({ items }: { items: GalleryItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollBy({
      left: direction * Math.max(280, scroller.clientWidth * 0.82),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <div className="container max-w-container mb-4 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-white text-ink hover:border-violet hover:text-violet"
          aria-label="Предыдущие работы"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-white text-ink hover:border-violet hover:text-violet"
          aria-label="Следующие работы"
        >
          →
        </button>
      </div>
      <div
        ref={scrollerRef}
        role="region"
        aria-label="Галерея работ учеников"
        tabIndex={0}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6 md:pl-10 md:pr-10 xl:pl-16 xl:pr-16 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={i} className="snap-start shrink-0 w-[78%] sm:w-[55%] lg:w-[30%]">
            {item.src ? (
              <div data-gallery-image className="relative w-full overflow-hidden rounded-card aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, 78vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder ratio="4:5" label={item.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
