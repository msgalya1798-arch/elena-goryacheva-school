import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function TrustBlock() {
  return (
    <section className="py-10 sm:py-section-sm lg:py-section-lg bg-white">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="relative w-full max-w-[280px] mx-auto lg:max-w-none overflow-hidden rounded-card aspect-[4/5]">
              <Image
                src="/images/elena-portrait.jpg"
                alt={`Портрет ${siteConfig.expertName}`}
                fill
                sizes="(min-width: 1024px) 33vw, 280px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-sm text-graphite uppercase tracking-wide mb-3">Почему можно доверять</p>
            <p className="font-display text-xl sm:text-2xl text-ink max-w-xl">
              Я сама работаю мастером {siteConfig.experienceYears} лет и веду каждую программу лично —
              от постановки задачи до разбора ваших работ.
            </p>
            <div className="flex gap-8 mt-6">
              <div>
                <p className="font-display text-3xl text-violet-deep">{siteConfig.experienceYears}</p>
                <p className="text-sm text-graphite">лет в профессии</p>
              </div>
              <div>
                <p className="font-display text-3xl text-violet-deep">{siteConfig.teachingYears}</p>
                <p className="text-sm text-graphite">лет преподаю</p>
              </div>
              <div>
                <p className="font-display text-3xl text-violet-deep">{siteConfig.studentsCount}</p>
                <p className="text-sm text-graphite">учеников</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-violet mt-6 hover:gap-3 transition-all duration-reveal"
            >
              Узнать больше об Елене →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
