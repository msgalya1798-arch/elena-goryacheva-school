import type { Metadata } from "next";
import { sellerDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Реквизиты ИП",
  description: "Реквизиты индивидуального предпринимателя Горячевой Елены Сергеевны.",
};

const mainDetails = [
  ["Наименование", sellerDetails.fullName],
  ["Вид предпринимательства", sellerDetails.entrepreneurType],
  ["ИНН", sellerDetails.inn],
  ["ОГРНИП", sellerDetails.ogrnip],
  ["Дата регистрации", sellerDetails.registrationDate],
  ["Адрес регистрации", sellerDetails.registrationAddress],
  ["Специальный налоговый режим", sellerDetails.taxRegime],
];

const registrationDetails = [
  ["Регистратор", sellerDetails.registrar],
  ["Налоговый орган", sellerDetails.taxAuthority],
  ["Дата постановки на учёт", sellerDetails.taxRegistrationDate],
  ["ОКПО", sellerDetails.okpo],
  ["ОКАТО", sellerDetails.okato],
  ["ОКТМО", sellerDetails.oktmo],
  ["Категория субъекта МСП", sellerDetails.smeCategory],
  ["Дата включения в реестр МСП", sellerDetails.smeIncludedDate],
];

export default function SellerDetailsPage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container max-w-container">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-violet">Юридическая информация</p>
          <h1 className="font-display text-4xl lg:text-5xl text-ink mt-3">Реквизиты ИП</h1>
          <p className="text-graphite mt-4">
            Данные продавца и исполнителя образовательных услуг на сайте.
          </p>

          <section className="mt-10 rounded-card border border-border bg-white overflow-hidden">
            {mainDetails.map(([label, value]) => (
              <div key={label} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-6 px-5 sm:px-6 py-4 border-b border-border last:border-b-0">
                <div className="text-sm text-graphite">{label}</div>
                <div className="text-ink break-words">{value}</div>
              </div>
            ))}
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl text-ink">Регистрационные сведения</h2>
            <div className="mt-5 rounded-card border border-border bg-white overflow-hidden">
              {registrationDetails.map(([label, value]) => (
                <div key={label} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-6 px-5 sm:px-6 py-4 border-b border-border last:border-b-0">
                  <div className="text-sm text-graphite">{label}</div>
                  <div className="text-ink break-words">{value}</div>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-8 text-xs text-graphite">
            Адрес регистрации ИП не является адресом проведения очного обучения. Адрес учебного пространства сообщается отдельно при записи.
          </p>
        </div>
      </div>
    </main>
  );
}
