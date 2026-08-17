import type { BeforeAfterCase, Testimonial } from "@/types/content";

export interface AudienceRecommendation {
  courseSlug: string;
  reason: string;
}

export interface AudienceSegment {
  number: string;
  title: string;
  description: string;
  primary: AudienceRecommendation[];
  secondary?: AudienceRecommendation;
}

/** ТЗ "главная страница v1", раздел 5: «Найди свою точку роста» — аккордеон с 3 сегментами. */
export const audienceSegments: AudienceSegment[] = [
  {
    number: "01",
    title: "Начинаю с нуля",
    description: "Для тех, кто раньше не работал мастером.",
    primary: [
      {
        courseSlug: "nail-master-start",
        reason: "Основной вариант: постановка руки, база и безопасный старт под контролем.",
      },
      {
        courseSlug: "top-master-universal-2",
        reason: "Более глубокий вариант, если хотите сразу расширенную программу.",
      },
    ],
  },
  {
    number: "02",
    title: "Училась сама / есть пробелы",
    description:
      "Для самоучек и тех, кто проходил обучение раньше, но не получил цельной базы и уверенности.",
    primary: [
      {
        courseSlug: "top-master-universal-2",
        reason: "Закрывает пробелы после предыдущего обучения и выстраивает цельную базу.",
      },
      {
        courseSlug: "form-logic-offline",
        reason: "Если сложность именно в формах и архитектуре — курс разбирает верхние формы и сложные исходники.",
      },
    ],
    secondary: {
      courseSlug: "material-logic-online",
      reason: "Если основная сложность — в материалах и нестабильной носке, начните с логики материалов.",
    },
  },
  {
    number: "03",
    title: "Уже работаю мастером",
    description:
      "Для практикующих мастеров с клиентами, которые хотят закрыть ошибки, повысить качество, скорость и чек.",
    primary: [
      {
        courseSlug: "top-master-universal-advanced",
        reason: "Комплексное повышение: работа с материалами и сложными исходниками для практикующих мастеров.",
      },
      {
        courseSlug: "form-logic-offline",
        reason: "Формы, моделирование и коррекция сложных ногтей с меньшим количеством лишнего опила.",
      },
    ],
    secondary: {
      courseSlug: "material-logic-online",
      reason: "Если приоритет — разобраться в материалах, отслойках и подборе системы.",
    },
  },
];

/**
 * Реальные отзывы учениц — скриншоты переписок и один публичный отзыв, предоставленные Еленой.
 * Показываем сами скриншоты (не перепечатанный текст) — так они вызывают больше доверия.
 * Имя указано только там, где оно реально видно на скриншоте (Дарина, Дарья Нагорная, Светлана);
 * для остальных — честный анонимный формат "Ученица школы", имена не выдумываются.
 */
