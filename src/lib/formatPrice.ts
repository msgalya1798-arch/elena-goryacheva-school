import type { PriceInfo } from "@/types/content";

/**
 * Раздел 11 ТЗ: "значения со статусом «предварительно» не публиковать как финальные
 * без подтверждения". Функция всегда явно показывает пометку, если статус не confirmed.
 */
export function formatPrice(price: PriceInfo): string {
  if (price.amount === null) {
    return "Цена уточняется";
  }

  const formatted = `${price.amount.toLocaleString("ru-RU")} ₽`;

  return price.status === "confirmed" ? formatted : `${formatted} · предварительно`;
}
