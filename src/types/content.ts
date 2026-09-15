// Единая модель данных. Компоненты не должны содержать текст курсов "зашитым" в JSX —
// весь контент идёт отсюда либо из src/content/*.ts.

export type CourseFormat = "offline" | "online";

export type CourseLevel = "с нуля" | "база+" | "опыт" | "любой уровень";

/**
 * Статус цены/даты. "confirmed" — можно публиковать как финальное значение.
 * "placeholder" — обязательно показывать пометку "уточняется" в UI, не выдавать за финал.
 */
export type PriceStatus = "confirmed" | "placeholder";

export interface PriceInfo {
  amount: number | null; // null, если сумма ещё не утверждена
  currency: "RUB";
  status: PriceStatus;
  note?: string;
}

export interface DateInfo {
  label: string;
  value: string | null;
  status: PriceStatus;
}

export interface Tariff {
  name: string;
  price: number;
  ctaLabel: string;
  description?: string;
}

/** Контент для полноценного продающего лендинга онлайн-курса. */
export interface OnlineLandingContent {
  heroResult: string;
  painPoints: string[];
  outcomes: string[];
  support: string[];
}

export interface Course {
  slug: string;
  format: CourseFormat;
  title: string;
  level: CourseLevel;
  audience: string;
  mainResult: string;
  durationLabel: string;
  price: PriceInfo;
  tariffs?: Tariff[];
  nextDate?: DateInfo;
  whatYouGet: string[];
  whoItsNotFor?: string;
  certificateNote: string; // подтверждённая информация о сертификате/документе для конкретного курса
  faq: { question: string; answer: string }[];
  onlineLanding?: OnlineLandingContent;
}

export interface Testimonial {
  id: string;
  name: string;
  courseSlug?: string;
  result: string;
  story: string; // короткий контекст только по фактам, которые следуют из самого отзыва
  label?: string; // нейтральный статус: «с нуля», «после других обучений», «ученица школы» и т. п.
  screenshot: string;
  hasVideo: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  problem: string;
  decisionExplanation: string;
  imagePlaceholder: string;
}

export interface ContactChannel {
  type: "phone" | "telegram" | "whatsapp" | "email";
  value: string | null;
  isPrimary: boolean;
}