export const testimonials: Testimonial[] = [
  {
    id: "daria-nagornaya",
    name: "Дарья Нагорная",
    result: "Начинающий мастер — клиенты сами приводят новых",
    screenshot: "/images/reviews/review-02.jpg",
    hasVideo: false,
  },
  {
    id: "svetlana",
    name: "Светлана",
    result: "Комфортная атмосфера с первого дня обучения",
    screenshot: "/images/reviews/review-03.jpg",
    hasVideo: false,
  },
  {
    id: "darina",
    name: "Дарина",
    courseSlug: "nail-master-start",
    result: "Ушли ошибки самоучки, устойчивый результат «как с картинки»",
    screenshot: "/images/reviews/review-05.jpg",
    hasVideo: false,
  },
  {
    id: "more-than-a-course",
    name: "Ученица школы",
    result: "Более серьёзный подход к делу после курса",
    screenshot: "/images/reviews/review-01.jpg",
    hasVideo: false,
  },
  {
    id: "conspect-wow",
    name: "Ученица школы",
    result: "Видеоуроки понятны даже без опыта",
    screenshot: "/images/reviews/review-04.jpg",
    hasVideo: false,
  },
  {
    id: "teacher-with-capital-letter",
    name: "Ученица школы",
    result: "«Преподаватель с большой буквы»",
    screenshot: "/images/reviews/review-06.jpg",
    hasVideo: false,
  },
  {
    id: "multipronail",
    name: "Ученица школы",
    result: "Индивидуальный подход и комфортная обстановка на курсе",
    screenshot: "/images/reviews/review-07.jpg",
    hasVideo: false,
  },
  {
    id: "mega-progress",
    name: "Ученица школы",
    result: "«Лучший инструктор, прогресс семимильными шагами»",
    screenshot: "/images/reviews/review-08.jpg",
    hasVideo: false,
  },
  {
    id: "filing-improved",
    name: "Ученица школы",
    result: "Ровные формы и одинаковая длина ногтей у клиентов",
    screenshot: "/images/reviews/review-09.jpg",
    hasVideo: false,
  },
  {
    id: "vetamin-support",
    name: "Ученица школы",
    result: "Поддерживающая атмосфера вместо критики за ошибки",
    screenshot: "/images/reviews/review-10.jpg",
    hasVideo: false,
  },
  {
    id: "no-lifting",
    name: "Ученица школы",
    result: "Ноль отслоек у клиентов после курса",
    screenshot: "/images/reviews/review-11.jpg",
    hasVideo: false,
  },
  {
    id: "basic-4-days",
    name: "Ученица школы",
    result: "Много знаний за 4 дня базового курса",
    screenshot: "/images/reviews/review-12.jpg",
    hasVideo: false,
  },
  {
    id: "masters-eye",
    name: "Ученица школы",
    result: "Научилась замечать недочёты в «идеальных» работах",
    screenshot: "/images/reviews/review-13.jpg",
    hasVideo: false,
  },
  {
    id: "best-course",
    name: "Ученица школы",
    result: "«Лучше курса вы не найдёте»",
    screenshot: "/images/reviews/review-14.jpg",
    hasVideo: false,
  },
  {
    id: "grateful",
    name: "Ученица школы",
    result: "Благодарность за знания, терпение и опыт",
    screenshot: "/images/reviews/review-15.jpg",
    hasVideo: false,
  },
  {
    id: "two-days-more",
    name: "Ученица школы",
    result: "«За 2 дня дала больше, чем предыдущие обучения»",
    screenshot: "/images/reviews/review-16.jpg",
    hasVideo: false,
  },
  {
    id: "competition-parallels",
    name: "Ученица школы",
    result: "Стала видеть форму ногтя как мастер",
    screenshot: "/images/reviews/review-17.jpg",
    hasVideo: false,
  },
];

/**
 * ТЗ v3.0, раздел 11: реальные работы до/после пока не предоставлены — раздел на сайте
 * полностью скрыт (не placeholder). См. FACTS.md.
 */
export const beforeAfterCases: BeforeAfterCase[] = [];

/** ТЗ v3.0, раздел 12: вопросы, которые снимают страх покупки. */
export const homeFaq = [
  {
    question: "Подойдёт ли мне курс, если я совсем с нуля?",
    answer:
      "Да. Курс «Nail-мастер: старт» рассчитан на учеников без опыта — начинаю с постановки руки и базовой безопасности.",
  },
  {
    question: "Как выбрать между офлайн- и онлайн-форматом?",
    answer:
      "Офлайн — очные встречи в Каменске-Шахтинском с разбором на моделях и живой корректировкой руки. Онлайн — теория, протоколы работы с материалами и разбор через записи и чат, без очной части.",
  },
  {
    question: "Как понять, какой курс мне подходит?",
    answer:
      "Ниже на странице есть подбор из трёх вопросов — по опыту, трудности и формату. Он сразу показывает рекомендацию, без обязательного оставления контакта.",
  },
  {
    question: "Что нужно купить или принести на очное обучение?",
    answer:
      "Для офлайн-курсов я помогаю со списком и организацией закупки без лишних расходов — это часть программы «Nail-мастер: старт».",
  },
  {
    question: "Что входит в стоимость и есть ли дополнительные расходы?",
    answer:
      "Состав программы для каждого курса указан на его странице. Если что-то не описано там — уточняю на этапе записи, до оплаты.",
  },
  {
    question: "Как проходит поддержка после обучения?",
    answer: "Формат и срок поддержки различаются по программам — подробности указаны на странице каждого курса.",
  },
  {
    question: "Даётся ли сертификат после обучения?",
    answer: "Пока я не даю обещаний на этот счёт заранее — расскажу точно на консультации перед записью.",
  },
  {
    question: "Что если у меня уже есть пробелы после других курсов?",
    answer:
      "Для этого случая есть «ТОП мастер универсал — 2 ступень»: программа закрывает пробелы и выстраивает системную базу с индивидуальной корректировкой.",
  },
];
