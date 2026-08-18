import Link from "next/link";

const points = [
  "У одних клиентов покрытие носится идеально, у других появляются отслойки",
  "Приходится менять базы и гели в надежде, что проблема в материале",
  "Непонятно, почему одна схема работает на одном исходнике и не работает на другом",
  "Сложно выбрать материал под конкретную ногтевую пластину",
  "Есть страх навредить клиенту",
  "Есть сомнения в собственной технике",
  "Сложно работать со сложными ногтями",
  "Уже были обучения, но знания так и не сложились в систему",
];

export function PainPoints({ ctaHref = "/online" }: { ctaHref?: string }) {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Узнаёте себя?
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {points.map((point) => (
            <p key={point} className="flex gap-3 text-graphite">
              <span className="text-violet shrink-0">—</span>
              <span>{point}</span>
            </p>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <p className="font-display text-xl sm:text-2xl text-ink max-w-xl">
            Задача обучения — перестать работать методом проб и ошибок и начать понимать логику каждого
            решения.
          </p>
          <Link
            href={ctaHref}
            className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 shrink-0 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
          >
            Смотреть онлайн-курсы →
          </Link>
        </div>
      </div>
    </section>
  );
}
