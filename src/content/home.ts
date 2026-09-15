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

/** «Найди свою точку роста» — аккордеон с 3 сегментами. */
export const audienceSegments: AudienceSegment[] = [
  {
    number: "01",
    title: "Начинаю с нуля",
    description: "Для тех, кто раньше не работал мастером.",
    primary: [
      {
        courseSlug: "nail-master-start",
        reason: "Старт с нуля без наращивания: постановка руки, база и безопасный алгоритм работы.",
      },
      {
        courseSlug: "top-master-universal-2",
        reason: "Более полная программа с нуля с наращиванием и дальнейшей работой со сложными исходниками.",
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
        reason: "Закрывает пробелы после предыдущего обучения и выстраивает цельную базу с наращиванием.",
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
        reason: "Если базовый курс уже пройден: 7 дней практики по наращиванию, коррекции, моделированию и сложным случаям.",
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
 * Показываем сами скриншоты, имена не выдумываем.
 */
export const testimonials: Testimonial[] = [
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

/** Реальные работы до/после пока не предоставлены — раздел скрыт. */
export const beforeAfterCases: BeforeAfterCase[] = [];

export const homeFaq = [
  {
    question: "Подойдёт ли мне курс, если я совсем с нуля?",
    answer:
      "Да. Для обучения с нуля есть два варианта: «Nail-мастер: старт» — базовый курс без наращивания; «ТОП мастер универсал — 2 ступень» — более полная программа с наращиванием.",
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
    answer:
      "Формат поддержки зависит от программы. На курсе «ТОП мастер универсал — повышение квалификации» моя поддержка остаётся навсегда; для онлайн-тарифа «Логика материалов» поддержку можно продлевать за 1 000 ₽ в месяц.",
  },
  {
    question: "Даётся ли сертификат после обучения?",
    answer:
      "Да. После живых курсов выдаётся сертификат: после «ТОП мастер универсал — 2 ступень» вы получаете 2 сертификата, после других живых курсов — 1. После сдачи предусмотренных уроков на онлайн-обучении также выдаётся сертификат. Для курсов «Nail-мастер: старт», «ТОП мастер универсал — 2 ступень» и «Логика форм» также возможно получить сертификат государственного образца от школы, инструктором которой я являюсь и в которой прошла аккредитацию.",
  },
  {
    question: "Что если у меня уже есть пробелы после других курсов?",
    answer:
      "Есть несколько курсов повышения квалификации. Полные описания есть на сайте. Если не уверены, какой вариант подойдёт именно вам, напишите мне в личные сообщения — я помогу определиться с курсом и подстрою обучение под ваш запрос. К каждому ученику я подхожу индивидуально.",
    ctaLabel: "Написать Елене →",
  },
];
