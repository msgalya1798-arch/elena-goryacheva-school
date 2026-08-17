import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { testimonials } from "@/content/home";

export function ReviewsTeaser() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">Отзывы</h2>

        {testimonials.length === 0 ? (
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
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-card border border-border p-5 shadow-sm">
                <p className="text-ink text-sm">{t.quote}</p>
                <p className="text-xs text-graphite mt-3">
                  {t.name} · {t.result}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
