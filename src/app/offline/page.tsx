import type { Metadata } from "next";
import Link from "next/link";
import { ExpertStrip } from "@/components/home/ExpertStrip";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { primaryContactHref } from "@/lib/contact";
import { CourseCard } from "@/components/CourseCard";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getCoursesByFormat } from "@/content/courses";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Офлайн-обучение",
  description: `Очные программы маникюра в ${siteConfig.cityPrepositional}: от старта с нуля до сложных исходников и верхних форм.`,
};

export default function OfflineCatalogPage() {
  const offlineCourses = getCoursesByFormat("offline");
  const groups = [
    { id: "start", title: "Начать с нуля или восстановить базу", description: "«Nail-мастер: старт» — без наращивания. «ТОП мастер универсал — 2 ступень» — с базой и наращиванием; подходит и без предыдущего обучения.", courses: offlineCourses.filter((course) => course.level === "с нуля") },
    { id: "advanced", title: "Развиваться после базового обучения", description: "Выбирайте под задачу: комплексная практика, скорость и портфолио или работа с верхними формами.", courses: offlineCourses.filter((course) => course.level !== "с нуля") },
  ];
  const ctaHref = primaryContactHref();

  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <Reveal>
            <Eyebrow className="mb-4">Офлайн-обучение</Eyebrow>
            <h1 className="font-display text-4xl lg:text-5xl text-ink max-w-2xl">
              Очные программы в {siteConfig.cityPrepositional}
            </h1>
            <p className="mt-4 text-lg text-graphite max-w-xl">
              Живая работа на моделях, разбор руки и постановка формы вместе со мной —
              от первого касания инструмента до сложных исходников и верхних форм.
            </p>
            <nav aria-label="Выбор уровня обучения" className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="#start" className="inline-flex justify-center rounded-full bg-violet px-6 py-3 text-white hover:bg-violet-deep">Начинаю с нуля</Link>
              <Link href="#advanced" className="inline-flex justify-center rounded-full border border-border px-6 py-3 text-ink hover:border-violet">Уже есть опыт</Link>
            </nav>
            <p className="mt-5 text-sm text-graphite">Не можете приехать? <Link href="/online" className="text-violet hover:underline">Посмотрите онлайн-курсы →</Link></p>
          </Reveal>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.id} id={group.id} className="pb-section-sm lg:pb-section-lg">
          <div className="container max-w-container">
            <h2 className="font-display text-2xl sm:text-3xl text-ink">{group.title}</h2>
            <p className="mt-3 mb-6 text-graphite max-w-3xl">{group.description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.courses.map((course) => <CourseCard key={course.slug} course={course} />)}
            </div>
          </div>
        </section>
      ))}
      <ExpertStrip />
      <ReviewsTeaser />
      <section className="py-section-sm bg-lavender/30">
        <div className="container max-w-container">
          <h2 className="font-display text-2xl sm:text-3xl text-ink">Обсудим программу и даты</h2>
          <p className="mt-3 text-graphite max-w-2xl">Напишите Елене, какой у вас опыт, чему хотите научиться и когда можете приехать. Перед записью уточните расписание, адрес занятий и что понадобится для обучения.</p>
          {ctaHref && <Link href={ctaHref} className="mt-6 inline-flex justify-center rounded-full bg-violet px-6 py-3.5 text-white hover:bg-violet-deep">Подобрать очный курс в Telegram →</Link>}
        </div>
      </section>
    </>
  );
}
