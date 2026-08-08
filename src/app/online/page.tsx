import type { Metadata } from "next";
import { CourseCard } from "@/components/CourseCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getCoursesByFormat } from "@/content/courses";

export const metadata: Metadata = {
  title: "Онлайн-курсы",
  description: "Онлайн-курсы по маникюру по всей России: логика материалов и форм в своём темпе, с поддержкой в чате.",
};

export default function OnlineCatalogPage() {
  const onlineCourses = getCoursesByFormat("online");

  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Онлайн-курсы</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">Курсы по всей России</h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Логика материалов и форм в своём темпе, с поддержкой в чате — без очной части, но с
              разбором ваших работ.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {onlineCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
