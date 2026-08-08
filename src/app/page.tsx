import { Hero } from "@/components/home/Hero";
import { ProofStats } from "@/components/home/ProofStats";
import { Manifesto } from "@/components/home/Manifesto";
import { FormatChoice } from "@/components/home/FormatChoice";
import { AudienceScenarios } from "@/components/home/AudienceScenarios";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { ComplexCases } from "@/components/home/ComplexCases";
import { AboutExpert } from "@/components/home/AboutExpert";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StudentResults } from "@/components/home/StudentResults";
import { CourseFinderSection } from "@/components/home/CourseFinderSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStats />
      <Manifesto />
      <FormatChoice />
      <AudienceScenarios />
      <FeaturedCourses />
      <ComplexCases />
      <AboutExpert />
      <HowItWorks />
      <StudentResults />
      <CourseFinderSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
