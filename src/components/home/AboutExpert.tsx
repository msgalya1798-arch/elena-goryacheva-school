import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { siteConfig } from "@/content/site";

export function AboutExpert() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-lavender">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <ImagePlaceholder ratio="3:4" label="Елена в работе с учеником" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow className="mb-3">Об эксперте</Eyebrow>
            <h2 className="font-display text-3xl lg:text-4xl text-ink">
              {siteConfig.expertName}
            </h2>
            <p className="text-graphite mt-4 max-w-lg">
              {siteConfig.experienceYears} лет в профессии, {siteConfig.teachingYears} лет
              преподавания, {siteConfig.studentsCount} учеников и{" "}
              {siteConfig.instructorCourses} инструкторских курса. Строю свои программы на логике
              материалов и архитектуры ногтя, а не на копировании готовых движений.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-violet mt-6 hover:gap-3 transition-all duration-reveal"
            >
              Читать историю и методику →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
