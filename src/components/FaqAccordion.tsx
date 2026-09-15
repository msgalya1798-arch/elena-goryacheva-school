import Link from "next/link";
import { primaryContactHref } from "@/lib/contact";

interface FaqItem {
  question: string;
  answer: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const defaultContactHref = primaryContactHref();

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item) => {
        const ctaHref = item.ctaHref ?? defaultContactHref;

        return (
          <details key={item.question} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer text-ink list-none">
              <span className="font-display text-lg pr-4">{item.question}</span>
              <span className="text-violet text-xl shrink-0 group-open:rotate-45 transition-transform duration-reveal">
                +
              </span>
            </summary>
            <p className="text-graphite mt-3 pr-8">{item.answer}</p>
            {item.ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                className="inline-flex items-center mt-4 text-violet hover:underline"
              >
                {item.ctaLabel}
              </Link>
            )}
          </details>
        );
      })}
    </div>
  );
}
