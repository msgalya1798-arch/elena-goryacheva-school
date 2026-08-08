import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { siteConfig } from "@/content/site";

export function FormatChoice() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">
          Выберите формат
        </h2>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Офлайн — доминирующая карточка, 7 колонок */}
          <Link
            href="/offline"
            className="group lg:col-span-7 rounded-card border border-border p-8 shadow-sm transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-xl"
          >
            <ImagePlaceholder ratio="3:2" label="Обучение в учебном пространстве" />
            <Eyebrow className="mt-6">Офлайн</Eyebrow>
            <h3 className="font-display text-2xl text-ink mt-2">
              Обучение в {siteConfig.city}
            </h3>
            <p className="text-graphite mt-2">
              Живая работа на моделях, разбор руки и постановка формы вместе со
              мной.
            </p>
            <span className="inline-flex items-center gap-2 text-violet mt-4 group-hover:gap-3 transition-all duration-reveal">
              Оставить заявку →
            </span>
          </Link>

          {/* Онлайн — 5 колонок */}
          <Link
            href="/online"
            className="group lg:col-span-5 rounded-card border border-border p-8 shadow-sm transition-all duration-reveal hover:-translate-y-1 hover:border-violet hover:shadow-xl"
          >
            <ImagePlaceholder ratio="3:2" label="Онлайн-урок за компьютером" />
            <Eyebrow className="mt-6">Онлайн</Eyebrow>
            <h3 className="font-display text-2xl text-ink mt-2">Курсы по всей России</h3>
            <p className="text-graphite mt-2">
              Логика материалов и форм в своём темпе, с поддержкой в чате.
            </p>
            <span className="inline-flex items-center gap-2 text-violet mt-4 group-hover:gap-3 transition-all duration-reveal">
              Выбрать курс →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
