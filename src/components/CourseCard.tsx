import Link from "next/link";
import type { Course } from "@/types/content";
import { formatPrice } from "@/lib/formatPrice";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/${course.format}/${course.slug}`}
      className="group flex flex-col rounded-card border border-border bg-white p-6 shadow-sm transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-full bg-lavender px-3 py-1 text-xs uppercase tracking-wide text-violet-deep">
          {course.format === "offline" ? "Офлайн" : "Онлайн"} · {course.level}
        </span>
      </div>

      <h3 className="font-display text-xl text-ink mt-3">{course.title}</h3>
      <p className="text-sm text-graphite mt-2 flex-1">{course.mainResult}</p>

      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-sm">
        <span className="text-graphite">{course.durationLabel}</span>
        <span className="text-ink font-medium">{formatPrice(course.price)}</span>
      </div>

      <span className="inline-flex items-center gap-2 text-violet mt-4 text-sm group-hover:gap-3 transition-all duration-reveal">
        Смотреть программу →
      </span>
    </Link>
  );
}
