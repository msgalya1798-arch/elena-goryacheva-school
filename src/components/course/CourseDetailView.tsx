import Link from "next/link";
import type { Course } from "@/types/content";
import { Eyebrow } from "@/components/Eyebrow";
import { siteConfig } from "@/content/site";
import { ExpertStrip } from "@/components/home/ExpertStrip";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { FaqAccordion } from "@/components/FaqAccordion";
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
              {formatLabel[course.format]} · {course.level}{course.format === "offline" ? ` · ${siteConfig.city}` : ""}
            </Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl">{course.title}</h1>
            <p className="mt-5 text-lg text-graphite max-w-2xl">{course.mainResult}</p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="text-graphite">{course.durationLabel}</span>
              <span className="font-medium text-ink">{formatPrice(course.price)}</span>
            </div>
            {course.price.note && <p className="mt-2 text-sm text-graphite">{course.price.note}</p>}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="#enrollment" className="inline-flex justify-center rounded-full bg-violet px-6 py-3.5 text-white hover:bg-violet-deep">Стоимость и запись →</Link>
              <Link href="#program" className="inline-flex justify-center rounded-full border border-border px-6 py-3.5 text-ink hover:border-violet">Смотреть программу</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ExpertStrip />

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <div>
                <h2 className="font-display text-2xl text-ink">Для кого</h2>
                <p className="text-graphite mt-3">{course.audience}</p>
              </div>

              <div id="program" className="mt-10">
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

              <div className="mt-10 rounded-card border border-violet/20 bg-lavender/30 p-5 sm:p-6">
                <p className="text-sm text-violet uppercase tracking-wide">Сертификат</p>
                <p className="text-graphite mt-2">{course.certificateNote}</p>
              </div>

              {course.faq.length > 0 && (
                <div className="mt-10">
                  <h2 className="font-display text-2xl text-ink">Вопросы по курсу</h2>
                  <div className="mt-4"><FaqAccordion items={course.faq} /></div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div id="enrollment" className="lg:sticky lg:top-28 rounded-card border border-border bg-white p-6 shadow-lg shadow-ink/5">
                <h2 className="font-display text-2xl text-ink mb-5">Стоимость и запись</h2>
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

                <p className="mt-5 text-sm text-graphite">Напишите «{course.title}» и расскажите о своём опыте. Даты, адрес занятий и условия оплаты уточните у Елены до записи.</p>
                {ctaHref && (
                  <Link
                    href={ctaHref}
                    className="mt-6 inline-flex w-full justify-center items-center rounded-full bg-violet px-6 py-3.5 text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-lg hover:shadow-violet/35"
                  >
                    Обсудить запись в Telegram →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReviewsTeaser />
      <section className="py-section-sm bg-lavender/30">
        <div className="container max-w-container">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">Подходит ли вам «{course.title}»?</h2>
          <p className="mt-3 max-w-2xl text-graphite">Обсудите с Еленой вашу подготовку и задачи. Перед записью уточните, что нужно взять с собой и какие материалы понадобятся.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            {ctaHref && <Link href={ctaHref} className="inline-flex justify-center rounded-full bg-violet px-6 py-3.5 text-white hover:bg-violet-deep">Задать вопрос в Telegram →</Link>}
            <Link href={catalogHref[course.format]} className="inline-flex justify-center rounded-full border border-border px-6 py-3.5 text-ink hover:border-violet">Сравнить программы</Link>
          </div>
        </div>
      </section>
    </>
  );
}
