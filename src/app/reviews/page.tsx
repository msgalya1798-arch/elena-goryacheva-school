import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { testimonials } from "@/content/home";
import { getCourseBySlug } from "@/content/courses";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы учениц об обучении маникюру у Елены Горячевой.",
};

export default function ReviewsPage() {
  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Отзывы</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">
              Что говорят ученицы
            </h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Реальные отзывы и переписки с ученицами — без правок смысла.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => {
              const course = getCourseBySlug(t.courseSlug ?? "");
              return (
                <div
                  key={t.id}
                  className="flex flex-col rounded-card border border-border bg-white p-6 shadow-sm transition-shadow duration-reveal hover:shadow-lg"
                >
                  <ImagePlaceholder ratio="1:1" label={t.photoPlaceholder} className="max-w-[56px]" />
                  <p className="text-ink mt-4 flex-1">{t.quote}</p>
                  <p className="text-sm text-graphite mt-4">
                    {t.name} · {t.result}
                  </p>
                  {course && (
                    <p className="text-xs text-violet uppercase tracking-wide mt-2">{course.title}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
