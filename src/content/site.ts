import type { ContactChannel } from "@/types/content";

/**
 * ТЗ v3.0: часть значений ещё не утверждена — см. FACTS.md. Такие поля не показываются
 * публично (адрес, "4 инструкторских курса") до подтверждения.
 */

export const siteConfig = {
  // Рабочий логотип до утверждения названия бренда
  logoText: "Елена Горячева",
  logoSubtext: "школа маникюра",
  expertName: "Елена Горячева",
  city: "Каменск-Шахтинский",
  cityPrepositional: "Каменске-Шахтинском",
  experienceYears: 16,
  teachingYears: 6,
  studentsCount: "300+",
  // Не подтверждено: 4 пройденных курса или 4 авторских программы? Не публиковать, пока Елена не уточнит — см. FACTS.md.
  instructorCourses: 4,
  address: {
    // Показывать точный адрес публично ИЛИ отправлять после записи — решение не принято, см. FACTS.md.
    status: "placeholder" as const,
    value: null as string | null,
    fallbackLabel: "Адрес высылаем после записи",
  },
};

export const contactChannels: ContactChannel[] = [
  { type: "telegram", value: "@Elena_multinail", isPrimary: true },
  { type: "phone", value: "+7 909 432 1206", isPrimary: false },
];

export interface NavLink {
  href: string;
  label: string;
}

/**
 * Сокращённое меню до появления полного контента результатов/отзывов (ТЗ v3.0, раздел 3).
 * Онлайн первым — приоритет продаж №1 (ТЗ «главная страница v1», раздел 1).
 */
export const primaryNav: NavLink[] = [
  { href: "/online", label: "Онлайн" },
  { href: "/offline", label: "Офлайн" },
  { href: "/about", label: "Об Елене" },
  { href: "/faq", label: "Вопросы" },
];

export const footerLegalLinks: NavLink[] = [
  { href: "/legal/privacy", label: "Политика конфиденциальности" },
  { href: "/legal/terms", label: "Оферта" },
  { href: "/legal/refund", label: "Условия возврата" },
];
