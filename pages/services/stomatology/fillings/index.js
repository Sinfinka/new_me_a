import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import css from "./FillingsPage.module.css";
import { TextCard } from "../../../../components/TextCard/TextCard";
import Image from "next/image";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";

export default function FillingsPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Стоматология", href: "/services/stomatology" },
    { label: "Пломбирование зубов" },
  ];
  const images = [
    "/teethCleaning1.jpg",
    "/teethCleaning2.jpg",
    "/teethCleaning3.jpg",
  ];
  return (
    <div>
      <Head>
        <title>Пломбирование зубов - Клиника NewMe</title>
        <meta
          name="description"
          content="Пломбирование зубов в клинике NewMe восстанавливает структуру зуба после кариеса и предотвращает дальнейшее разрушение. Узнайте больше о процедуре."
        />
        {/* Обновите Open Graph и Twitter метатеги */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.teethCleaningMain}
        header={"Пломбирование зубов"}
        src={"/teethCleaningMain.jpg"}
        alt={"Пломбирование зубов"}
      />
      <div className={css.wrapper}>
        <TextCard
          header="Пломбирование зубов: восстановление и защита"
          text="Пломбирование зубов — это процедура восстановления поврежденной структуры зуба, чаще всего после удаления кариеса. Эта процедура помогает не только устранить дефект, но и защитить зуб от дальнейшего разрушения. В клинике NewMe мы используем современные материалы и технологии, чтобы пломбы не только сохраняли здоровье зубов, но и гармонично вписывались в вашу улыбку.
          
          Наши специалисты подберут оптимальный материал для пломбы, учитывая локализацию и степень повреждения зуба. Благодаря современным композитным материалам, пломбы практически неотличимы от естественной эмали зуба и обеспечивают длительный эффект."
        />

        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning4.jpg"}
            alt={"Пломбирование зубов"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          Процедура пломбирования зубов проходит в несколько этапов. Сначала
          врач удаляет пораженные ткани зуба, после чего полость тщательно
          очищается. Затем на очищенную область накладывается пломбировочный
          материал, который постепенно затвердевает, восстанавливая форму и
          функцию зуба. Важно, что современные материалы обладают высокой
          прочностью и эстетикой, поэтому пломба надежно защищает зуб и выглядит
          естественно. В клинике <strong>NewMe</strong> мы заботимся о вашем
          комфорте на каждом этапе лечения, обеспечивая качественную и
          безболезненную процедуру.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning6.jpg"}
            alt={"Пломбирование зубов"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <strong>Этапы процедуры:</strong> Пломбирование зубов в нашей клинике
          проходит в несколько этапов:
          <ul className={css.list}>
            <li>
              <strong>Удаление пораженных тканей:</strong> Врач удаляет
              кариозные участки, чтобы предотвратить дальнейшее разрушение зуба.
            </li>
            <li>
              <strong>Очистка полости:</strong> Тщательная очистка полости для
              подготовки к пломбированию.
            </li>
            <li>
              <strong>Установка пломбы:</strong> Нанесение пломбировочного
              материала, который восстанавливает структуру зуба.
            </li>
            <li>
              <strong>Полировка:</strong> Завершающий этап, при котором пломба
              сглаживается, чтобы полностью совпадать с естественной
              поверхностью зуба.
            </li>
          </ul>
          Процедура проводится быстро, безопасна и безболезненна. Результат
          служит долгие годы при правильном уходе за зубами.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/teethCleaning5.jpg"}
            alt={"Пломбирование зубов"}
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
          <strong>NewMe</strong> мы предлагаем высококачественное пломбирование
          зубов, выполняемое опытными стоматологами. Мы используем новейшие
          материалы и технологии, чтобы пломбы служили долгие годы и сохраняли
          эстетику вашей улыбки.
          <ul className={css.list}>
            <li>
              <strong>Индивидуальный подход:</strong> Каждый пациент получает
              персонализированный план лечения, учитывающий особенности его
              зубов.
            </li>
            <li>
              <strong>Современное оборудование:</strong> Мы используем самые
              современные технологии для проведения процедур.
            </li>
            <li>
              <strong>Поддержка на всех этапах:</strong> Мы сопровождаем вас на
              всех этапах лечения, обеспечивая качественную помощь.
            </li>
          </ul>
          <h4 className={css.listHeader}>Как записаться на консультацию?</h4>
          Если вы хотите узнать больше о пломбировании зубов или записаться на
          процедуру, свяжитесь с нами через наш сайт или по телефону. Наши
          специалисты с радостью ответят на все ваши вопросы и помогут вам
          сохранить здоровье ваших зубов.
        </p>
        <PhotoCard
          header={"Фото до и после процедуры:"}
          images={images}
          href={"/articles"} // сделайте отдельный маршрут на статьи о пломбировании зубов
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
