import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ReviewCard } from "@/components/ReviewCard";
import { testimonials } from "@/content/home";

export function ReviewsTeaser() {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <div className="flex items-end justify-between gap-4 mb-3">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink">Отзывы учениц</h2>
          {testimonials.length > 0 && (
            <Link href="/reviews" className="text-sm text-violet hidden sm:inline-block">
              Смотреть все →
            </Link>
          )}
        </div>
        <p className="mb-6 sm:mb-10 max-w-2xl text-sm sm:text-base text-graphite">
          Реальные скриншоты отзывов — в одном формате, с коротким контекстом по смыслу сообщения.
        </p>

        {preview.length === 0 ? (
          <div className="grid sm:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-card border border-border p-5 shadow-sm">
                <ImagePlaceholder ratio="1:1" label="Фото ученицы" className="max-w-[56px]" />
                <p className="text-sm text-graphite mt-3">
                  Соберу и опубликую здесь после согласия учениц на публикацию.
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid items-stretch sm:grid-cols-3 gap-5">
            {preview.map((t) => (
              <ReviewCard key={t.id} testimonial={t} />
            ))}
          </div>
        )}

        {testimonials.length > 0 && (
          <Link href="/reviews" className="mt-6 inline-flex text-sm text-violet sm:hidden">
            Смотреть все отзывы →
          </Link>
        )}
      </div>
    </section>
  );
}
