export function Manifesto() {
  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-8">
          <p className="lg:col-span-3 text-sm text-graphite uppercase tracking-wide">
            Методика
          </p>
          <p className="lg:col-span-9 font-display text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-ink max-w-3xl">
            Я не учу копировать движения. Я учу видеть исходник, понимать
            материалы и архитектуру ногтя — и объяснять, почему выбрано именно
            это решение, а не другое.
          </p>
        </div>
      </div>
    </section>
  );
}
