export type FinderExperience = "none" | "gaps" | "confident";
export type FinderProblem = "dont-know-start" | "unstable-results" | "complex-architecture";
export type FinderFormat = "offline" | "online";

export interface FinderAnswers {
  experience: FinderExperience;
  problem: FinderProblem;
  format: FinderFormat;
}

/**
 * Простая детерминированная логика подбора — раздел 12.3 ТЗ:
 * "сначала показать рекомендацию и объяснить логику выбора".
 * Никаких скрытых весов и ML — правило должно быть объяснимым пользователю.
 */
export function recommendCourseSlug(answers: FinderAnswers): { slug: string; reason: string } {
  const { experience, problem, format } = answers;

  if (experience === "none") {
    return format === "offline"
      ? {
          slug: "nail-master-start",
          reason: "У вас пока нет опыта — этот курс даёт безопасный старт и постановку руки очно.",
        }
      : {
          slug: "material-logic-online",
          reason: "Для старта без очной части лучше начать с понимания материалов, прежде чем переходить к технике.",
        };
  }

  if (problem === "unstable-results") {
    return format === "offline"
      ? {
          slug: "top-master-universal-advanced",
          reason: "Отслойки и сколы чаще всего решаются диагностикой ошибок и работой с материалами очно.",
        }
      : {
          slug: "material-logic-online",
          reason: "Нестабильная носка почти всегда связана с логикой материалов — курс разбирает именно это.",
        };
  }

  if (problem === "complex-architecture" || experience === "confident") {
    return format === "offline"
      ? {
          slug: "form-logic-offline",
          reason: "Сложные исходники и верхние формы — профильная тема этого очного курса.",
        }
      : {
          slug: "form-logic-online",
          reason: "Системная работа с формами и архитектурой доступна и в онлайн-формате.",
        };
  }

  return {
    slug: "top-master-universal-2",
    reason: "Похоже, вам нужна системная база с корректировкой под уже имеющийся опыт.",
  };
}
