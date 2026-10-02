import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-section-lg">
      <div className="container max-w-container">
        <p className="text-sm uppercase tracking-wide text-violet">Ошибка 404</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">Страница не найдена</h1>
        <p className="mt-4 max-w-xl text-graphite">
          Возможно, ссылка устарела или адрес введён с ошибкой. Вернитесь к программам обучения.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/online" className="inline-flex rounded-full bg-violet px-6 py-3 text-white hover:bg-violet-deep">
            Онлайн-курсы
          </Link>
          <Link href="/offline" className="inline-flex rounded-full border border-border px-6 py-3 text-ink hover:border-violet">
            Очные курсы
          </Link>
          <Link href="/" className="inline-flex items-center px-3 py-3 text-violet underline">
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}
