import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import css from "./TeethCleaningPage.module.css";
import { TextCard } from "../../../../components/TextCard/TextCard";
import Image from "next/image";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";

export default function TeethCleaningPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Стоматология", href: "/services/stomatology" },
    { label: "Чистка зубов" },
  ];
  const images = [
    "/teethCleaning1.jpg",
    "/teethCleaning2.jpg",
    "/teethCleaning3.jpg",
  ];
  return (
    <div>
      <Head>
        <title>Чистка зубов - Клиника NewMe</title>
        <meta
          name="description"
          content="Профессиональная чистка зубов в клинике NewMe помогает поддерживать здоровье полости рта и белизну зубов. Узнайте больше о процедуре."
        />
        {/* Обновите Open Graph и Twitter метатеги */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.teethCleaningMain}
        header={"Чистка зубов"}
        src={"/teethCleaningMain.jpg"}
        alt={"Чистка зубов"}
      />
      <div className={css.wrapper}>
        <TextCard
          header="Профессиональная чистка зубов: здоровье и белизна"
          text="Профессиональная чистка зубов — это важная и регулярная процедура, необходимая для поддержания здоровья полости рта и профилактики заболеваний зубов и десен. В отличие от обычной чистки зубов щеткой, профессиональная чистка в стоматологической клинике позволяет удалить налет и зубной камень, которые скапливаются даже при тщательном домашнем уходе.

В клинике NewMe мы предлагаем безопасную и эффективную чистку зубов, которая помогает вернуть зубам их естественную белизну и свежесть. Наши квалифицированные специалисты используют современные методы и оборудование для бережного удаления отложений с поверхности зубов, а также из труднодоступных участков, таких как межзубные промежутки и линии десен. "
        />

        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning4.jpg"}
            alt={"Чистка зубов"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          Процедура чистки зубов включает несколько этапов. Сначала стоматолог с
          помощью ультразвуковых инструментов удаляет зубной камень и налет,
          затем производится полировка зубов, чтобы устранить оставшиеся пятна и
          придать зубам гладкость. Завершающим этапом является нанесение
          фторсодержащего геля, который укрепляет эмаль и снижает
          чувствительность зубов. Регулярная профессиональная чистка зубов не
          только улучшает внешний вид вашей улыбки, но и предотвращает развитие
          серьезных стоматологических проблем, таких как кариес, гингивит и
          пародонтит. Мы рекомендуем проходить такую процедуру минимум два раза
          в год для поддержания оптимального здоровья зубов и десен. В клинике
          <strong> NewMe </strong> мы заботимся о комфорте и безопасности наших
          пациентов, обеспечивая максимально безболезненное и качественное
          проведение процедуры. Обратитесь к нам, чтобы записаться на
          консультацию и получить профессиональную помощь в уходе за вашими
          зубами.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning6.jpg"}
            alt={"Чистка зубов"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <strong>Этапы процедуры:</strong> Профессиональная чистка зубов в
          нашей клинике проходит в несколько этапов:
          <ul className={css.list}>
            <li>
              <strong>Ультразвуковая чистка:</strong> Удаление твердых отложений
              с поверхности зубов с помощью ультразвукового аппарата.
            </li>
            <li>
              <strong>Пескоструйная чистка:</strong> Удаление мягкого налета и
              пигментации с помощью смеси воды, воздуха и специального порошка.
            </li>
            <li>
              <strong>Полировка:</strong> Сглаживание поверхности зубов для
              предотвращения дальнейшего накопления налета.
            </li>
            <li>
              <strong>Фторирование:</strong> Нанесение фторсодержащего препарата
              для укрепления эмали и профилактики кариеса.
            </li>
          </ul>
          Процедура безопасна и безболезненна, а результат виден сразу после
          окончания.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning5.jpg"}
            alt={"Чистка зубов"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <h4 className={css.listHeader}>Почему стоит выбрать нас?</h4>В клинике{" "}
          <strong>NewMe</strong> мы предлагаем высококачественную
          профессиональную чистку зубов, выполняемую опытными стоматологами,
          специализирующимися на профилактике и уходе за полостью рта. Мы
          используем современные методы и технологии, чтобы обеспечить вам
          максимально комфортную и эффективную процедуру.
          <ul className={css.list}>
            <li>
              <strong>Индивидуальный подход:</strong> Каждый пациент получает
              персонализированный план лечения, учитывающий состояние его зубов
              и десен, а также индивидуальные пожелания и потребности.
            </li>
            <li>
              <strong>Современное оборудование:</strong> Мы используем самые
              современные технологии и материалы, чтобы гарантировать высокое
              качество и безопасность всех процедур.
            </li>
            <li>
              <strong>Поддержка на всех этапах:</strong> Наша команда
              предоставляет полную поддержку и консультации как до, так и после
              процедуры, помогая вам сохранить здоровую и красивую улыбку.
            </li>
          </ul>
          <h4 className={css.listHeader}>Как записаться на консультацию?</h4>
          Если вы хотите узнать больше о профессиональной чистке зубов или
          записаться на процедуру, свяжитесь с нами через наш сайт или по
          телефону. Наши специалисты будут рады ответить на все ваши вопросы и
          помочь вам сделать первый шаг к здоровой и сияющей улыбке.
        </p>
        <PhotoCard
          header={"Фото до и после процедуры:"}
          images={images}
          href={"/articles"} // сделайте отдельный маршрут на статьи о чистке зубов
          textBtn={"Больше фото"}
        />
      </div>
      <YouTubeVideo url={"https://www.youtube.com/embed/your-video-id"} />{" "}
      {/* Обновите ссылку на видео */}
      <CallBackSection
        className={css.teethCleaning}
        classNameInput={css.inputTeethCleaning}
      />
    </div>
  );
}
