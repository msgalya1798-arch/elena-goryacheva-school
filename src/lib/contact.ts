import { contactChannels } from "@/content/site";

/** Собирает рабочую ссылку записи из первого доступного канала связи. Возвращает null, если ни один не заполнен. */
export function primaryContactHref(): string | null {
  const primary = contactChannels.find((c) => c.isPrimary && c.value) ?? contactChannels.find((c) => c.value);
  if (!primary?.value) return null;

  switch (primary.type) {
    case "telegram":
      return `https://t.me/${primary.value.replace(/^@/, "")}`;
    case "whatsapp":
      return `https://wa.me/${primary.value.replace(/\D/g, "")}`;
    case "phone":
      return `tel:${primary.value}`;
    case "email":
      return `mailto:${primary.value}`;
  }
}
