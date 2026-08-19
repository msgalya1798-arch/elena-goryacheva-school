import Link from "next/link";
import type { Course } from "@/types/content";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { StudentWork } from "@/components/home/StudentWork";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { FaqAccordion } from "@/components/FaqAccordion";
import { formatPrice } from "@/lib/formatPrice";
import { primaryContactHref } from "@/lib/contact";

/**
 * Полноценный продающий лендинг для онлайн-курса (ТЗ "online sales v2", разделы 14–15).
 * В отличие от общего CourseDetailView — рассчитан на посетителя, который приходит по
 * прямой ссылке (из рекламы/соцсетей) и должен иметь возможность дойти до покупки, не
 * заходя на главную.
 */
export function OnlineCourseLanding({ course }: { course: Course }) {
  const landing = course.onlineLanding;
  const ctaHref = primaryContactHref();

  return (
    <>
      {/* Hero */}
      <section className="pt-10 md:pt-16 pb-8 sm:pb-section-sm">
        <div className="container max-w-container">
          <Link href="/online" className="text-sm text-graphite hover:text-violet transition-colors duration-reveal">
            ← Все онлайн-курсы
          </Link>

          <Reveal>
            <Eyebrow className="mt-6 mb-4">Онлайн · {course.level}</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-3xl">{course.title}</h1>
            <p className="mt-5 text-lg text-graphite max-w-2xl">{landing?.heroResult ?? course.mainResult}</p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-graphite">
              <span>{course.durationLabel}</span>
              <span className="text-ink font-medium">{formatPrice(course.price)}</span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {course.tariffs ? (
                <Link
                  href="#tariffs"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Получить доступ →
                </Link>
              ) : (
                ctaHref && (
                  <Link
                    href={ctaHref}
                    className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                  >
                    Узнать условия →
                  </Link>
                )
              )}
              {ctaHref && course.tariffs && (
                <Link
                  href={ctaHref}
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3.5 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Задать вопрос
                </Link>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Узнаёте себя? */}
      {landing && landing.painPoints.length > 0 && (
        <section className="py-10 sm:py-section-sm bg-white">
          <div className="container max-w-container">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Узнаёте себя?</h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {landing.painPoints.map((point) => (
                <p key={point} className="flex gap-3 text-graphite">
                  <span className="text-violet shrink-0">—</span>
                  <span>{point}</span>
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Что изменится после курса */}
      {landing && landing.outcomes.length > 0 && (
        <section className="py-10 sm:py-section-sm">
          <div className="container max-w-container">
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Что изменится после курса</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {landing.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-card border border-border bg-white p-4">
                  <span className="text-violet shrink-0">✓</span>
                  <span className="text-ink">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Что внутри курса */}
      <section className="py-10 sm:py-section-sm bg-white">
        <div className="container max-w-container">
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Что внутри курса</h2>
          <ul className="space-y-3 max-w-2xl">
            {course.whatYouGet.map((item) => (
              <li key={item} className="flex gap-3 text-graphite">
                <span className="text-violet mt-1">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Тарифы */}
      {course.tariffs && (
        <section id="tariffs" className="py-10 sm:py-section-sm lg:py-section-lg">
          <div className="container max-w-container">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">Тарифы</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {course.tariffs.map((tariff, i) => (
                <div
                  key={tariff.name}
                  className={`rounded-card border p-6 sm:p-8 ${
                    i === 0 ? "border-border bg-white shadow-sm" : "border-violet/50 bg-white shadow-lg shadow-violet/15"
                  }`}
                >
                  <p className="text-sm text-graphite uppercase tracking-wide">{tariff.name}</p>
                  <p className="font-display text-3xl text-violet-deep mt-2">
                    {tariff.price.toLocaleString("ru-RU")} ₽
                  </p>
                  {tariff.description && <p className="text-graphite mt-3">{tariff.description}</p>}
                  {ctaHref && (
                    <Link
                      href={ctaHref}
                      className={`mt-6 inline-flex w-full justify-center items-center rounded-full px-6 py-3.5 transition-all duration-reveal hover:-translate-y-0.5 ${
                        i === 0
                          ? "border border-border text-ink hover:border-violet"
                          : "bg-violet text-white shadow-md shadow-violet/25 hover:bg-violet-deep hover:shadow-lg"
                      }`}
                    >
                      {tariff.ctaLabel}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Поддержка */}
      {landing && landing.support.length > 0 && (
        <section className="py-10 sm:py-section-sm bg-white">
          <div className="container max-w-container">
            <div className="grid lg:grid-cols-12 gap-6">
              <p className="lg:col-span-3 text-sm text-graphite uppercase tracking-wide">Поддержка</p>
              <div className="lg:col-span-9 max-w-2xl">
                <ul className="space-y-2">
                  {landing.support.map((item) => (
                    <li key={item} className="flex gap-3 text-graphite">
                      <span className="text-violet mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <StudentWork />
      <ReviewsTeaser />

      {/* FAQ по курсу */}
      {course.faq.length > 0 && (
        <section className="py-10 sm:py-section-sm lg:py-section-lg">
          <div className="container max-w-container">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6">Вопросы по курсу</h2>
              <FaqAccordion items={course.faq} />
            </div>
          </div>
        </section>
      )}

      {/* Финальный CTA — повтор тарифов */}
      <section className="py-section-sm lg:py-section-lg bg-violet-deep">
        <div className="container max-w-container text-center">
          <h2 className="font-display text-3xl lg:text-4xl text-white max-w-2xl mx-auto">
            Готовы начать — «{course.title}»
          </h2>
          {course.tariffs ? (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {course.tariffs.map((tariff, i) =>
                ctaHref ? (
                  <Link
                    key={tariff.name}
                    href={ctaHref}
                    className={
                      i === 0
                        ? "inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 text-white transition-all duration-reveal hover:-translate-y-0.5 hover:border-white"
                        : "inline-flex items-center rounded-full bg-white px-7 py-3.5 text-violet-deep shadow-lg shadow-ink/10 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-lavender hover:shadow-xl"
                    }
                  >
                    {tariff.ctaLabel}
                  </Link>
                ) : null
              )}
            </div>
          ) : (
            ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-violet-deep shadow-lg shadow-ink/10 mt-8 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-lavender hover:shadow-xl"
              >
                Узнать условия и записаться →
              </Link>
            )
          )}
        </div>
      </section>
    </>
  );
}
