import type { ContactChannel } from "@/types/content";

/**
 * Раздел 18 ТЗ: часть значений ещё не утверждена. Помечено status: "placeholder"
 * прямо в комментариях — при интеграции формы/шапки эти поля показывать
 * с явной пометкой "уточняется", не выдавать за финальные.
 */

export const siteConfig = {
  // Рабочий логотип до утверждения названия бренда (раздел 1, "Меняем в версии 2.0")
  logoText: "Елена Горячева",
  logoSubtext: "школа маникюра",
  expertName: "Елена Горячева",
  city: "Каменск-Шахтинский",
  experienceYears: 16,
  teachingYears: 6,
  studentsCount: "300+",
  instructorCourses: 4,
  address: {
    // Раздел 18: показывать точный адрес публично ИЛИ отправлять после записи — решение не принято.
    status: "placeholder" as const,
    value: null as string | null,
    fallbackLabel: "Адрес высылаем после записи",
  },
};

export const contactChannels: ContactChannel[] = [
  { type: "telegram", value: null, isPrimary: true }, // placeholder — раздел 18
  { type: "whatsapp", value: null, isPrimary: false },
  { type: "phone", value: null, isPrimary: false },
];

export interface NavLink {
  href: string;
  label: string;
}

export const primaryNav: NavLink[] = [
  { href: "/offline", label: "Офлайн-обучение" },
  { href: "/online", label: "Онлайн-курсы" },
  { href: "/results", label: "Результаты" },
  { href: "/about", label: "Об эксперте" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/faq", label: "Вопросы" },
];

export const footerLegalLinks: NavLink[] = [
  { href: "/legal/privacy", label: "Политика конфиденциальности" },
  { href: "/legal/terms", label: "Оферта" },
  { href: "/legal/refund", label: "Условия возврата" },
];
