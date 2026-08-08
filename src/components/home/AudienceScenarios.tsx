import { audienceScenarios } from "@/content/home";

export function AudienceScenarios() {
  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">
          Кому подходит обучение
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {audienceScenarios.map((scenario) => (
            <div key={scenario.title} className="border-t-2 border-violet pt-5">
              <h3 className="font-display text-xl text-ink">{scenario.title}</h3>
              <p className="text-sm text-graphite mt-3">{scenario.problem}</p>
              <p className="text-sm text-ink mt-3">{scenario.promise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
