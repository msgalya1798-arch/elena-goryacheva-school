import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export interface GalleryItem {
  src?: string; // если нет — рендерится нейтральная заглушка
  alt: string;
}

/** Горизонтальная свайп-галерея: край следующей карточки виден, скролл со snap. */
export function HorizontalGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6 md:pl-10 md:pr-10 xl:pl-16 xl:pr-16 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item, i) => (
        <div key={i} className="snap-start shrink-0 w-[78%] sm:w-[55%] lg:w-[30%]">
          {item.src ? (
            <div className="relative w-full overflow-hidden rounded-card aspect-[4/5]">
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
  );
}
