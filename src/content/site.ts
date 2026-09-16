import type { ContactChannel } from "@/types/content";

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
    // Это адрес учебного пространства, а не адрес регистрации ИП. Пока не подтверждён.
    status: "placeholder" as const,
    value: null as string | null,
    fallbackLabel: "Адрес высылаем после записи",
  },
};

/** Реквизиты продавца/исполнителя, подтверждённые Еленой. */
export const sellerDetails = {
  fullName: "ИП Горячева Елена Сергеевна",
  personName: "Горячева Елена Сергеевна",
  entrepreneurType: "Индивидуальный предприниматель",
  inn: "614705037962",
  ogrnip: "324619600123122",
  registrationDate: "3 июня 2024 г.",
  registrationAddress: "Ростовская область, Каменский район, хутор Масаловка",
  registrar: "Межрайонная инспекция Федеральной налоговой службы № 26 по Ростовской области",
  taxAuthority: "Межрайонная инспекция ФНС России № 21 по Ростовской области",
  taxRegistrationDate: "3 июня 2024 г.",
  taxRegime: "НПД",
  okpo: "2032923963",
  okato: "60223805004",
  oktmo: "60623405111",
  pfrRegistrationNumber: "1222898221",
  pfrRegistrationDate: "3 июня 2024 г.",
  pfrAuthority:
    "Отделение Фонда пенсионного и социального страхования Российской Федерации по Ростовской области",
  smeIncludedDate: "10 июля 2024 г.",
  smeCategory: "Микропредприятие",
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
 * Онлайн первым — приоритет продаж №1.
 * «Результаты» (кейсы до/после) пока скрыты — реальных кейсов ещё нет, см. FACTS.md.
 */
export const primaryNav: NavLink[] = [
  { href: "/online", label: "Онлайн" },
  { href: "/offline", label: "Офлайн" },
  { href: "/about", label: "Об Елене" },
  { href: "/reviews", label: "Отзывы" },
  { href: "/faq", label: "Вопросы" },
];

// TODO: Add privacy, terms and refund links only after approved documents have working routes.
export const footerLegalLinks: NavLink[] = [
  { href: "/legal/details", label: "Реквизиты ИП" },
];
