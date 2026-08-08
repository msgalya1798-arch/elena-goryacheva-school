import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/home/FinalCta";
import { faqCategories } from "@/content/faq";

export const metadata: Metadata = {
  title: "Вопросы",
  description: "Частые вопросы об обучении маникюру: формат, стоимость, запись и сертификат.",
};

export default function FaqPage() {
  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Вопросы</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">Частые вопросы</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-section-lg">
        <div className="container max-w-container">
          <div className="max-w-3xl space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-2xl text-ink mb-4">{category.title}</h2>
                <FaqAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
