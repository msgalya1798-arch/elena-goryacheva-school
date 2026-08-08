import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { ProofStats } from "@/components/home/ProofStats";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Об эксперте",
  description: `Я, ${siteConfig.expertName}, — мастер и преподаватель маникюра в ${siteConfig.city}. ${siteConfig.experienceYears} лет в профессии, ${siteConfig.teachingYears} лет преподавания.`,
};

/**
 * Формулировки опираются на уже согласованный контент (Manifesto, программы курсов
 * в src/content/courses.ts), а не на новые факты — раздел 17 ТЗ запрещает публиковать
 * непроверенные утверждения.
 */
const principles = [
  {
    title: "Видеть исходник",
    description:
      "Разбираю сложные исходники — обкусанные, трапециевидные, винтовые ногти — по логике, а не через заучивание отдельных случаев.",
  },
  {
    title: "Понимать материалы",
    description:
      "Объясняю, почему появляются отслойки и сколы, как ведут себя базы, гели и комбинированные системы — учу осознанному выбору вместо взгляда наугад.",
  },
  {
    title: "Работать с архитектурой",
    description: "Учу работать с формой, балансом и минимальным опилом — принципами, которые работают на любом исходнике.",
  },
  {
    title: "Объяснять решение",
    description:
      "Объясняю каждое решение в работе — почему именно так, а не иначе — а не оставляю додумывать самому.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-12 md:pt-16 pb-section-sm">
        <div className="container max-w-container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <ImagePlaceholder ratio="3:4" label={`Портрет ${siteConfig.expertName}`} />
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={0.08}>
                <Eyebrow className="mb-4">Об эксперте</Eyebrow>
                <h1 className="font-display text-4xl lg:text-5xl text-ink">{siteConfig.expertName}</h1>
                <p className="mt-5 text-lg text-graphite max-w-lg">
                  Я мастер и преподаватель маникюра в {siteConfig.city}. Строю свои программы на
                  логике материалов и архитектуры ногтя — а не на копировании готовых движений.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ProofStats />

      <section className="py-section-sm lg:py-section-lg bg-white">
        <div className="container max-w-container">
          <h2 className="font-display text-3xl lg:text-4xl text-ink mb-10">Методика</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle) => (
              <div key={principle.title} className="border-t-2 border-violet pt-5">
                <h3 className="font-display text-xl text-ink">{principle.title}</h3>
                <p className="text-graphite mt-3">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-sm lg:py-section-lg">
        <div className="container max-w-container">
          <div className="grid lg:grid-cols-12 gap-8">
            <p className="lg:col-span-3 text-sm text-graphite uppercase tracking-wide">История</p>
            <p className="lg:col-span-9 text-graphite max-w-2xl">
              Свою историю — путь от мастера до преподавателя с {siteConfig.teachingYears}-летним
              опытом — опубликую отдельным текстом после согласования (раздел 18 ТЗ). Пока делюсь
              только подтверждёнными фактами: {siteConfig.experienceYears} лет в профессии,{" "}
              {siteConfig.studentsCount} учеников и {siteConfig.instructorCourses} инструкторских
              курса.
            </p>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
