import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import { TextCard } from "../../../../components/TextCard/TextCard";
import Image from "next/image";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";
import css from "./LipoSurgeryPage.module.css";

export default function LipoSurgeryPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Пластическая хирургия", href: "/services/plastic" },
    { label: "Липосакция" },
  ];
  const images = ["/lipo4.jpg", "/lipo3.jpg", "/lipo2.jpg"];
  return (
    <div>
      <Head>
        <title>Липосакция - NewMe Health Clinic</title>
        <meta name="description" content="Липосакция" />
        {/* ЗМІНИТИ Open Graph и Twitter*/}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.rhinoplastyMain}
        header={"Липосакция"}
        src={"/lipoMain.jpg"}
        alt={"Липосакция"}
      />
      <div className={css.wrapper}>
        <TextCard
          header="Стройное тело: От мечты к реальности."
          text="
Каждый мечтает о красивом подтянутом теле без складок и дряблости. К сожалению, не всем удается достичь идеального внешнего вида. Часто ни диеты, ни тренировки не способны убрать жир с определенных проблемных зон. На помощь приходит липосакция, которая помогает избавиться от лишнего жира и открыть то, что скрыто под ним. Липосакция - это эффективный и легкий способ справиться с проблемой и достичь желаемого результата. Это хирургическая процедура, направленная на удаление лишнего жира из различных частей тела для улучшения контуров и формы. Операция начинается с консультации, где врач определяет области для липосакции. В день операции под анестезией на коже делают небольшие разрезы, через которые вводится канюля для отсасывания жира. После процедуры разрезы закрываются, и на обработанные области накладываются компрессионные повязки. Восстановление занимает некоторое время, и пациент должен следовать инструкциям врача. Липосакция помогает избавиться от жира в проблемных зонах, создавая стройный силуэт."
        />
        <div className={css.imageWrapper}>
          <Image
            src={"/lipo.jpg"}
            alt={"rhino"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          Липосакция не только помогает избавиться от жира в проблемных зонах,
          но и придаёт фигуре стройность и гармонию. Эта процедура особенно
          полезна для тех, кто отчаянно пытается достичь идеального внешнего
          вида и изнуряет себя тренировками и диетами, но результаты остаются
          невидимыми. Постоянные усилия без значительного прогресса могут
          вызвать разочарование и психологический дискомфорт. К тому же, лишний
          вес негативно влияет на весь организм в целом, способствуя
          возникновению различных проблем со здоровьем. Благодаря этой операции
          можно увидеть реальные результаты и стать ближе к своему идеальному
          телу очень быстро и без изнурительных тренировок. Липосакция — это
          универсальная процедура, предназначенная для устранения жировых
          отложений в самых различных областях тела. Она эффективно справляется
          с излишками жира на животе, бедрах, руках и спине, придавая этим
          участкам гладкий и подтянутый вид. Особое внимание уделяется коррекции
          жира на боках, что помогает избавиться от ненужных валиков и создать
          стройный силуэт. Липосакция также успешно применяется для удаления
          жировых отложений на коленях и подбородке, восстанавливая гармоничные
          контуры и улучшая общий внешний вид. Эта процедура позволяет достичь
          желаемой формы тела, создавая естественные и привлекательные линии,
          которые подчеркнут вашу индивидуальность и уверенность в себе.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/lipoW.jpg"}
            alt={"lipo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <div className={css.imageWrapper}>
          <Image
            src={"/lipoWo.jpg"}
            alt={"lipo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
        <p className={css.textCard}>
          Наши услуги по липосакции включают:
          <ul className={css.list}>
            <li>
              Общая липосакция: Удаление лишнего жира из крупных областей тела
              для создания более стройного силуэта. Мы применяем современные
              методы и технологии, чтобы добиться наилучших результатов и
              обеспечить естественный вид.
            </li>
            <li>
              Липосакция проблемных зон: Фокус на специфических участках, таких
              как живот, бедра или руки, где трудно избавиться от жира с помощью
              диет и упражнений. Мы помогаем устранить избыточный жир, чтобы
              создать гармоничный контур.
            </li>
            <li>
              Липосакция после беременности: Восстановление формы тела после
              родов и коррекция изменений, вызванных беременностью. Мы стремимся
              вернуть фигуре прежнюю упругость и гармонию.
            </li>
            <li>
              Липосакция для коррекции асимметрии: Исправление неровностей и
              асимметрий в теле, чтобы создать сбалансированный и естественный
              вид.
            </li>
          </ul>
          Обращайтесь к нам за профессиональной помощью!
        </p>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <h4 className={css.listHeader}>Почему стоит выбрать нас?</h4>В нашей
          клинике работают опытные хирурги, которые специализируются на
          ринопластике. Мы используем современные технологии и методики, чтобы
          обеспечить максимально безопасный и эффективный результат. Наши
          специалисты тщательно планируют каждую операцию, учитывая
          индивидуальные особенности каждого пациента, что позволяет добиться
          оптимальных результатов.
          <ul className={css.list}>
            <li>
              Индивидуальный подход: Мы разрабатываем персонализированные планы
              лечения, чтобы учитывать все ваши пожелания и обеспечить наилучший
              результат.
            </li>
            <li>
              Современное оборудование: Мы используем только самые современные
              технологии для проведения операций, что гарантирует безопасность и
              высокий уровень качества.
            </li>
            <li>
              Поддержка на всех этапах: Наша команда оказывает поддержку на всех
              этапах — от консультации до постоперационного восстановления.
            </li>
          </ul>
          <h4 className={css.listHeader}>Как записаться на консультацию? </h4>{" "}
          Если вы хотите узнать больше о ринопластике или записаться на
          консультацию, свяжитесь с нами через наш сайт или по телефону. Наши
          специалисты с радостью ответят на все ваши вопросы и помогут вам
          сделать первый шаг к новой версии себя.
        </p>
        <PhotoCard
          header={"Фото до и после процедуры:"}
          images={images}
          href={"/articles"} // зробити окремий маршрут на статті про носи
          textBtn={"Больше фото"}
        />
      </div>
      <YouTubeVideo url={"https://www.youtube.com/embed/z6FjqTW0AZY"} />
      <CallBackSection className={css.rhino} classNameInput={css.inputRhino} />
    </div>
  );
}
