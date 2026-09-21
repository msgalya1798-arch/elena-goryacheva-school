import Link from "next/link";
import { getCourseBySlug } from "@/content/courses";
import { onlineContent } from "@/content/online";
import { formatPrice } from "@/lib/formatPrice";
import { primaryContactHref } from "@/lib/contact";

export function MaterialOffer() {
  const course = getCourseBySlug("material-logic-online");
  const href = primaryContactHref();
  const introductory = course?.price.amount === 1900;
  if (!course) return null;
  return (
    <div className="material-offer rounded-card p-5 sm:p-7 text-white">
      {introductory && (
        <p className="inline-flex rounded-full border border-[#bda3dc] px-3 py-1 text-xs leading-relaxed text-white">
          До <time dateTime="2026-10-31" className="ml-1">31 октября</time><span className="ml-1">включительно</span>
        </p>
      )}
      <p className="mt-3 text-lg leading-relaxed">{onlineContent.offerTitle}</p>
      <p className="mt-3 font-display text-4xl sm:text-5xl leading-tight whitespace-nowrap">{formatPrice(course.price)}</p>
      {introductory && <p className="mt-2 text-sm text-[#eee5f8]">С 1 ноября — <span className="font-semibold text-white whitespace-nowrap">3 900 ₽</span></p>}
      {href && <Link href={href} className="cta-primary mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-center text-violet-deep hover:bg-lavender">
        Записаться в Telegram <span aria-hidden="true" className="cta-arrow">→</span>
      </Link>}
      <p className="mt-4 border-t border-[#9778b8] pt-4 text-sm text-[#eee5f8]">{onlineContent.renewal}</p>
    </div>
  );
}
