import { Hero } from "@/components/home/Hero";
import { ProofStats } from "@/components/home/ProofStats";
import { FormatChoice } from "@/components/home/FormatChoice";
import { AudienceAccordion } from "@/components/home/AudienceAccordion";
import { StudentWork } from "@/components/home/StudentWork";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CourseFinderSection } from "@/components/home/CourseFinderSection";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Graduates } from "@/components/home/Graduates";
import { DocumentTrust } from "@/components/home/DocumentTrust";
import { ReviewsTeaser } from "@/components/home/ReviewsTeaser";
import { ExpertStrip } from "@/components/home/ExpertStrip";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStats />
      <FormatChoice />
      <AudienceAccordion />
      <StudentWork />
      <HowItWorks />
      <CourseFinderSection />
      <FeaturedCourses />
      <Graduates />
      <DocumentTrust />
      <ReviewsTeaser />
      <ExpertStrip />
      <FaqSection />
      <FinalCta />
    </>
  );
}
