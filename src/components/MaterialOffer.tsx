export function MaterialOffer({ amount }: { amount: number | null }) {
  const introductory = amount === 1900;
  return (
    <div className="mt-5 rounded-card border-2 border-amber-400 bg-amber-100 p-5 text-ink shadow-md">
      <p className="text-xs font-bold uppercase tracking-wide text-amber-900">Логика материалов · с поддержкой</p>
      <p className="mt-2 font-display text-3xl">{introductory ? "1 900 ₽" : "3 900 ₽"}</p>
      {introductory ? (
        <>
          <p className="mt-2 font-semibold">Цена до 14 октября 2026 включительно</p>
          <p className="mt-1 text-lg font-semibold text-amber-900">С 15 октября — 3 900 ₽</p>
        </>
      ) : <p className="mt-2">Стоимость обучения с поддержкой</p>}
      <p className="mt-3 text-sm">Продление поддержки — 1 000 ₽ в месяц.</p>
    </div>
  );
}
