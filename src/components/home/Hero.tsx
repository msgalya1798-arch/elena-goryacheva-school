import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/content/site";

const stats = [
  { value: `${siteConfig.experienceYears}`, label: "лет в профессии" },
  { value: `${siteConfig.teachingYears}`, label: "лет преподаю" },
  { value: siteConfig.studentsCount, label: "учеников" },
];

export function Hero() {
  return (
    <section className="pt-4 sm:pt-8 lg:pt-10 pb-6 lg:min-h-[calc(100vh-84px)] lg:flex lg:items-center">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          {/* На мобильном сначала оффер, а не фотография. */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.04}>
              <Eyebrow className="mb-2.5">
                Онлайн-курсы · обучение из любого города
              </Eyebrow>
              <h1 className="font-display text-[25px] sm:text-[34px] lg:text-[50px] xl:text-[58px] leading-[1.1] text-ink max-w-3xl">
                Онлайн-курсы маникюра: материалы и формы
              </h1>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-graphite max-w-xl">
                Я, {siteConfig.expertName}. Помогаю разобраться в материалах, причинах отслоек
                и архитектуре ногтей. Выберите программу под свой опыт и задачу.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="#courses"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Выбрать онлайн-курс
                </Link>
                <Link
                  href="#finder"
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Помочь с выбором
                </Link>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-violet mt-3 hover:gap-3 transition-all duration-reveal"
              >
                О преподавателе →
              </Link>

              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-5 pt-4 border-t border-border max-w-xl">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl sm:text-3xl text-violet-deep">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs text-graphite mt-0.5 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Фото остаётся частью первого экрана, но больше не заслоняет оффер на телефоне. */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative lg:max-w-[390px] lg:ml-auto">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-violet/25 via-lavender to-transparent blur-3xl"
                />
                <div className="relative w-full h-[150px] sm:h-[210px] lg:h-auto lg:aspect-[4/5] overflow-hidden rounded-card">
                  <Image
                    src="/images/elena-portrait.jpg"
                    alt={`Портрет ${siteConfig.expertName}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 390px, 100vw"
                    className="object-cover object-[center_28%] lg:object-center"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
