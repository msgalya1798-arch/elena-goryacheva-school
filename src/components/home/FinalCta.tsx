import Link from "next/link";
import { primaryContactHref } from "@/lib/contact";

export function FinalCta() {
  const ctaHref = primaryContactHref() ?? "/offline";

  return (
    <section className="py-section-sm lg:py-section-lg bg-violet-deep">
      <div className="container max-w-container text-center">
        <h2 className="font-display text-3xl lg:text-4xl text-white max-w-2xl mx-auto">
          Готовы начать понимать логику работы?
        </h2>
        <p className="text-white/70 mt-4 max-w-lg mx-auto">
          Начните с «Логики материалов» — входного онлайн-курса. Не уверены, что подойдёт — расскажите
          об опыте, подскажу лично.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/online/material-logic-online"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-violet-deep shadow-lg shadow-ink/10 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-lavender hover:shadow-xl"
          >
            Начать онлайн-обучение →
          </Link>
          <Link
            href={ctaHref}
            className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 text-white transition-all duration-reveal hover:-translate-y-0.5 hover:border-white"
          >
            Получить рекомендацию
          </Link>
        </div>
      </div>
    </section>
  );
}
