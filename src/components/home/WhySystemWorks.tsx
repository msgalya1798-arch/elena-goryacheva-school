const points = [
  "Анализировать исходник",
  "Понимать свойства материалов",
  "Видеть причину проблемы",
  "Самостоятельно выбирать решение",
  "Адаптировать технику к конкретной ситуации",
];

export function WhySystemWorks() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm text-graphite uppercase tracking-wide mb-3">Почему это работает иначе</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.2] text-ink">
              Здесь не учат работать по одной схеме
            </h2>
            <p className="text-graphite mt-4">Потому что одинаковых ногтей не бывает.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-graphite mb-4">Я учу:</p>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-ink border-b border-border pb-3">
                  <span className="text-violet">→</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="font-display text-lg sm:text-xl text-violet-deep mt-6">
              После обучения мастеру не нужна новая инструкция на каждый нестандартный случай.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
