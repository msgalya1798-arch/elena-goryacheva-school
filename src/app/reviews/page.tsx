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
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Реальные скриншоты переписок и отзывов — без правок смысла.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <ReviewCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
