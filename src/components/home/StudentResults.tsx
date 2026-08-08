import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function StudentResults() {
  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-3">Результаты учеников</h2>
        <p className="text-graphite max-w-2xl mb-10">
          Работы и наблюдаемые изменения в качестве — публикую только подтверждённые факты.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <ImagePlaceholder key={i} ratio="1:1" label="Работа ученика" />
          ))}
        </div>
      </div>
    </section>
  );
}
