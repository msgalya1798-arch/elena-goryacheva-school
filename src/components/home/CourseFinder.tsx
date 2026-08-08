"use client";

import { useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { getCourseBySlug } from "@/content/courses";
import { formatPrice } from "@/lib/formatPrice";
import {
  recommendCourseSlug,
  type FinderExperience,
  type FinderFormat,
  type FinderProblem,
} from "@/lib/courseFinder";

type Step = 0 | 1 | 2 | "result";

const experienceOptions: { value: FinderExperience; label: string }[] = [
  { value: "none", label: "Опыта нет" },
  { value: "gaps", label: "Есть опыт, но остались пробелы" },
  { value: "confident", label: "Работаю уверенно, хочу расти дальше" },
];

const problemOptions: { value: FinderProblem; label: string }[] = [
  { value: "dont-know-start", label: "Не знаю, с чего начать" },
  { value: "unstable-results", label: "Отслойки, сколы, нестабильный результат" },
  { value: "complex-architecture", label: "Нужна работа со сложными формами и архитектурой" },
];

const formatOptions: { value: FinderFormat; label: string }[] = [
  { value: "offline", label: "Офлайн в Каменске-Шахтинском" },
  { value: "online", label: "Онлайн" },
];

export function CourseFinder() {
  const [step, setStep] = useState<Step>(0);
  const [experience, setExperience] = useState<FinderExperience | null>(null);
  const [problem, setProblem] = useState<FinderProblem | null>(null);
  const [format, setFormat] = useState<FinderFormat | null>(null);

  const restart = () => {
    setStep(0);
    setExperience(null);
    setProblem(null);
    setFormat(null);
  };

  if (step === "result" && experience && problem && format) {
    const { slug, reason } = recommendCourseSlug({ experience, problem, format });
    const course = getCourseBySlug(slug);

    return (
      <div className="rounded-card border border-violet bg-white p-8 shadow-lg shadow-violet/10">
        <Eyebrow>Рекомендация</Eyebrow>
        {course ? (
          <>
            <h3 className="font-display text-2xl text-ink mt-2">{course.title}</h3>
            <p className="text-graphite mt-2">{reason}</p>
            <div className="flex items-center gap-4 mt-4 text-sm text-graphite">
              <span>{course.durationLabel}</span>
              <span className="text-ink font-medium">{formatPrice(course.price)}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href={`/${course.format}/${course.slug}`}
                className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep"
              >
                Смотреть программу курса
              </Link>
              <button
                onClick={restart}
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet"
              >
                Пройти ещё раз
              </button>
            </div>
          </>
        ) : (
          <p className="text-graphite mt-2">Не получилось подобрать курс — напишите нам напрямую.</p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-card border border-border bg-white p-8 shadow-sm">
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i <= (typeof step === "number" ? step : 2) ? "bg-violet" : "bg-border"
            }`}
          />
        ))}
      </div>

      {step === 0 && (
        <FinderStep
          question="Какой у вас опыт?"
          options={experienceOptions}
          onSelect={(value) => {
            setExperience(value);
            setStep(1);
          }}
        />
      )}

      {step === 1 && (
        <FinderStep
          question="Что беспокоит больше всего?"
          options={problemOptions}
          onSelect={(value) => {
            setProblem(value);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <FinderStep
          question="Какой формат удобнее?"
          options={formatOptions}
          onSelect={(value) => {
            setFormat(value);
            setStep("result");
          }}
        />
      )}
    </div>
  );
}

function FinderStep<T extends string>({
  question,
  options,
  onSelect,
}: {
  question: string;
  options: { value: T; label: string }[];
  onSelect: (value: T) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-ink mb-5">{question}</h3>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="text-left rounded-card border border-border px-5 py-3.5 transition-all duration-reveal hover:border-violet hover:bg-lavender hover:shadow-md"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
