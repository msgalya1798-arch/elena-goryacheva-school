import { HorizontalGallery } from "@/components/HorizontalGallery";

const placeholders = [
  "Елена с выпускницами",
  "Вручение сертификата",
  "Групповое фото курса",
  "Выпускной кадр",
];

export function Graduates() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-2">Мои выпускники</h2>
        <p className="text-graphite max-w-xl mb-6 sm:mb-10">
          Фото появятся здесь после согласования с выпускницами.
        </p>
      </div>
      <HorizontalGallery items={placeholders} />
    </section>
  );
}
