export const dynamic = "force-dynamic";

import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { Hero } from "@/components/home/Hero";
import { OnlineSalesBlock } from "@/components/home/OnlineSalesBlock";
import { StudentWork } from "@/components/home/StudentWork";
import { WhySystemWorks } from "@/components/home/WhySystemWorks";
import { CourseFinderSection } from "@/components/home/CourseFinderSection";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { OfflineRecap } from "@/components/home/OfflineRecap";
import { ExpertStrip } from "@/components/home/ExpertStrip";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OnlineSalesBlock />
      <CourseFinderSection />
      <WhySystemWorks />
      <StudentWork />
      <ReviewsTeaser />
      <OnlineHowItWorks />
      <ExpertStrip />
      <FaqSection audience="online" />
      <OfflineRecap />
      <FinalCta />
    </>
  );
}
