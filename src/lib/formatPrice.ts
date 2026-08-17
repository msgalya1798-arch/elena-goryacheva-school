import type { PriceInfo } from "@/types/content";

/**
 * ТЗ v3.0, раздел 7: неподтверждённую цену не показывать вообще (ни числом, ни с пометкой
 * "предварительно") — вместо неё явный призыв узнать условия у Елены.
 */
export function formatPrice(price: PriceInfo): string {
  if (price.status !== "confirmed" || price.amount === null) {
    return "Узнать условия";
  }

  return `${price.amount.toLocaleString("ru-RU")} ₽`;
}
