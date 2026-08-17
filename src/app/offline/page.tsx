import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getCoursesByFormat } from "@/content/courses";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Офлайн-обучение",
  description: `Очные программы маникюра в ${siteConfig.cityPrepositional}: от старта с нуля до сложных исходников и верхних форм.`,
};

export default function OfflineCatalogPage() {
  const offlineCourses = getCoursesByFormat("offline");

  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Офлайн-обучение</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">
              Очные программы в {siteConfig.cityPrepositional}
            </h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Живая работа на моделях, разбор руки и постановка формы вместе со мной —
              от первого касания инструмента до сложных исходников и верхних форм.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offlineCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
