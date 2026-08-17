import Link from "next/link";

const online = [
  "Уроки",
  "Обучение в своём темпе",
  "Задания",
  "Разбор и обратная связь",
  "Чат и поддержка (для тарифов с поддержкой)",
];

const offline = [
  "Теория заранее",
  "Практика с Еленой",
  "Работа на моделях",
  "Домашнее закрепление",
  "Следующая встреча",
  "Коррекция ошибок",
  "Поддержка после курса",
];

function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-4 space-y-2.5">
      {steps.map((step, i) => (
        <li key={step} className="flex gap-3 text-sm text-graphite">
          <span className="text-violet shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-6 sm:mb-10">
          Как проходит обучение
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="border-t-2 border-violet pt-5">
            <h3 className="font-display text-lg text-ink">Онлайн</h3>
            <StepList steps={online} />
            <Link
              href="/online"
              className="inline-flex items-center gap-2 text-violet mt-4 text-sm hover:gap-3 transition-all duration-reveal"
            >
              Смотреть онлайн-курсы →
            </Link>
          </div>

          <div className="border-t-2 border-border pt-5">
            <h3 className="font-display text-lg text-ink">Офлайн · Каменск-Шахтинский</h3>
            <StepList steps={offline} />
            <Link
              href="/offline"
              className="inline-flex items-center gap-2 text-violet mt-4 text-sm hover:gap-3 transition-all duration-reveal"
            >
              Смотреть очные программы →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
