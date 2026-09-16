const credentials = [
  {
    type: "Диплом инструктора",
    title: "Burlesque School",
    meta: "Выдан 07.04.2025",
    description:
      "Диплом инструктора с правом преподавания техники моделирования на верхних формах.",
    note: "Образовательная лицензия Л035-01198-02/00172127",
  },
  {
    type: "Соглашение",
    title: "Работа с лицензированной школой",
    meta: "Заключено 21.12.2022",
    description:
      "Соглашение о взаимодействии в части предоставления права пользования образовательной лицензией для организации и проведения образовательных занятий.",
    note: "В документе предусмотрена выдача документов об образовании соответствующего образца с указанием лицензии школы.",
  },
  {
    type: "Лицензионная карта инструктора",
    title: "MultiProfessional University",
    meta: "Октябрь 2021",
    description:
      "Инструкторская подготовка по программе «Мультинаращивание 1.0» в Каменске-Шахтинском.",
    note: "Подтверждает дополнительную инструкторскую подготовку Елены.",
  },
];

export function QualificationProof() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-paper">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.16em] text-violet">Почему мне доверяют</p>
            <h2 className="font-display text-3xl lg:text-4xl text-ink mt-3">
              Квалификация подтверждена документами
            </h2>
            <p className="text-graphite mt-4 max-w-md">
              Я продолжаю учиться как мастер и как преподаватель. Здесь — документы, которые подтверждают мою инструкторскую подготовку и право преподавать отдельные техники.
            </p>
            <p className="text-xs text-graphite mt-4 max-w-md">
              На сайте публикуется только информация из документов без паспортных и других лишних персональных данных.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-4 sm:grid-cols-2">
            {credentials.map((credential, index) => (
              <article
                key={credential.title}
                className={`rounded-card border border-border bg-white p-5 sm:p-6 shadow-sm ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex rounded-full border border-violet/20 bg-lavender/30 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-violet-deep">
                    {credential.type}
                  </span>
                  <span className="text-xs text-graphite text-right">{credential.meta}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-ink mt-5">{credential.title}</h3>
                <p className="text-graphite mt-3 leading-relaxed">{credential.description}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="text-sm text-ink">{credential.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
