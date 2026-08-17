import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";

export function ExpertStrip() {
  return (
    <section className="py-8 sm:py-10">
      <div className="container max-w-container">
        <div className="flex items-center gap-4 rounded-card border border-border bg-white p-4 sm:p-5">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full overflow-hidden">
            <Image
              src="/images/elena-portrait.jpg"
              alt={`Портрет ${siteConfig.expertName}`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <p className="text-sm sm:text-base text-graphite flex-1">
            Программы веду сама — {siteConfig.experienceYears} лет в профессии,{" "}
            {siteConfig.teachingYears} лет преподаю.
          </p>
          <Link
            href="/about"
            className="hidden sm:inline-flex items-center gap-2 text-violet text-sm shrink-0 hover:gap-3 transition-all duration-reveal"
          >
            Об Елене →
          </Link>
        </div>
      </div>
    </section>
  );
}
