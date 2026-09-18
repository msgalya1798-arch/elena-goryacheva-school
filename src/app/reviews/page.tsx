import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { FinalCta } from "@/components/home/FinalCta";
import { testimonials } from "@/content/home";

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
            <p className="mt-4 text-lg text-graphite max-w-2xl">
              Отзывы об обучении в школе Елены. Нажмите на скриншот, чтобы прочитать оригинал крупно.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((t) => (
              <ReviewCard key={t.id} testimonial={t} />
            ))}
          </div>
          {testimonials.length > 6 && (
            <details className="group mt-8">
              <summary className="mx-auto flex min-h-12 w-fit cursor-pointer list-none items-center justify-center rounded-full border border-violet px-7 py-3 text-violet hover:bg-lavender">
                <span className="group-open:hidden">Показать ещё {testimonials.length - 6} отзывов</span>
                <span className="hidden group-open:inline">Свернуть дополнительные отзывы</span>
              </summary>
              <div className="mt-6 grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {testimonials.slice(6).map((t) => <ReviewCard key={t.id} testimonial={t} />)}
              </div>
            </details>
          )}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
