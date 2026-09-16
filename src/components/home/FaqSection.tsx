import { FaqAccordion } from "@/components/FaqAccordion";
import { onlineFaq } from "@/content/faq";
import { homeFaq } from "@/content/home";

export function FaqSection({ audience = "all" }: { audience?: "all" | "online" }) {
  return (
    <section className="py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">
            Частые вопросы
          </h2>

          <FaqAccordion items={audience === "online" ? onlineFaq : homeFaq} />
        </div>
      </div>
    </section>
  );
}
