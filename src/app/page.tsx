import { Hero } from "@/components/home/Hero";
import { ProofStats } from "@/components/home/ProofStats";
import { OnlineSalesBlock } from "@/components/home/OnlineSalesBlock";
import { PainPoints } from "@/components/home/PainPoints";
import { FormatChoice } from "@/components/home/FormatChoice";
import { AudienceAccordion } from "@/components/home/AudienceAccordion";
import { StudentWork } from "@/components/home/StudentWork";
import { WhySystemWorks } from "@/components/home/WhySystemWorks";
import { CourseFinderSection } from "@/components/home/CourseFinderSection";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OfflineRecap } from "@/components/home/OfflineRecap";
import { Graduates } from "@/components/home/Graduates";
import { ExpertStrip } from "@/components/home/ExpertStrip";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStats />
      <OnlineSalesBlock />
      <PainPoints />
      <FormatChoice />
      <AudienceAccordion />
      <StudentWork />
      <WhySystemWorks />
      <CourseFinderSection />
      <ReviewsTeaser />
      <HowItWorks />
      <OfflineRecap />
      <Graduates />
      <ExpertStrip />
      <FaqSection />
      <FinalCta />
    </>
  );
}
