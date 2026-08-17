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

/** «ТОП мастер универсал»: для практикующих — версия повышения квалификации, иначе — 2 ступень. */
function pickUniversal(experience: FinderExperience): string {
  return experience === "practicing" ? "top-master-universal-advanced" : "top-master-universal-2";
}

/**
 * Простая детерминированная логика подбора — учитывает опыт + задачу + формат,
 * правило должно быть объяснимым пользователю (ТЗ «главная страница v1», раздел 10).
 */
export function recommendCourse({ experience, goal, format }: FinderAnswers): FinderResult {
  switch (goal) {
    case "start-career":
      return {
        slug: "nail-master-start",
        reason:
          "Это очный старт с постановкой руки под контролем — базовые движения и уверенность нарабатываются вживую, не дистанционно.",
        alsoSlug: format !== "offline" ? "material-logic-online" : undefined,
      };

    case "materials-lifting":
      if (format === "online") {
        return {
          slug: "material-logic-online",
          reason:
            "Курс разбирает причины отслоек и сколов: как работают базы, гели и комбинированные системы и как выбрать материал под задачу.",
          alsoSlug: "top-master-universal-advanced",
        };
      }
      return {
        slug: "top-master-universal-advanced",
        reason: "Программа для практикующих мастеров закрывает пробелы в работе с материалами и сложными исходниками очно.",
        alsoSlug: format === "either" ? "material-logic-online" : undefined,
      };

    case "complex-nails": {
      const offlineChoice = pickUniversal(experience);
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
        reason:
          offlineChoice === "top-master-universal-advanced"
            ? "Комплексная очная программа для практикующих мастеров: работа со сложными исходниками и моделированием."
            : "Программа закрывает пробелы после предыдущего обучения и учит работать со сложными исходниками.",
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
      const offlineChoice = pickUniversal(experience);
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
