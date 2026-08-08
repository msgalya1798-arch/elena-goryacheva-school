import { siteConfig } from "@/content/site";

const stats = [
  { value: `${siteConfig.experienceYears}`, label: "лет в профессии" },
  { value: `${siteConfig.teachingYears}`, label: "лет преподаёт" },
  { value: siteConfig.studentsCount, label: "учеников" },
  { value: `${siteConfig.instructorCourses}`, label: "инструкторских курса" },
];

export function ProofStats() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container max-w-container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-violet-deep">{stat.value}</p>
              <p className="text-sm text-graphite mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
