import Link from "next/link";
import { getCourseBySlug } from "@/content/courses";
import { formatPrice } from "@/lib/formatPrice";

export function CourseComparison() {
  const materials = getCourseBySlug("material-logic-online");
  const forms = getCourseBySlug("form-logic-online");
  if (!materials || !forms) return null;

  const rows = [
    { label: "Для кого", materials: materials.audience, forms: forms.audience },
    { label: "Длительность", materials: materials.durationLabel, forms: forms.durationLabel },
    { label: "Цена", materials: formatPrice(materials.price), forms: formatPrice(forms.price) },
  ];

  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Сравните курсы
        </h2>

        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="min-w-[560px] md:min-w-0 grid grid-cols-[minmax(140px,1fr)_1.2fr_1.2fr] gap-px bg-border rounded-card overflow-hidden border border-border">
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
                Получить доступ →
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
