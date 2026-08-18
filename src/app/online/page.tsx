import type { Metadata } from "next";
import { OnlinePageHero } from "@/components/online/OnlinePageHero";
import { OnlinePhilosophy } from "@/components/online/OnlinePhilosophy";
import { PainPoints } from "@/components/home/PainPoints";
import { WhatChanges } from "@/components/home/WhatChanges";
import { OnlineSalesBlock } from "@/components/home/OnlineSalesBlock";
import { CourseComparison } from "@/components/online/CourseComparison";
import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { StudentWork } from "@/components/home/StudentWork";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { TrustBlock } from "@/components/online/TrustBlock";
import { OnlineSupport } from "@/components/online/OnlineSupport";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Онлайн-курсы",
  description:
    "Онлайн-курсы по маникюру: логика материалов и логика форм в своём темпе, с разбором работ и открытыми ценами.",
};

export default function OnlinePage() {
  return (
    <>
      <OnlinePageHero />
      <OnlinePhilosophy />
      <PainPoints ctaHref="#courses" />
      <WhatChanges />
      <OnlineSalesBlock />
      <CourseComparison />
      <OnlineHowItWorks />
      <StudentWork />
      <ReviewsTeaser />
      <TrustBlock />
      <OnlineSupport />
      <FaqSection />
      <FinalCta />
    </>
  );
}
