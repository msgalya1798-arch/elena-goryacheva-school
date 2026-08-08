import { CourseFinder } from "@/components/home/CourseFinder";

export function CourseFinderSection() {
  return (
    <section className="py-section-sm lg:py-section-lg bg-lavender">
      <div className="container max-w-container">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl text-ink">Не знаете, с чего начать?</h2>
            <p className="text-graphite mt-4">
              Три коротких вопроса — сразу увидите рекомендацию с объяснением, без
              обязательного оставления контакта.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <CourseFinder />
          </div>
        </div>
      </div>
    </section>
  );
}
