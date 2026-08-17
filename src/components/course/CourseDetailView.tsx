import Link from "next/link";
import type { Course } from "@/types/content";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { formatPrice } from "@/lib/formatPrice";
import { primaryContactHref } from "@/lib/contact";

const formatLabel: Record<Course["format"], string> = {
  offline: "Офлайн",
  online: "Онлайн",
};

const catalogHref: Record<Course["format"], string> = {
  offline: "/offline",
  online: "/online",
};

export function CourseDetailView({ course }: { course: Course }) {
  const ctaHref = primaryContactHref();

  return (
    <>
      <section className="pt-10 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Link
            href={catalogHref[course.format]}
            className="text-sm text-graphite hover:text-violet transition-colors duration-reveal"
          >
            ← Все программы · {formatLabel[course.format]}
          </Link>

          <Reveal>
            <Eyebrow className="mt-6 mb-4">
              {formatLabel[course.format]} · {course.level}
            </Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl">{course.title}</h1>
            <p className="mt-5 text-lg text-graphite max-w-2xl">{course.mainResult}</p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <ImagePlaceholder ratio="3:2" label={`Работа ученика курса «${course.title}»`} />

              <div className="mt-10">
                <h2 className="font-display text-2xl text-ink">Для кого</h2>
                <p className="text-graphite mt-3">{course.audience}</p>
              </div>

              <div className="mt-10">
                <h2 className="font-display text-2xl text-ink">Что входит в программу</h2>
                <ul className="mt-4 space-y-3">
                  {course.whatYouGet.map((item) => (
                    <li key={item} className="flex gap-3 text-graphite">
                      <span className="text-violet mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {course.whoItsNotFor && (
                <div className="mt-10">
                  <h2 className="font-display text-2xl text-ink">Кому не подойдёт</h2>
                  <p className="text-graphite mt-3">{course.whoItsNotFor}</p>
                </div>
              )}

              {course.faq.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-2xl text-ink">Вопросы по курсу</h2>
                  <div className="mt-4 divide-y divide-border border-t border-border">
                    {course.faq.map((item) => (
                      <div key={item.question} className="py-4">
                        <p className="text-ink font-medium">{item.question}</p>
                        <p className="text-graphite mt-2">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28 rounded-card border border-border bg-white p-6 shadow-lg shadow-ink/5">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-graphite">Длительность</span>
                  <span className="text-ink font-medium text-right">{course.durationLabel}</span>
                </div>

                <div className="flex items-center justify-between gap-4 text-sm mt-3 pt-3 border-t border-border">
                  <span className="text-graphite">Стоимость</span>
                  <span className="text-ink font-medium text-right">{formatPrice(course.price)}</span>
                </div>
                {course.price.note && <p className="text-xs text-graphite mt-2">{course.price.note}</p>}

                {course.nextDate?.value && (
                  <div className="flex items-center justify-between gap-4 text-sm mt-3 pt-3 border-t border-border">
                    <span className="text-graphite">{course.nextDate.label}</span>
                    <span className="text-ink font-medium text-right">{course.nextDate.value}</span>
                  </div>
                )}

                {ctaHref && (
                  <Link
                    href={ctaHref}
                    className="mt-6 inline-flex w-full justify-center items-center rounded-full bg-violet px-6 py-3.5 text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-lg hover:shadow-violet/35"
                  >
                    Записаться на курс
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
