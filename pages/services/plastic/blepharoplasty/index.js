import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import css from "./BlepharoplastyPage.module.css";
import { TextCard } from "../../../../components/TextCard/TextCard";
import Image from "next/image";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";

export default function BlepharoplastyPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Пластическая хирургия", href: "/services/plastic" },
    { label: "Блефаропластика" },
  ];
  const images = [
    "/blepharo6.jpg",
    "/blepharo4.jpg",
    "/blepharo5.jpg",
    "/blepharo7.jpg",
  ];
  return (
    <div>
      <Head>
        <title>Блефаропластика - NewMe Health Clinic</title>
        <meta name="description" content="Блефаропластика" />
        {/* ЗМІНИТИ Open Graph и Twitter*/}
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.rhinoplastyMain}
        header={"Блефаропластика"}
        src={"/abdominoMain.jpg"}
        alt={"Блефаропластика"}
      />
      <div className={css.wrapper}>
        <TextCard
          header="Молодость взгляда."
          text="Мечта о молодом и свежем взгляде может быть недосягаемой из-за опущенных век, мешков под глазами или избыточной кожи, которая делает взгляд усталым и стареющим. Операция по подтяжке век, представляет собой эффективное решение для устранения этих проблем и восстановления молодости лица. Со временем кожа вокруг глаз теряет упругость и эластичность, что может привести к образованию нависших век и мешков под глазами. Эти изменения могут быть вызваны возрастом, генетикой или наследственными предрасположенностями. В результате взгляд становится менее выразительным, а лицо выглядит уставшим. Блефаропластика помогает исправить эти дефекты, улучшая внешний вид глаз и возвращая лицу свежесть и молодой вид.

Блефаропластика – это пластическая операция, в результате которой взгляд становится более молодым и открытым. Уменьшается количество лишней кожи, частично разглаживаются морщины, устраняются мешки под глазами и отечность век. Она может проводиться как отдельная операция или в комплексе с другими эстетическими процедурами, например, подтяжкой лба или фейслифтингом.

Блефаропластика также может частично устранить этнические черты, например, придать черты европеоидной расы азиатам."
        />
        <div className={css.imageWrapper}>
          <Image
            src={"/blepharo1.jpg"}
            alt={"blepharo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          Операция по блефаропластике направлена на коррекцию избыточной кожи и
          жировых отложений вокруг глаз. Эта несложная и очень эффективная
          процедура начинается с предварительной консультации, на которой врач
          определяет зоны для коррекции и обсуждает результаты и риски с
          пациентом. В ходе операции, под местным или общим наркозом,
          выполняются разрезы, через которые удаляются избыточные жировые
          отложения и кожа. Разрезы закрываются тонкими швами, которые
          становятся едва заметными. В конце процедуры могут быть установлены
          дренажи для предотвращения накопления жидкости. На область глаз
          накладываются специальные повязки для уменьшения отеков и ускорения
          заживления. В период восстановления, который может длиться от одной до
          двух недель, пациенту рекомендуется избегать физических нагрузок и
          следовать рекомендациям врача для достижения наилучших результатов.
          Если проблемы с кожей вокруг глаз мешают вам чувствовать себя
          уверенно, блефаропластика может стать эффективным решением, улучшая
          внешний вид и придавая свежесть вашему взгляду.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/blepharo3.jpg"}
            alt={"blepharo"}
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
            src={"/blepharo2.jpg"}
            alt={"blepharo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
        <p className={css.textCard}>
          Наши услуги по блефаропластике включают:
          <ul className={css.list}>
            <li>
              Верхняя блефаропластика: Устранение избыточной кожи и жировых
              отложений на верхних веках для создания более молодого и открытого
              взгляда. Мы применяем современные методы, чтобы добиться
              естественного и долгосрочного результата.
            </li>
            <li>
              Нижняя блефаропластика: Коррекция мешков под глазами и избыточной
              кожи на нижних веках для улучшения контура глаз и уменьшения
              усталого вида. Мы стремимся вернуть коже упругость и свежесть.
            </li>
            <li>
              Комплексная блефаропластика: Одновременное исправление как
              верхних, так и нижних век для достижения гармоничного и
              сбалансированного результата. Мы работаем над созданием
              естественного и свежего внешнего вида глаз.
            </li>
          </ul>
          Обращайтесь к нам за профессиональной помощью!
        </p>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <h4 className={css.listHeader}>Почему стоит выбрать нас?</h4>В нашей
          клинике работают опытные хирурги, которые специализируются на
          пластике. Мы используем современные технологии и методики, чтобы
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
          Если вы хотите узнать больше о пластике или записаться на
          консультацию, свяжитесь с нами через наш сайт или по телефону. Наши
          специалисты с радостью ответят на все ваши вопросы и помогут вам
          сделать первый шаг к новой версии себя.
        </p>
        <PhotoCard
          header={"Фото до и после процедуры:"}
          images={images}
          href={"/articles"} // создать отдельный маршрут на статьи про глаза
          textBtn={"Больше фото"}
        />
      </div>

      <YouTubeVideo url={"https://www.youtube.com/embed/XXOc4R1Hj2Q"} />
      <CallBackSection
        className={css.blepharo}
        classNameInput={css.inputBlepharo}
      />
    </div>
  );
}
