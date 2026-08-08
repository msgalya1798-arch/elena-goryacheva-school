import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { beforeAfterCases } from "@/content/home";

export function ComplexCases() {
  // Раздел 17 ТЗ: не публиковать невыдуманные факты. Реальных кейсов пока нет —
  // показываем честный placeholder-слот вместо придуманной истории.
  const placeholderSlots = beforeAfterCases.length > 0 ? beforeAfterCases : [1, 2];

  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-3">Сложные случаи</h2>
        <p className="text-graphite max-w-2xl mb-10">
          До и после в одинаковом масштабе, свете и ракурсе — с коротким объяснением, почему я
          выбрала именно это решение.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {placeholderSlots.map((item, i) => {
            const isReal = typeof item !== "number";
            return (
              <div key={isReal ? item.id : i}>
                <div className="grid grid-cols-2 gap-2">
                  <ImagePlaceholder ratio="1:1" label="До" />
                  <ImagePlaceholder ratio="1:1" label="После" />
                </div>
                <p className="text-sm text-graphite mt-4">
                  {isReal
                    ? item.decisionExplanation
                    : "Добавлю кейс после получения согласия ученика на публикацию."}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
