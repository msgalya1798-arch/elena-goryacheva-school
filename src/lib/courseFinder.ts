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
  slug: string;
  reason: string;
  alsoSlug?: string;
}

/**
 * Квиз не спрашивает, проходил ли пользователь базовый курс.
 * Поэтому «ТОП мастер универсал — повышение квалификации» автоматически не рекомендуем:
 * он подходит только после базового обучения. Для пробелов и сложных случаев безопаснее
 * направлять в «ТОП мастер универсал — 2 ступень», который можно адаптировать под опыт.
 */
function pickUniversal(): string {
  return "top-master-universal-2";
}

export function recommendCourse({ goal, format }: FinderAnswers): FinderResult {
  switch (goal) {
    case "start-career":
      return {
        slug: "nail-master-start",
        reason:
          "Это очный старт с нуля без наращивания: постановка руки, базовые движения и безопасный алгоритм работы.",
        alsoSlug: "top-master-universal-2",
      };

    case "materials-lifting":
      if (format === "online") {
        return {
          slug: "material-logic-online",
          reason:
            "Курс разбирает причины отслоек и сколов: как работают базы, гели и комбинированные системы и как выбрать материал под задачу.",
          alsoSlug: "top-master-universal-2",
        };
      }
      return {
        slug: "top-master-universal-2",
        reason:
          "Очная программа помогает закрыть пробелы, выстроить базу и разобрать сложные рабочие ситуации с индивидуальной корректировкой.",
        alsoSlug: format === "either" ? "material-logic-online" : undefined,
      };

    case "complex-nails": {
      const offlineChoice = pickUniversal();
      if (format === "online") {
        return {
          slug: "form-logic-online",
          reason:
            "Онлайн-программа проходит путь от логики материалов до сложных форм — с домашними заданиями и разбором работ.",
          alsoSlug: offlineChoice,
        };
      }
      return {
        slug: offlineChoice,
        reason: "Программа закрывает пробелы, включает наращивание и учит работать со сложными исходниками.",
        alsoSlug: format === "either" ? "form-logic-online" : undefined,
      };
    }

    case "architecture-forms":
      if (format === "online") {
        return {
          slug: "form-logic-online",
          reason: "Логика форм, архитектура и минимальный опил — в своём темпе, с разбором домашних работ.",
          alsoSlug: "form-logic-offline",
        };
      }
      return {
        slug: "form-logic-offline",
        reason: "Профильный очный курс: верхние формы, баланс и коррекция сложных исходников с минимальным опилом.",
        alsoSlug: format === "either" ? "form-logic-online" : undefined,
      };

    case "speed-quality":
      return {
        slug: "speed-portfolio",
        reason:
          "Курс идёт только очно — скорость и чистая подача работ нарабатываются вживую, на разборе именно ваших ошибок.",
      };

    case "systemize-gaps":
    default: {
      const offlineChoice = pickUniversal();
      if (format === "online") {
        return {
          slug: "form-logic-online",
          reason:
            "Самая широкая онлайн-программа — от логики материалов до сложных форм, с закреплением через домашние задания.",
          alsoSlug: offlineChoice,
        };
      }
      return {
        slug: offlineChoice,
        reason: "Программа системно закрывает пробелы и выстраивает базу с индивидуальной корректировкой.",
        alsoSlug: format === "either" ? "form-logic-online" : undefined,
      };
    }
  }
}
