import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";

export function FormatChoice() {
  return (
    <section className="py-10 sm:py-12 lg:py-14 bg-white">
      <div className="container max-w-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-6 sm:mb-8">
          <div>
            <Eyebrow className="mb-2">Формат обучения</Eyebrow>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink">
              Выберите формат под свою задачу
            </h2>
          </div>
          <p className="text-sm text-graphite max-w-md">
            Онлайн — основной путь: можно начать из любого города. Очный формат — для тех, кому важна работа рядом с преподавателем.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Онлайн — главный визуальный акцент блока. */}
          <Link
            href="/online"
            className="group relative overflow-hidden lg:col-span-8 rounded-card border border-violet/55 bg-gradient-to-br from-lavender/65 via-white to-white p-6 sm:p-8 shadow-[0_18px_55px_-28px_rgba(105,72,180,0.65)] transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-[0_24px_70px_-28px_rgba(105,72,180,0.8)]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-violet/15 blur-3xl"
            />
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <Eyebrow>Онлайн</Eyebrow>
                <span className="rounded-full border border-violet/20 bg-white/70 px-3 py-1 text-[11px] text-violet-deep">
                  Приоритетный формат
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mt-3">Онлайн-курсы</h3>
              <p className="text-graphite mt-3 max-w-xl text-sm sm:text-base">
                Разбирайтесь в материалах и формах в своём темпе: уроки, задания, разборы и поддержка — в зависимости от программы и тарифа.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-graphite">
                <span>Из любого города</span>
                <span>Можно пересматривать</span>
                <span>Поддержка по тарифу</span>
              </div>
              <span className="inline-flex items-center gap-2 text-violet font-medium mt-6 group-hover:gap-3 transition-all duration-reveal">
                Смотреть онлайн-курсы →
              </span>
            </div>
          </Link>

          {/* Офлайн — заметный, но вторичный маршрут. */}
          <Link
            href="/offline"
            className="group lg:col-span-4 rounded-card border border-border bg-white p-6 sm:p-8 transition-all duration-reveal hover:-translate-y-1 hover:border-violet/60 hover:shadow-lg"
          >
            <Eyebrow>Очно</Eyebrow>
            <h3 className="font-display text-xl sm:text-2xl text-ink mt-3">
              Обучение в Каменске-Шахтинском
            </h3>
            <p className="text-graphite mt-3 text-sm sm:text-base">
              Для тех, кому важно поставить руку, поработать на моделях и получать корректировки прямо в процессе.
            </p>
            <span className="inline-flex items-center gap-2 text-violet mt-6 group-hover:gap-3 transition-all duration-reveal">
              Смотреть очные программы →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
