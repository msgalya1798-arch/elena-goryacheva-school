const steps = [
  { title: "Теория", description: "Материалы, протоколы и логика решений — до или во время очной части." },
  { title: "Практика", description: "Работа на моделях под наблюдением, разбор рук и сложных исходников." },
  { title: "Индивидуальное закрепление", description: "Корректировка техники под конкретные пробелы ученика." },
  { title: "Поддержка", description: "Разбор работ и вопросы после завершения программы." },
];

export function HowItWorks() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">Как проходит обучение</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.title}>
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
