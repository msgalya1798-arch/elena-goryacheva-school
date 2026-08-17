import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="pt-5 sm:pt-10 md:pt-16 pb-6 sm:pb-section-sm">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Портрет — компактный на мобильном (ТЗ: не должен занимать весь первый экран) */}
          <div className="lg:col-span-5 order-1">
            <Reveal>
              <div className="relative lg:max-w-[420px] lg:ml-auto">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-violet/30 via-lavender to-transparent blur-3xl"
                />
                <div className="relative w-full overflow-hidden rounded-card aspect-[4/3] lg:aspect-[4/5]">
                  <Image
                    src="/images/elena-portrait.jpg"
                    alt={`Портрет ${siteConfig.expertName}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Текст и действия */}
          <div className="lg:col-span-7 order-2">
            <Reveal delay={0.05}>
              <Eyebrow className="mb-2.5">
                Авторская школа маникюра · {siteConfig.city} / онлайн
              </Eyebrow>
              <h1 className="font-display text-[26px] sm:text-[34px] lg:text-[52px] xl:text-[60px] leading-[1.15] text-ink">
                Маникюр как система, а не набор движений.
              </h1>
              <p className="mt-3 text-base sm:text-lg text-graphite max-w-lg">
                Я, {siteConfig.expertName}. Учу видеть исходник, выбирать материал по задаче и
                осознанно работать с архитектурой. Очно в {siteConfig.cityPrepositional} и онлайн по
                России.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href="/online"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Онлайн-курсы
                </Link>
                <Link
                  href="/offline"
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Офлайн-обучение
                </Link>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-violet mt-3 hover:gap-3 transition-all duration-reveal"
              >
                О преподавателе →
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
