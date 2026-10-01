import Image from "next/image";
import Link from "next/link";
import { editorialFont } from "@/lib/editorialFont";
import { EditorialCourses } from "@/components/editorial/EditorialCourses";
import { CourseFinderSection } from "./CourseFinderSection";
import { StudentWork } from "./StudentWork";
import { ReviewsTeaser } from "./ReviewsTeaser";
import { OnlineHowItWorks } from "@/components/online/OnlineHowItWorks";
import { FaqSection } from "./FaqSection";
import { siteConfig } from "@/content/site";
import { primaryContactHref } from "@/lib/contact";
import s from "./EditorialHome.module.css";

export function EditorialHome() {
  return (
    <div className={`${editorialFont.variable} ${s.home}`} data-home-theme="editorial">
      <section className={s.hero}>
        <div className={`${s.wrap} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <p className={s.eyebrow}>Школа Елены Горячевой · онлайн по России · очно в Каменске-Шахтинском</p>
            <h1>Маникюр.<br />Понимать.<br /><span>А не повторять.</span></h1>
            <p className={s.lead}>Онлайн — курсы по материалам и формам ногтей. Очно — обучение с нуля и повышение квалификации с практикой на моделях. В основе — понимание причин, материала и архитектуры, а не повторение движений.</p>
            <div className={s.actions}>
              <Link href="#courses" className={s.button}>Онлайн-курсы <span aria-hidden>↗</span></Link>
              <Link href="/offline" className={`${s.button} ${s.heroSecondary}`}>Очные курсы <span aria-hidden>↗</span></Link>
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

      <EditorialCourses />

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
        <div className={`${s.wrap} ${s.expertGrid}`}>
          <div className={s.expertHeading}><p className={s.eyebrow}>03 / Лично от преподавателя</p><h2>«Я сама работаю<br />мастером.<br /><span>И сама учу».</span></h2></div>
          <div className={s.expertPortrait}>
            <Image
              src="/images/elena-teacher-cutout.png"
              alt="Елена Горячева — преподаватель школы"
              fill
              sizes="(min-width: 900px) 480px, (min-width: 480px) 400px, 90vw"
              className={s.expertPhoto}
            />
          </div>
          <div className={s.expertCopy}><p>Я — Елена Горячева. {siteConfig.experienceYears} лет в профессии и {siteConfig.teachingYears} лет в преподавании. Веду программы лично: от постановки задачи до разбора работы.</p><p>На странице обо мне — опыт и сведения о квалификации. Познакомьтесь с преподавателем до выбора курса.</p><Link href="/about#qualifications" className={`${s.button} ${s.lightButton}`}>Об Елене и квалификации ↗</Link></div>
        </div>
      </section>
      <div className={s.finder}><CourseFinderSection /></div>
      <section className={s.offline}><div className={`${s.wrap} ${s.offlineInner}`}><div><p className={s.eyebrow}>Очно / Каменск-Шахтинский</p><h2>Нужна постановка руки?</h2><p>Базовые программы с нуля и повышение квалификации — с практикой на моделях.</p></div><Link href="/offline" className={`${s.button} ${s.outlineButton}`}>Очные программы ↗</Link></div></section>
      <section className={`${s.section} ${s.final}`}><div className={s.wrap}><p className={s.eyebrow}>Следующий шаг — ваш</p><h2>Разобраться.<br /><span>И двигаться дальше.</span></h2><p>Выберите программу или расскажите Елене о своей задаче.</p><div className={s.actions}><Link href="#courses" className={s.button}>Выбрать онлайн-курс ↗</Link><a href={primaryContactHref() ?? "/online"} className={s.textLink}>Спросить в Telegram →</a></div></div></section>
      <div className={s.faq}><FaqSection audience="online" /></div>
    </div>
  );
}
