import Image from "next/image";
import Link from "next/link";
import { MaterialOffer } from "@/components/MaterialOffer";
import { getCourseBySlug } from "@/content/courses";
import s from "@/components/home/EditorialHome.module.css";

export function EditorialCourses() {
  const materials = getCourseBySlug("material-logic-online")!;
  const forms = getCourseBySlug("form-logic-online")!;
  return (
    <section data-editorial-approved-courses id="courses" className={`${s.section} ${s.courses}`}>
        <div className={s.wrap}>
          <div className={s.sectionHead}><div><p className={s.eyebrow}>01 / Онлайн-программы</p><h2>Ваша задача.<br /><span>Ваша программа.</span></h2></div><p>Материалы или формы? Начните с того, что сейчас вызывает вопросы в работе.</p></div>
          <div className={s.courseGrid}>
            <article className={s.course}>
              <div className={s.courseTop}><span>01 / Материалы и носка</span><span>Онлайн</span></div>
              <h3>{materials.title}</h3>
              <p>{materials.mainResult}</p>
              <div className={s.courseDetails}>
                <details><summary>Свойства материалов и подбор системы<span aria-hidden>+</span></summary><p>{materials.whatYouGet[0]}. {materials.whatYouGet[1]}.</p></details>
                <details><summary>Причины отслоек и нестабильной носки<span aria-hidden>+</span></summary><p>{materials.whatYouGet[2]}. {materials.whatYouGet[3]}.</p></details>
                <details><summary>Обучение с поддержкой Елены<span aria-hidden>+</span></summary><p>Уроки и общение проходят в Telegram. Можно приносить свои реальные клиентские случаи и вопросы — Елена разбирает их вместе с участниками.</p></details>
              </div>
              <MaterialOffer amount={materials.price.amount} />
              <p className={s.supportHighlight}><span aria-hidden>✦</span><strong>{materials.durationLabel}</strong></p>
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
  );
}
