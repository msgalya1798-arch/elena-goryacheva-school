import { HorizontalGallery, type GalleryItem } from "@/components/HorizontalGallery";

const works: GalleryItem[] = [
  { src: "/images/student-work/work-15.jpg", alt: "Маникюр: молочный френч с серебристыми разводами на миндалевидной форме" },
  { src: "/images/student-work/work-14.jpg", alt: "Маникюр: розовый мраморный дизайн с золотыми и серебряными разводами" },
  { src: "/images/student-work/work-02.jpg", alt: "Маникюр: перламутровый хром на квадратной форме" },
  { src: "/images/student-work/work-11.jpg", alt: "Маникюр: лавандовый френч и однотонное лавандовое покрытие" },
  { src: "/images/student-work/work-12.jpg", alt: "Маникюр: однотонный лавандовый глянец" },
  { src: "/images/student-work/work-13.jpg", alt: "Маникюр: лавандовый глянец, крупный план" },
  { src: "/images/student-work/work-10.jpg", alt: "Маникюр: чёрный горошек на белом френче" },
  { src: "/images/student-work/work-09.jpg", alt: "Маникюр: голубой френч с серебристым акцентным ногтем" },
  { src: "/images/student-work/work-08.jpg", alt: "Маникюр: нюдовое покрытие с цветочным акцентным дизайном" },
  { src: "/images/student-work/work-06.jpg", alt: "Маникюр: серебристое напыление у кутикулы" },
  { src: "/images/student-work/work-05.jpg", alt: "Маникюр: серебристый растяжной френч" },
  { src: "/images/student-work/work-01.jpg", alt: "Маникюр: розовый омбре с белым напылением" },
  { src: "/images/student-work/work-07.jpg", alt: "Маникюр: перламутровый мраморный дизайн на длинных стилетах" },
  { src: "/images/student-work/work-03.jpg", alt: "Маникюр: фиолетовый мраморный дизайн с неоновым контуром на стилетах" },
  { src: "/images/student-work/work-04.jpg", alt: "Маникюр: малиновый металлик с неоновым жёлтым контуром на стилетах" },
];

export function StudentWork() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink mb-2">
          Работы моих учеников
        </h2>
        <p className="text-graphite max-w-xl mb-6 sm:mb-10">
          Реальные работы, выполненные на курсах.
        </p>
      </div>
      <HorizontalGallery items={works} />
    </section>
  );
}
