import Link from "next/link";

export function FinalCta() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-violet-deep">
      <div className="container max-w-container text-center">
        <h2 className="font-display text-3xl lg:text-4xl text-white max-w-2xl mx-auto">
          Расскажите об опыте — подберу программу
        </h2>
        <p className="text-white/70 mt-4 max-w-lg mx-auto">
          Короткая форма или сообщение в мессенджер — без долгих анкет.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/offline"
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-violet-deep shadow-lg shadow-ink/10 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-lavender hover:shadow-xl"
          >
            Оставить заявку на офлайн
          </Link>
          <Link
            href="/online"
            className="inline-flex items-center rounded-full border border-white/40 px-7 py-3.5 text-white transition-all duration-reveal hover:-translate-y-0.5 hover:border-white"
          >
            Выбрать онлайн-курс
          </Link>
        </div>
      </div>
    </section>
  );
}
