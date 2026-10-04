const steps = [
  {
    title: "Уроки",
    description: "Записанные уроки и материалы курса. Срок доступа указывается в условиях конкретной программы.",
  },
  {
    title: "Обучение в своём темпе",
    description: "Порядок прохождения и сроки зависят от выбранной программы; актуальные условия указаны на её странице.",
  },
  {
    title: "Задания",
    description: "Практические задания закрепляют каждую тему, а не остаются в теории.",
  },
  {
    title: "Разбор",
    description: "Разбор работ и вопросов доступен там, где он предусмотрен программой.",
  },
  {
    title: "Поддержка",
    description: "Формат поддержки зависит от курса. На странице программы указаны только подтверждённые условия сопровождения.",
  },
];

export function OnlineHowItWorks({ accordion = false }: { accordion?: boolean }) {
  return (
    <section data-editorial-learning data-editorial-tone="dark" className="py-10 sm:py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Как проходит онлайн-обучение
        </h2>

        {accordion ? (
          <div>
            {steps.map((step, i) => (
              <details key={step.title}>
                <summary>
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{step.description}</p>
              </details>
            ))}
          </div>
        ) : <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="border-t-2 border-violet pt-5">
              <p className="text-sm text-violet">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-lg text-ink mt-2">{step.title}</h3>
              <p className="text-sm text-graphite mt-2">{step.description}</p>
            </div>
          ))}
        </div>}
      </div>
    </section>
  );
}
