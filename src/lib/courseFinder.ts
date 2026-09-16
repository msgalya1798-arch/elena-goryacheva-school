export type FinderExperience = "none" | "self-taught" | "has-gaps" | "practicing";

export type FinderGoal =
  | "start-career"
  | "materials-lifting"
  | "complex-nails"
  | "architecture-forms"
  | "speed-quality"
  | "systemize-gaps";

export type FinderFormat = "online" | "offline" | "either";

export interface FinderAnswers {
  experience: FinderExperience;
  goal: FinderGoal;
  format: FinderFormat;
}

export interface FinderResult {
  slug: string | null;
  reason: string;
  alsoSlug?: string;
}

/** No automatic advanced recommendation without a suitable starting level.
 * A missing match is an honest consultation route, not a substitute format.
 */
export function recommendCourse({ experience, goal, format }: FinderAnswers): FinderResult {
  const canAttend = format !== "online";
  const hasFoundation = experience === "has-gaps" || experience === "practicing";

  if (experience === "none" || goal === "start-career") {
    if (!canAttend) return {
      slug: null,
      reason: "В каталоге нет отдельной онлайн-программы полного старта в профессии с нуля. Тематические курсы не заменяют базовое обучение. Обсудите с Еленой, с чего начать в вашем случае.",
    };
    return {
      slug: "nail-master-start",
      reason: "Для старта с нуля подойдёт очная база без наращивания в Каменске-Шахтинском. Если хотите включить наращивание, рассмотрите вторую программу ниже.",
      alsoSlug: "top-master-universal-2",
    };
  }

  if (goal === "speed-quality") {
    if (!canAttend) return {
      slug: null,
      reason: "Отдельный курс по скорости и портфолио в каталоге проводится очно. Вы выбрали онлайн — обсудите с Еленой свою задачу, прежде чем выбирать другую программу.",
    };
    if (experience !== "practicing") return {
      slug: null,
      reason: "Курс по скорости рассчитан на мастеров с опытом работы. Расскажите Елене о своей практике: сначала важно определить, нужна ли вам база или работа над скоростью.",
    };
    return {
      slug: "speed-portfolio",
      reason: "Для работающего мастера: очный разбор ошибок, рабочего алгоритма и подачи фотографий в Каменске-Шахтинском.",
    };
  }

  if (goal === "materials-lifting") {
    if (format === "offline") return {
      slug: "top-master-universal-2",
      reason: "Вы выбрали очный формат. Эта более широкая программа позволяет закрыть пробелы и разобрать рабочие ситуации с преподавателем; она включает не только материалы, но и наращивание.",
    };
    return {
      slug: "material-logic-online",
      reason: "Ваш запрос — выбор материалов и причины нестабильной носки. Этот тематический онлайн-курс посвящён базам, гелям и подбору системы под задачу.",
      ...(format === "either" ? { alsoSlug: "top-master-universal-2" } : {}),
    };
  }

  if (!hasFoundation) {
    if (!canAttend) return {
      slug: null,
      reason: "Для «Логики форм» нужна базовая подготовка. После самостоятельного обучения сначала обсудите с Еленой свои навыки, чтобы понять, подходит ли вам программа.",
    };
    return {
      slug: "top-master-universal-2",
      reason: "После самостоятельного обучения можно начать с очной программы, которая включает базу и наращивание и подстраивается под опыт ученицы.",
    };
  }

  if (format === "offline") return {
    slug: goal === "architecture-forms" ? "form-logic-offline" : "top-master-universal-2",
    reason: goal === "architecture-forms"
      ? "Профильный очный курс для мастеров: верхние формы, архитектура и коррекция сложных исходников."
      : "Очная программа с корректировкой под ваш опыт: база, наращивание и сложные исходники.",
  };

  return {
    slug: "form-logic-online",
    reason: "С вашей базовой подготовкой можно рассмотреть архитектуру, моделирование и сложные формы онлайн — с домашними заданиями и разбором работ.",
    ...(format === "either" ? { alsoSlug: "form-logic-offline" } : {}),
  };
}
