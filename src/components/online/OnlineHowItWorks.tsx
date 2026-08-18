const steps = [
  {
    title: "Уроки",
    description: "Видео-уроки и протоколы, которые можно пересматривать в любое время.",
  },
  {
    title: "Обучение в своём темпе",
    description: "Проходите программу без привязки к расписанию — начинаете и продолжаете, когда удобно.",
  },
  {
    title: "Задания",
    description: "Практические задания закрепляют каждую тему, а не остаются в теории.",
  },
  {
    title: "Разбор",
    description: "Присылаете свою работу или вопрос — получаете конкретный разбор, а не общий комментарий.",
  },
  {
    title: "Поддержка",
    description: "Для тарифа «С поддержкой» — общий чат, созвоны и возможность продления доступа.",
  },
];

export function OnlineHowItWorks() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Как проходит онлайн-обучение
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="border-t-2 border-violet pt-5">
              <p className="text-sm text-violet">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-lg text-ink mt-2">{step.title}</h3>
              <p className="text-sm text-graphite mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
