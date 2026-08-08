import Link from "next/link";
import { courses } from "@/content/courses";
import { CourseCard } from "@/components/CourseCard";

// Раздел 9 ТЗ: 3–4 курса — берём по одному ключевому из каждого уровня сложности офлайн + флагман онлайн
const featuredSlugs = ["nail-master-start", "top-master-universal-2", "form-logic-offline", "material-logic-online"];

export function FeaturedCourses() {
  const featured = featuredSlugs
    .map((slug) => courses.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section className="py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="font-display text-3xl lg:text-4xl text-ink">Популярные программы</h2>
          <Link href="/offline" className="text-sm text-violet hidden sm:inline-block">
            Смотреть все →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
