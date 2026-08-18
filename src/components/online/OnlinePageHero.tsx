import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";

export function OnlinePageHero() {
  return (
    <section className="pt-8 sm:pt-14 md:pt-16 pb-8 sm:pb-section-sm">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow className="mb-3">Онлайн-курсы · доступ из любого города</Eyebrow>
              <h1 className="font-display text-[30px] sm:text-4xl lg:text-5xl leading-[1.15] text-ink">
                Та же логика, что и на очных курсах — без очной части
              </h1>
              <p className="mt-4 text-lg text-graphite max-w-xl">
                Понимать материалы, читать исходник и принимать решения осознанно можно и дистанционно —
                в своём темпе, с разбором ваших работ.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#courses"
                  className="inline-flex justify-center items-center rounded-full bg-violet px-7 py-3.5 text-white shadow-lg shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/35"
                >
                  Смотреть курсы →
                </Link>
                <Link
                  href="/offline"
                  className="inline-flex justify-center items-center rounded-full border border-border px-7 py-3.5 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet hover:text-violet"
                >
                  Офлайн-обучение
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <ImagePlaceholder ratio="4:5" label="Онлайн-урок за компьютером" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
