import { FaqAccordion } from "@/components/FaqAccordion";
import { homeFaq } from "@/content/home";

export function FaqSection() {
  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">
            Частые вопросы
          </h2>

          <FaqAccordion items={homeFaq} />
        </div>
      </div>
    </section>
  );
}
