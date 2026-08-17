import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function FormatChoice() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Выберите формат под свою задачу
        </h2>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Онлайн — приоритет №1, доминирующая карточка, 7 колонок */}
          <Link
            href="/online"
            className="group lg:col-span-7 rounded-card border border-violet/40 bg-lavender/40 p-5 sm:p-8 shadow-sm shadow-violet/10 transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-xl hover:shadow-violet/20"
          >
            <ImagePlaceholder
              ratio="3:2"
              label="Онлайн-урок за компьютером"
              className="hidden lg:block"
            />
            <Eyebrow className="lg:mt-6">Онлайн · доступ из любого города</Eyebrow>
            <h3 className="font-display text-xl sm:text-2xl text-ink mt-2">
              Хотите разобраться в теме в своём темпе?
            </h3>
            <p className="text-graphite mt-2 text-sm sm:text-base">
              Подойдёт практикующим мастерам: уроки по теме, задания и разбор работ — в зависимости
              от выбранного тарифа.
            </p>
            <span className="inline-flex items-center gap-2 text-violet mt-4 group-hover:gap-3 transition-all duration-reveal">
              Смотреть онлайн-курсы →
            </span>
          </Link>

          {/* Офлайн — вторичная карточка, спокойнее, 5 колонок */}
          <Link
            href="/offline"
            className="group lg:col-span-5 rounded-card border border-border p-5 sm:p-8 shadow-sm transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-xl"
          >
            <ImagePlaceholder
              ratio="3:2"
              label="Обучение в учебном пространстве"
              className="hidden lg:block"
            />
            <Eyebrow className="lg:mt-6">Очно · Каменск-Шахтинский</Eyebrow>
            <h3 className="font-display text-xl sm:text-2xl text-ink mt-2">
              Нужна практика рядом с преподавателем?
            </h3>
            <p className="text-graphite mt-2 text-sm sm:text-base">
              Подойдёт, если важно поставить руку, поработать на моделях и сразу получать
              корректировки в процессе.
            </p>
            <span className="inline-flex items-center gap-2 text-violet mt-4 group-hover:gap-3 transition-all duration-reveal">
              Смотреть очные программы →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
