import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { getCourseBySlug } from "@/content/courses";

export function OnlineSalesBlock() {
  const materials = getCourseBySlug("material-logic-online");
  const forms = getCourseBySlug("form-logic-online");
  if (!materials || !forms) return null;

  return (
    <section id="courses" className="py-10 sm:py-section-sm lg:py-section-lg bg-gradient-to-b from-lavender/50 to-white">
      <div className="container max-w-container">
        <Eyebrow className="mb-3">Онлайн-курсы</Eyebrow>
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink max-w-2xl">
          Не очередные техники для повторения
        </h2>
        <p className="text-graphite mt-3 max-w-2xl">
          Онлайн-курсы помогают понять логику работы: почему материал ведёт себя именно так, как подобрать
          систему под конкретный исходник и что делать, когда стандартная схема не работает.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Логика материалов — главный входной продукт */}
          <div className="rounded-card border border-violet/50 bg-white p-6 sm:p-8 shadow-lg shadow-violet/15">
            <p className="text-xs text-violet uppercase tracking-wide">Входной онлайн-курс</p>
            <h3 className="font-display text-2xl text-ink mt-2">{materials.title}</h3>
            <p className="text-graphite mt-3">{materials.mainResult}</p>

            {materials.tariffs && (
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                {materials.tariffs.map((t) => (
                  <div key={t.name} className="rounded-card border border-border p-4">
                    <p className="text-sm text-ink font-medium">{t.name}</p>
                    <p className="font-display text-xl text-violet-deep mt-1">
                      {t.price.toLocaleString("ru-RU")} ₽
                    </p>
                    {t.description && <p className="text-xs text-graphite mt-2">{t.description}</p>}
                  </div>
                ))}
              </div>
            )}

            <Link
              href={`/${materials.format}/${materials.slug}`}
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 mt-6 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
            >
              Получить доступ →
            </Link>
          </div>

          {/* Логика форм — более глубокий продукт */}
          <div className="rounded-card border border-border bg-white p-6 sm:p-8 shadow-sm">
            <p className="text-xs text-graphite uppercase tracking-wide">Для более глубокой работы</p>
            <h3 className="font-display text-2xl text-ink mt-2">{forms.title}</h3>
            <p className="text-graphite mt-3">{forms.mainResult}</p>

            <ul className="mt-6 space-y-2">
              {forms.whatYouGet.slice(0, 3).map((item) => (
                <li key={item} className="flex gap-2 text-sm text-graphite">
                  <span className="text-violet mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${forms.format}/${forms.slug}`}
              className="inline-flex items-center gap-2 text-violet mt-6 hover:gap-3 transition-all duration-reveal"
            >
              Посмотреть программу →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
