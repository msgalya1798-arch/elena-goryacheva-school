import Link from "next/link";
import { getCoursesByFormat } from "@/content/courses";

export function OfflineRecap() {
  const offlineCourses = getCoursesByFormat("offline");

  return (
    <section className="py-10 sm:py-section-sm">
      <div className="container max-w-container">
        <div className="rounded-card border border-border bg-lavender/30 p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <p className="text-sm text-graphite uppercase tracking-wide mb-2">Офлайн-обучение</p>
              <h2 className="font-display text-2xl sm:text-3xl text-ink">
                Обучение в Каменске-Шахтинском
              </h2>
              <p className="text-graphite mt-3 max-w-lg">
                {offlineCourses.length} очных программ — от первого касания инструмента до сложных
                исходников и верхних форм, с разбором руки вживую.
              </p>
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Link
                href="/offline"
                className="inline-flex justify-center items-center rounded-full bg-ink px-7 py-3.5 text-white transition-all duration-reveal hover:-translate-y-0.5 hover:bg-graphite"
              >
                Записаться на обучение →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
