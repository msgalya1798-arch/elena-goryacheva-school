import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseDetailView } from "@/components/course/CourseDetailView";
import { OnlineCourseLanding } from "@/components/online/OnlineCourseLanding";
import { getCourseBySlug, getCoursesByFormat } from "@/content/courses";

type Params = { slug: string };

export function generateStaticParams() {
  return getCoursesByFormat("online").map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course || course.format !== "online") return {};

  return { title: course.title, description: course.mainResult };
}

export default async function OnlineCoursePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course || course.format !== "online") notFound();

  // ТЗ "online sales v2": курсы с готовым онлайн-лендинг-контентом получают полноценный
  // продающий шаблон; остальные — пока общий шаблон, до наполнения контента (раздел 25).
  return course.onlineLanding ? <OnlineCourseLanding course={course} /> : <CourseDetailView course={course} />;
}
