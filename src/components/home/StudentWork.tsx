import { HorizontalGallery } from "@/components/HorizontalGallery";

const placeholders = Array.from({ length: 6 }, () => "Работа ученицы");

export function StudentWork() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-2">
          Работы моих учеников
        </h2>
        <p className="text-graphite max-w-xl mb-6 sm:mb-10">
          Фото появятся здесь по мере готовности и согласия учениц на публикацию.
        </p>
      </div>
      <HorizontalGallery items={placeholders} />
    </section>
  );
}
