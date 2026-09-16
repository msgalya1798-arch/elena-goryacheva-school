"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { getCourseBySlug } from "@/content/courses";
import { primaryContactHref } from "@/lib/contact";
import { formatPrice } from "@/lib/formatPrice";
import {
  recommendCourse,
  type FinderExperience,
  type FinderFormat,
  type FinderGoal,
} from "@/lib/courseFinder";

type Step = 0 | 1 | 2 | "result";

const experienceOptions: { value: FinderExperience; label: string }[] = [
  { value: "none", label: "Начинаю с нуля" },
  { value: "self-taught", label: "Училась самостоятельно / онлайн" },
  { value: "has-gaps", label: "Проходила базовое обучение, но остались пробелы" },
  { value: "practicing", label: "Работаю мастером с клиентами" },
];

const goalOptions: { value: FinderGoal; label: string }[] = [
  { value: "start-career", label: "Получить профессию и начать работать" },
  { value: "materials-lifting", label: "Разобраться в материалах и причинах отслоек" },
  { value: "complex-nails", label: "Научиться работать со сложными ногтями" },
  { value: "architecture-forms", label: "Освоить архитектуру, моделирование и верхние формы" },
  { value: "speed-quality", label: "Ускорить работу и сделать результат визуально дороже" },
  { value: "systemize-gaps", label: "Закрыть сразу несколько пробелов и систематизировать знания" },
];

const formatOptions: { value: FinderFormat; label: string }[] = [
  { value: "online", label: "Онлайн" },
  { value: "offline", label: "Очно в Каменске-Шахтинском" },
  { value: "either", label: "Готова рассмотреть оба варианта" },
];

export function CourseFinder() {
  const [step, setStep] = useState<Step>(0);
  const [experience, setExperience] = useState<FinderExperience | null>(null);
  const [goal, setGoal] = useState<FinderGoal | null>(null);
  const [format, setFormat] = useState<FinderFormat | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) panelRef.current?.focus({ preventScroll: true });
    didMount.current = true;
  }, [step]);
  const contactHref = primaryContactHref();

  const restart = () => {
    setStep(0);
    setExperience(null);
    setGoal(null);
    setFormat(null);
  };

  if (step === "result" && experience && goal && format) {
    const { slug, reason, alsoSlug } = recommendCourse({ experience, goal, format });
    const course = slug ? getCourseBySlug(slug) : undefined;
    const alsoCourse = alsoSlug ? getCourseBySlug(alsoSlug) : undefined;

    return (
      <div ref={panelRef} tabIndex={-1} aria-label="Результат подбора" className="rounded-card border border-violet bg-white p-6 sm:p-8 shadow-lg shadow-violet/10">
        <Eyebrow>Ваш следующий шаг</Eyebrow>
        {course ? (
          <>
            <h3 className="font-display text-2xl text-ink mt-2">{course.title}</h3>
            <p className="text-graphite mt-2">{reason}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-graphite">
              <span>{course.durationLabel}</span>
              <span className="text-ink font-medium">{formatPrice(course.price)}</span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link
                href={`/${course.format}/${course.slug}`}
                className="inline-flex items-center rounded-full bg-violet px-6 py-3 text-white shadow-md shadow-violet/25 transition-all duration-reveal hover:-translate-y-0.5 hover:bg-violet-deep"
              >
                Посмотреть программу →
              </Link>
              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center rounded-full border border-border px-6 py-3 text-ink transition-all duration-reveal hover:-translate-y-0.5 hover:border-violet"
              >
                Пройти ещё раз
              </button>
            </div>
            {alsoCourse && (
              <p className="text-sm text-graphite mt-5">
                Также может подойти:{" "}
                <Link href={`/${alsoCourse.format}/${alsoCourse.slug}`} className="text-violet hover:underline">
                  {alsoCourse.title}
                  {alsoCourse.title === course.title
                    ? alsoCourse.format === "online"
                      ? " (онлайн)"
                      : " (офлайн)"
                    : ""}{" "}
                  →
                </Link>
              </p>
            )}
          </>
        ) : (
          <>
            <h3 className="font-display text-2xl text-ink mt-2">Сначала обсудим вашу задачу</h3>
            <p className="text-graphite mt-3">{reason}</p>
            {contactHref && (
              <Link href={contactHref} className="inline-flex rounded-full bg-violet px-6 py-3 text-white mt-6">
                Обсудить в Telegram →
              </Link>
            )}
            <button type="button" onClick={restart} className="block mt-4 text-violet underline py-3">
              Пройти ещё раз
            </button>
          </>
        )}
        <button type="button" onClick={() => setStep(2)} className="text-violet underline mt-4 py-3">
          Изменить ответы
        </button>
      </div>
    );
  }

  const stepNumber = typeof step === "number" ? step : 2;

  return (
    <div ref={panelRef} tabIndex={-1} aria-label={`Подбор курса, вопрос ${stepNumber + 1} из 3`} className="rounded-card border border-border bg-white p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-graphite">Вопрос {stepNumber + 1} из 3</span>
        {stepNumber > 0 && (
          <button type="button" className="text-violet underline px-3 py-2" onClick={() => setStep(stepNumber === 2 ? 1 : 0)}>
            Назад
          </button>
        )}
      </div>
      <div className="flex gap-2 mb-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${i <= stepNumber ? "bg-violet" : "bg-border"}`}
          />
        ))}
      </div>

      {step === 0 && (
        <FinderStep
          question="Какой у вас сейчас опыт?"
          options={experienceOptions}
          selected={experience}
          onSelect={(value) => {
            setExperience(value);
            setStep(1);
          }}
        />
      )}

      {step === 1 && (
        <FinderStep
          question="Что сейчас хочется изменить?"
          options={goalOptions}
          selected={goal}
          onSelect={(value) => {
            setGoal(value);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <FinderStep
          question="Как вам удобнее учиться?"
          options={formatOptions}
          selected={format}
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
  selected,
  onSelect,
}: {
  question: string;
  options: { value: T; label: string }[];
  selected: T | null;
  onSelect: (value: T) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-lg sm:text-xl text-ink mb-5">{question}</h3>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={selected === option.value}
            onClick={() => onSelect(option.value)}
            className={`text-left rounded-card border px-5 py-3.5 transition-all duration-reveal hover:border-violet hover:bg-lavender hover:shadow-md ${selected === option.value ? "border-violet bg-lavender" : "border-border"}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
