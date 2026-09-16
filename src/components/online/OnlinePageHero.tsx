import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function OnlinePageHero() {
  return (
    <section className="pt-8 sm:pt-14 md:pt-16 pb-8 sm:pb-section-sm">
      <div className="container max-w-container">
        <div className="max-w-3xl">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="mb-3">Онлайн-курсы · доступ из любого города</Eyebrow>
              <h1 className="font-display text-[30px] sm:text-4xl lg:text-5xl leading-[1.15] text-ink">
                Онлайн-курсы по материалам и формам ногтей
              </h1>
              <p className="mt-4 text-lg text-graphite max-w-xl">
                «Логика материалов» — выбор системы и причины нестабильной носки.
                «Логика форм» — архитектура, моделирование и коррекция.
                Учитесь в своём темпе; обратная связь зависит от программы и тарифа.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#courses"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Смотреть курсы →
                </Link>
                <Link
                  href="/#finder"
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3.5 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Помочь с выбором
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
