import { testimonials } from "@/content/home";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function ReviewsSection() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">Отзывы</h2>

        {testimonials.length === 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-card border border-border p-6 shadow-sm transition-shadow duration-reveal hover:shadow-lg">
                <ImagePlaceholder ratio="1:1" label="Фото ученика" className="max-w-[64px]" />
                <p className="text-sm text-graphite mt-4">
                  Отзыв появится после получения согласия ученика на публикацию.
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-card border border-border p-6 shadow-sm transition-shadow duration-reveal hover:shadow-lg">
                <p className="text-ink">{t.quote}</p>
                <p className="text-sm text-graphite mt-4">
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
