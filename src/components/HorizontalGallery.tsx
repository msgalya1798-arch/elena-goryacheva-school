import { ImagePlaceholder } from "@/components/ImagePlaceholder";

/** Горизонтальная свайп-галерея: край следующей карточки виден, скролл со snap. */
export function HorizontalGallery({ items }: { items: string[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 pr-6 md:pl-10 md:pr-10 xl:pl-16 xl:pr-16 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((label, i) => (
        <div key={i} className="snap-start shrink-0 w-[78%] sm:w-[55%] lg:w-[30%]">
          <ImagePlaceholder ratio="4:5" label={label} />
        </div>
      ))}
    </div>
  );
}
