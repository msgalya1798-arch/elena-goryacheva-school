import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { beforeAfterCases } from "@/content/home";

export const metadata: Metadata = {
  title: "Результаты",
  description:
    "Работы учеников и разбор сложных случаев до и после — публикуются только подтверждённые факты и работы с согласия учеников.",
};

export default function ResultsPage() {
  // Раздел 17 ТЗ: не публиковать невыдуманные факты. Реальных кейсов пока нет —
  // показываем честный placeholder-слот вместо придуманной истории (см. также ComplexCases).
  const caseSlots = beforeAfterCases.length > 0 ? beforeAfterCases : [1, 2, 3, 4];

  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Результаты</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">
              Работы учеников и разбор сложных случаев
            </h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Публикуем только подтверждённые работы и факты — с согласия учеников, без обещаний
              заработка или гарантированного результата.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-3">Сложные случаи</h2>
          <p className="text-graphite max-w-2xl mb-10">
            До и после в одинаковом масштабе, свете и ракурсе — с коротким объяснением, почему
            выбрано именно это решение.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {caseSlots.map((item, i) => {
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
                      : "Кейс будет добавлен после получения согласия ученика на публикацию."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-section-sm lg:py-section-lg bg-white">
        <div className="container max-w-container">
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-3">Работы учеников</h2>
          <p className="text-graphite max-w-2xl mb-10">
            Фотографии работ, которые ученики разрешили опубликовать.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ImagePlaceholder key={i} ratio="1:1" label="Работа ученика" />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
