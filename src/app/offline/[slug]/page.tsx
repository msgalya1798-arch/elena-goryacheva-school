import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailView } from "@/components/course/CourseDetailView";
import { getCourseBySlug, getCoursesByFormat } from "@/content/courses";

type Params = { slug: string };

export function generateStaticParams() {
  return getCoursesByFormat("offline").map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course || course.format !== "offline") return {};

  return { title: course.title, description: course.mainResult };
}

export default async function OfflineCoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course || course.format !== "offline") notFound();

  return <CourseDetailView course={course} />;
}
