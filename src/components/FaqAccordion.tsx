export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item) => (
        <details key={item.question} className="group py-5">
          <summary className="flex items-center justify-between cursor-pointer text-ink list-none">
            <span className="font-display text-lg pr-4">{item.question}</span>
            <span className="text-violet text-xl shrink-0 group-open:rotate-45 transition-transform duration-reveal">
              +
            </span>
          </summary>
          <p className="text-graphite mt-3 pr-8">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
