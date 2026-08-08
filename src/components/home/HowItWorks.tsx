const steps = [
  { title: "Теория", description: "Объясняю материалы, протоколы и логику решений — до или во время очной части." },
  { title: "Практика", description: "Слежу за работой на моделях, разбираю руки и сложные исходники." },
  { title: "Индивидуальное закрепление", description: "Корректирую технику под конкретные пробелы каждого ученика." },
  { title: "Поддержка", description: "Разбираю работы и отвечаю на вопросы после завершения программы." },
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
