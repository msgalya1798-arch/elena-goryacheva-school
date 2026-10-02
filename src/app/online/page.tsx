import { EditorialPage } from "@/components/editorial/EditorialPage";
export const dynamic = "force-dynamic";

import { buildPageMetadata } from "@/lib/metadata";
import { OnlinePageHero } from "@/components/online/OnlinePageHero";
import { EditorialCourses } from "@/components/editorial/EditorialCourses";
import { CourseComparison } from "@/components/online/CourseComparison";
import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { StudentWork } from "@/components/home/StudentWork";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { TrustBlock } from "@/components/online/TrustBlock";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata = buildPageMetadata({
  title: "Онлайн-курсы",
  description: "Онлайн-курсы по маникюру: сравните задачи, программы и условия «Логики материалов» и «Логики форм». Запись через Telegram.",
  path: "/online",
});

export default function OnlinePage() {
  return (
    <EditorialPage>
      <OnlinePageHero />
      <EditorialCourses />
      <CourseComparison />
      <OnlineHowItWorks accordion />
      <StudentWork title="Работы моих учениц" hideDescription />
      <ReviewsTeaser />
      <TrustBlock />
      <FinalCta />
      <FaqSection audience="online" />
    </EditorialPage>
  );
}
