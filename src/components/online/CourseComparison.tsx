import Link from "next/link";
import { getCourseBySlug } from "@/content/courses";
import { formatPrice } from "@/lib/formatPrice";

export function CourseComparison() {
  const materials = getCourseBySlug("material-logic-online");
  const forms = getCourseBySlug("form-logic-online");
  if (!materials || !forms) return null;

  const materialsPrice = materials.tariffs
    ? materials.tariffs.map((tariff) => `${tariff.name} — ${tariff.price.toLocaleString("ru-RU")} ₽`).join(" / ")
    : formatPrice(materials.price);

  const rows = [
    { label: "Для кого", materials: materials.audience, forms: forms.audience },
    { label: "Доступ и поддержка", materials: materials.durationLabel, forms: forms.durationLabel },
    { label: "Цена", materials: materialsPrice, forms: formatPrice(forms.price) },
    { label: "Продление", materials: "Поддержку можно продлить за 1 000 ₽", forms: "Есть возможность продления доступа" },
  ];

  return (
    <section id="comparison" className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Сравните курсы
        </h2>

        <details className="group md:hidden rounded-card border border-border p-5">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-ink">
            <span>
              <span className="block font-display text-lg">Доступ, поддержка и стоимость</span>
              <span className="block mt-1 text-sm text-graphite group-open:hidden">Развернуть подробное сравнение</span>
              <span className="hidden mt-1 text-sm text-graphite group-open:block">Свернуть сравнение</span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-2xl text-violet group-open:rotate-45">+</span>
          </summary>
          <div className="grid gap-5 mt-5">
          {[{ course: materials, key: "materials" as const }, { course: forms, key: "forms" as const }].map(({ course, key }) => (
            <article key={course.slug} className="rounded-card border border-border bg-white p-5">
              <h3 className="font-display text-xl">{course.title}</h3>
              <dl className="mt-4 divide-y divide-border">
                {rows.map((row) => (
                  <div key={row.label} className="py-3">
                    <dt className="text-sm text-graphite">{row.label}</dt>
                    <dd className="mt-1 text-base text-ink">{row[key]}</dd>
                  </div>
                ))}
              </dl>
              <Link href={`/${course.format}/${course.slug}`} className="inline-flex min-h-11 items-center mt-3 text-violet underline">Посмотреть программу →</Link>
            </article>
          ))}
        </div>
        </details>
        <div className="hidden md:block">
          <div className="grid grid-cols-[minmax(140px,1fr)_1.2fr_1.2fr] gap-px bg-border rounded-card overflow-hidden border border-border">
            <div className="bg-paper p-4" />
            <div className="bg-paper p-4">
              <p className="font-display text-lg text-ink">{materials.title}</p>
            </div>
            <div className="bg-paper p-4">
              <p className="font-display text-lg text-ink">{forms.title}</p>
            </div>

            {rows.map((row) => (
              <div key={row.label} className="contents">
                <div className="bg-white p-4 text-sm text-graphite">{row.label}</div>
                <div className="bg-white p-4 text-sm text-ink">{row.materials}</div>
                <div className="bg-white p-4 text-sm text-ink">{row.forms}</div>
              </div>
            ))}

            <div className="bg-white p-4" />
            <div className="bg-white p-4">
              <Link href={`/${materials.format}/${materials.slug}`} className="text-violet text-sm hover:underline">
                Посмотреть программу →
              </Link>
            </div>
            <div className="bg-white p-4">
              <Link href={`/${forms.format}/${forms.slug}`} className="text-violet text-sm hover:underline">
                Посмотреть программу →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
