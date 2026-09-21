import { onlineContent } from "@/content/online";

export function OnlineHowItWorks() {
  return (
    <section className="py-10 sm:py-section-sm">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl text-ink mb-6 sm:mb-10">{onlineContent.stepsTitle}</h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {onlineContent.steps.map((step, i) => (
            <li key={step.title} className="border-t border-violet pt-5">
              <p aria-hidden="true" className="text-sm text-violet">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-base text-ink mt-2">{step.title}</h3>
              <p className="text-sm text-graphite mt-2">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
