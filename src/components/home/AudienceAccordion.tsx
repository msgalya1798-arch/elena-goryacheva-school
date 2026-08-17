import Link from "next/link";
import { audienceSegments } from "@/content/home";
import { getCourseBySlug } from "@/content/courses";

export function AudienceAccordion() {
  return (
    <section id="finder" className="py-10 sm:py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Найди свою точку роста
        </h2>

        <div className="divide-y divide-border border-t border-b border-border">
          {audienceSegments.map((segment, i) => (
            <details key={segment.title} className="group py-5" open={i === 0}>
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="flex items-center gap-4">
                  <span className="text-sm text-violet">{segment.number}</span>
                  <span className="font-display text-lg sm:text-xl text-ink">{segment.title}</span>
                </span>
                <span className="text-violet text-xl shrink-0 group-open:rotate-45 transition-transform duration-reveal">
                  +
                </span>
              </summary>

              <div className="mt-4 pl-0 sm:pl-9">
                <p className="text-graphite text-sm sm:text-base max-w-xl">{segment.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mt-5">
                  {segment.primary.map((rec) => {
                    const course = getCourseBySlug(rec.courseSlug);
                    if (!course) return null;
                    return (
                      <div key={rec.courseSlug} className="rounded-card border border-border bg-white p-4">
                        <p className="text-xs text-graphite uppercase tracking-wide">Вам подойдёт</p>
                        <p className="font-display text-lg text-ink mt-1">{course.title}</p>
                        <p className="text-sm text-graphite mt-2">{rec.reason}</p>
                        <Link
                          href={`/${course.format}/${course.slug}`}
                          className="inline-flex items-center gap-2 text-violet mt-3 text-sm hover:gap-3 transition-all duration-reveal"
                        >
                          Смотреть программу →
                        </Link>
                      </div>
                    );
                  })}
                </div>

                {segment.secondary &&
                  (() => {
                    const course = getCourseBySlug(segment.secondary.courseSlug);
                    if (!course) return null;
                    return (
                      <p className="text-sm text-graphite mt-4">
                        Также может подойти:{" "}
                        <Link
                          href={`/${course.format}/${course.slug}`}
                          className="text-violet hover:underline"
                        >
                          {course.title} →
                        </Link>
                      </p>
                    );
                  })()}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
