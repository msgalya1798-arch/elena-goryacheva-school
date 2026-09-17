export function MaterialOffer({ amount }: { amount: number | null }) {
  const introductory = amount === 1900;
  return (
    <div className="material-offer mt-5 rounded-card p-5 sm:p-6 text-white">
      {introductory && (
        <p className="inline-flex rounded-full border border-[#bda3dc] px-3 py-1 text-xs leading-relaxed text-white">
          До <time dateTime="2026-10-14" className="ml-1">14 октября</time><span className="ml-1">включительно</span>
        </p>
      )}
      <p className="mt-3 text-sm text-[#eee5f8]">Обучение с поддержкой</p>
      <p className="mt-1 font-display text-4xl sm:text-5xl leading-tight text-white whitespace-nowrap">
        {introductory ? "1 900 ₽" : "3 900 ₽"}
      </p>
      {introductory && <p className="mt-2 text-sm text-[#eee5f8]">С 15 октября — <span className="font-semibold text-white whitespace-nowrap">3 900 ₽</span></p>}
      <p className="mt-4 border-t border-[#9778b8] pt-3 text-sm leading-relaxed text-[#eee5f8]">
        Продление поддержки — <span className="whitespace-nowrap">1 000 ₽/мес.</span>
      </p>
    </div>
  );
}
