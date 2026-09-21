export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { OnlinePageHero } from "@/components/online/OnlinePageHero";
import { OnlineSalesBlock } from "@/components/home/OnlineSalesBlock";
import { CourseComparison } from "@/components/online/CourseComparison";
import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { StudentWork } from "@/components/home/StudentWork";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { TrustBlock } from "@/components/online/TrustBlock";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Онлайн-курсы",
  description:
    "Онлайн-курсы по маникюру: сравните задачи, программы и условия «Логики материалов» и «Логики форм». Запись через Telegram.",
};

export default function OnlinePage() {
  return (
    <>
      <OnlinePageHero />
      <OnlineSalesBlock />
      <CourseComparison />
      <OnlineHowItWorks />
      <StudentWork schoolContext />
      <ReviewsTeaser />
      <TrustBlock />
      <FaqSection audience="online" />
      <FinalCta />
    </>
  );
}
