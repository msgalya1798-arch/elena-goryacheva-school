// Единая модель данных. Компоненты не должны содержать текст курсов "зашитым" в JSX —
// весь контент идёт отсюда либо из src/content/*.ts (ТЗ, раздел 16.3).

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
  note?: string; // например, "тариф 1 / тариф 2"
}

export interface DateInfo {
  label: string; // например, "ближайшая группа"
  value: string | null;
  status: PriceStatus;
}

export interface Course {
  slug: string;
  format: CourseFormat;
  title: string;
  level: CourseLevel;
  audience: string; // "Для кого"
  mainResult: string; // "Главный результат" — без гарантии дохода
  durationLabel: string;
  price: PriceInfo;
  nextDate?: DateInfo;
  whatYouGet: string[]; // программа/что входит
  whoItsNotFor?: string;
  certificateNote: string; // ВСЕГДА placeholder-текст до юридического подтверждения
  faq: { question: string; answer: string }[];
}

export interface Testimonial {
  id: string;
  name: string; // реальное имя, если известно, иначе честный анонимный формат ("Ученица школы")
  courseSlug?: string; // указывать только когда из отзыва явно понятно, какой курс
  result: string; // конкретный наблюдаемый результат, не гарантия
  quote: string;
  photoPlaceholder: string; // описание для alt/заглушки
  hasVideo: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  problem: string;
  decisionExplanation: string; // почему выбрано именно это решение
  imagePlaceholder: string;
}

export interface ContactChannel {
  type: "phone" | "telegram" | "whatsapp" | "email";
  value: string | null; // null = ещё не утверждено
  isPrimary: boolean;
}
