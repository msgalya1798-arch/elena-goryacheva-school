import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { testimonials } from "@/content/home";
import { getCourseBySlug } from "@/content/courses";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы учеников об обучении — публикую только после получения согласия на публикацию.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Отзывы</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">
              Что говорят ученики
            </h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Публикую отзывы только после получения согласия ученика — без накрутки и
              отредактированных цитат.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          {testimonials.length === 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-card border border-border bg-white p-6 shadow-sm transition-shadow duration-reveal hover:shadow-lg">
                  <ImagePlaceholder ratio="1:1" label="Фото ученика" className="max-w-[64px]" />
                  <p className="text-sm text-graphite mt-4">
                    Опубликую отзыв после получения согласия ученика на публикацию.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => {
                const course = getCourseBySlug(t.courseSlug);
                return (
                  <div key={t.id} className="rounded-card border border-border bg-white p-6 shadow-sm transition-shadow duration-reveal hover:shadow-lg">
                    <ImagePlaceholder ratio="1:1" label={t.photoPlaceholder} className="max-w-[64px]" />
                    <p className="text-ink mt-4">{t.quote}</p>
                    <p className="text-sm text-graphite mt-4">
                      {t.name} · {t.result}
                    </p>
                    {course && (
                      <p className="text-xs text-violet uppercase tracking-wide mt-3">{course.title}</p>
                    )}
                    {t.hasVideo && (
                      <p className="text-xs text-graphite mt-1">Есть видеоотзыв</p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
