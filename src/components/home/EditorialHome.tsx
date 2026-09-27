import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { MaterialOffer } from "@/components/MaterialOffer";
import { CourseFinderSection } from "./CourseFinderSection";
import { StudentWork } from "./StudentWork";
import { ReviewsTeaser } from "./ReviewsTeaser";
import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { FaqSection } from "./FaqSection";
import { getCourseBySlug } from "@/content/courses";
import { siteConfig } from "@/content/site";
import { primaryContactHref } from "@/lib/contact";
import s from "./EditorialHome.module.css";

const display = Oswald({ subsets: ["latin", "cyrillic"], weight: ["400", "500", "600"], display: "swap", variable: "--font-editorial" });

export function EditorialHome() {
  const materials = getCourseBySlug("material-logic-online")!;
  const forms = getCourseBySlug("form-logic-online")!;
  return (
    <div className={`${display.variable} ${s.home}`} data-home-theme="editorial">
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Школа Елены Горячевой · онлайн по всей России</p>
            <h1>Маникюр.<br />Понимать.<br /><span>А не повторять.</span></h1>
            <p className={s.lead}>Онлайн-курсы по материалам и формам ногтей. Разберитесь в причинах отслоек, подборе системы и архитектуре — вместе с практикующим мастером.</p>
            <div className={s.actions}>
              <Link href="#courses" className={s.button}>Выбрать онлайн-курс <span aria-hidden>↗</span></Link>
              <Link href="#finder" className={s.textLink}>Помочь с выбором →</Link>
            </div>
          </div>
          <figure className={s.portrait}>
            <Image src="/images/elena-portrait.jpg" alt="Елена Горячева — преподаватель школы маникюра" fill priority sizes="(min-width: 900px) 48vw, 100vw" />
            <figcaption><span>Ваш преподаватель</span><strong>Елена Горячева</strong><Link href="/about">Знакомство с Еленой ↗</Link></figcaption>
          </figure>
        </div>
        <div className={`${s.wrap} ${s.stats}`}>
          <div><strong>{siteConfig.experienceYears}</strong><span>лет в профессии</span></div>
          <div><strong>{siteConfig.teachingYears}</strong><span>лет преподавания</span></div>
          <div><strong>{siteConfig.studentsCount}</strong><span>учеников школы</span></div>
        </div>
      </section>

      <section id="courses" className={`${s.section} ${s.courses}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}><div><p className={s.eyebrow}>01 / Онлайн-программы</p><h2>Ваша задача.<br /><span>Ваша программа.</span></h2></div><p>Материалы или формы? Начните с того, что сейчас вызывает вопросы в работе.</p></div>
          <div className={s.courseGrid}>
            <article className={s.course}>
              <div className={s.courseTop}><span>01 / Материалы и носка</span><span>Онлайн</span></div>
              <h3>{materials.title}</h3>
              <p>{materials.mainResult}</p>
              <ul><li>Свойства материалов и подбор системы</li><li>Причины отслоек и нестабильной носки</li><li>Обучение с поддержкой Елены</li></ul>
              <MaterialOffer amount={materials.price.amount} />
              <p className={s.duration}>{materials.durationLabel}</p>
              <Link href={`/online/${materials.slug}`} className={s.button}>Посмотреть программу <span aria-hidden>↗</span></Link>
            </article>
            <article className={`${s.course} ${s.formCourse}`}>
              <div className={s.courseTop}><span>02 / Архитектура и моделирование</span><span>Онлайн</span></div>
              <h3>{forms.title}</h3>
              <p>{forms.mainResult}</p>
              <div className={s.courseImage}><Image src="/images/student-work/work-03.jpg" alt="Работа из галереи школы: мраморный дизайн на длинных стилетах" fill sizes="(min-width: 900px) 40vw, 90vw" /></div>
              <p className={s.duration}>Для мастеров с базовой подготовкой</p>
              <Link href={`/online/${forms.slug}`} className={s.button}>Посмотреть программу <span aria-hidden>↗</span></Link>
            </article>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.method}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <div><p className={s.eyebrow}>02 / Подход к обучению</p><h2>За каждым<br />движением —<br /><span>понимание.</span></h2><p className={s.lead}>Одинаковых ногтей не бывает. Поэтому важно понимать, как принять решение в конкретной ситуации.</p></div>
          <div className={s.methodList}>
            {[['Видеть исходник', 'Анализировать ногти и замечать особенности до выбора техники.'], ['Понимать материал', 'Разбираться в свойствах системы и причинах нестабильной носки.'], ['Выбирать решение', 'Адаптировать технику к ситуации, а не работать по одной схеме.']].map(([title, body], i) => <div key={title}><span className={s.number}>0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></div>)}
          </div>
        </div>
      </section>
      <div className={s.gallery}><StudentWork title="Работы моих учениц" hideDescription /></div>
      <div className={s.reviews}><ReviewsTeaser /></div>
      <div className={s.how}><OnlineHowItWorks accordion /></div>

      <section className={`${s.section} ${s.expert}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <div><p className={s.eyebrow}>03 / Лично от преподавателя</p><h2>«Я сама работаю<br />мастером.<br /><span>И сама учу».</span></h2></div>
          <div className={s.expertCopy}><p>Я — Елена Горячева. {siteConfig.experienceYears} лет в профессии и {siteConfig.teachingYears} лет в преподавании. Веду программы лично: от постановки задачи до разбора работы.</p><p>На странице обо мне — опыт и сведения о квалификации. Познакомьтесь с преподавателем до выбора курса.</p><Link href="/about#qualifications" className={`${s.button} ${s.lightButton}`}>Об Елене и квалификации ↗</Link></div>
        </div>
      </section>
      <div className={s.finder}><CourseFinderSection /></div>
      <section className={s.offline}><div className={`${s.wrap} ${s.offlineInner}`}><div><p className={s.eyebrow}>Очно / Каменск-Шахтинский</p><h2>Нужна постановка руки?</h2><p>Базовые программы с нуля и повышение квалификации — с практикой на моделях.</p></div><Link href="/offline" className={`${s.button} ${s.outlineButton}`}>Очные программы ↗</Link></div></section>
      <div className={s.faq}><FaqSection audience="online" /></div>
      <section className={`${s.section} ${s.final}`}><div className={s.wrap}><p className={s.eyebrow}>Следующий шаг — ваш</p><h2>Разобраться.<br /><span>И двигаться дальше.</span></h2><p>Выберите программу или расскажите Елене о своей задаче.</p><div className={s.actions}><Link href="#courses" className={s.button}>Выбрать онлайн-курс ↗</Link><a href={primaryContactHref() ?? "/online"} className={s.textLink}>Спросить в Telegram →</a></div></div></section>
    </div>
  );
}
