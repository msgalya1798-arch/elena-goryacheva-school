import Link from "next/link";
import { MaterialOffer } from "@/components/MaterialOffer";
import { Eyebrow } from "@/components/Eyebrow";
import { getCourseBySlug } from "@/content/courses";
import { onlineContent } from "@/content/online";
import { primaryContactHref } from "@/lib/contact";

export function OnlineSalesBlock() {
  const materials = getCourseBySlug("material-logic-online");
  const forms = getCourseBySlug("form-logic-online");
  const questions = materials?.onlineLanding?.salesQuestions;
  if (!materials || !forms || !questions?.[0] || !questions[1]) return null;
  return (
    <section id="courses" className="py-10 sm:py-section-sm lg:py-20 bg-white">
      <div className="container max-w-container">
        <Eyebrow className="mb-3">{onlineContent.featuredLabel}</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink">{materials.title}</h2>
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-16 mt-7 items-start">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-ink leading-snug">{questions[0].question}</h3>
            <p className="mt-4 text-graphite leading-relaxed">{questions[0].answer}</p>
            <div className="mt-6 border-l-2 border-violet pl-5">
              <p className="font-medium text-violet-deep">{onlineContent.approachLabel}</p>
              <p className="mt-2 text-graphite">{questions[1].answer}</p>
            </div>
            <p className="mt-6 text-ink">{onlineContent.formatSummary}</p>
            <Link href={"/online/" + materials.slug} className="inline-flex min-h-11 items-center gap-2 mt-4 text-violet underline underline-offset-4">Подробнее о курсе <span aria-hidden="true">→</span></Link>
          </div>
          <MaterialOffer />
        </div>
        <div className="mt-10 sm:mt-14 border-t border-border pt-7 grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-10">
          <div>
            <p className="text-xs uppercase tracking-wide text-graphite">{onlineContent.formsLabel}</p>
            <h3 className="font-display text-xl sm:text-2xl mt-2">{forms.title}</h3>
          </div>
          <div>
            <p className="text-graphite">{forms.audience}</p>
            <p className="mt-2 text-sm text-graphite">{onlineContent.formsStatus}</p>
            <div className="flex flex-wrap gap-x-6 mt-3">
              <Link href={"/online/" + forms.slug} className="inline-flex min-h-11 items-center text-violet underline underline-offset-4">Программа курса →</Link>
              {primaryContactHref() && <Link href={primaryContactHref()!} className="inline-flex min-h-11 items-center text-violet underline underline-offset-4">Узнать условия →</Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
