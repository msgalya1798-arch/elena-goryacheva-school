const cards = [
  {
    title: "Видите исходник до начала работы",
    description:
      "Оцениваете форму и особенности ногтевой пластины, чтобы выбрать подход к работе, а не действовать по одному шаблону.",
  },
  {
    title: "Осознанно выбираете материал",
    description:
      "Понимаете различия баз, гелей и комбинированных систем и соотносите материал с конкретной задачей.",
  },
  {
    title: "Работаете с архитектурой",
    description:
      "Выстраиваете форму и баланс с учётом исходника, избегая лишних действий и случайных решений.",
  },
  {
    title: "Понимаете причины ошибок",
    description:
      "Разбираете, из-за чего появляются отслойки, сколы или лишний опил, и знаете, какой этап нужно скорректировать.",
  },
];

export function WhatChanges() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink max-w-2xl">
          Что меняется после обучения
        </h2>
        <p className="text-graphite mt-4 max-w-xl">
          Вы не просто повторяете технику — начинаете понимать, что делать в конкретной ситуации и
          как корректировать ошибку.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {cards.map((card, i) => (
            <div key={card.title} className="border-t-2 border-violet pt-5">
              <p className="text-sm text-violet">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-lg text-ink mt-2">{card.title}</h3>
              <p className="text-sm text-graphite mt-3">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
