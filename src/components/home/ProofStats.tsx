import { siteConfig } from "@/content/site";

/** ТЗ v3.0: только подтверждённые факты — "4 инструкторских курса" пока не публикуется, см. FACTS.md. */
const stats = [
  { value: `${siteConfig.experienceYears}`, label: "лет в профессии" },
  { value: `${siteConfig.teachingYears}`, label: "лет преподаю" },
  { value: siteConfig.studentsCount, label: "учеников" },
];

export function ProofStats() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container max-w-container py-10">
        <div className="grid grid-cols-3 gap-8">
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
