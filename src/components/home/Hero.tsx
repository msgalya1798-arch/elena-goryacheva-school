import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="pt-12 md:pt-20 pb-section-sm">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Текст и действия — 5 колонок на десктопе */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <Eyebrow className="mb-4">
                Авторская школа маникюра · {siteConfig.city} / онлайн
              </Eyebrow>
              <h1 className="font-display text-[42px] sm:text-[50px] lg:text-[64px] xl:text-[76px] leading-[1.05] text-ink">
                Маникюр как система, а не набор движений.
              </h1>
              <p className="mt-6 text-lg text-graphite max-w-md">
                Я, {siteConfig.expertName}, учу видеть исходник, понимать материалы и
                архитектуру ногтя, безопасно работать со сложными случаями и уверенно
                принимать решения.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/offline"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Выбрать обучение
                </Link>
                <Link
                  href="/online"
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3.5 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Смотреть программы
                </Link>
              </div>

              <p className="mt-8 text-sm text-graphite">
                {siteConfig.experienceYears} лет в профессии · {siteConfig.teachingYears} лет преподаю ·{" "}
                {siteConfig.studentsCount} учеников
              </p>
            </Reveal>
          </div>

          {/* Портрет — 7 колонок, асимметрия по разделу 6.3 */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal delay={0.08}>
              <div className="relative lg:max-w-[560px] lg:ml-auto">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-violet/30 via-lavender to-transparent blur-3xl"
                />
                <div className="relative w-full overflow-hidden rounded-card" style={{ paddingBottom: "125%" }}>
                  <Image
                    src="/images/elena-portrait.jpg"
                    alt={`Портрет ${siteConfig.expertName}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover"
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
