import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import { TextCard } from "../../../../components/TextCard/TextCard";
import Image from "next/image";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";
import css from "./BreastPlasticSurgeryPage.module.css";

export default function BreastPlasticSurgeryPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Пластическая хирургия", href: "/services/plastic" },
    { label: "Маммопластика" },
  ];

  const images = [
    "/mammo4.jpg",
    "/mammo5.jpg",
    "/mammo6.jpg",
    "/mammo7.jpg",
    "/mammo8.jpg",
    // "/mammo9.jpg",
    // "/mammo10.jpg",
    // "/mammo11.jpg",
    // "/mammo12.jpg",
    // "/mammo13.jpg",
    // "/mammo14.jpg",
    // "/mammo15.jpg",
    // "/mammo16.jpg",
    // "/mammo17.jpg",
    // "/mammo18.jpg",
  ];

  return (
    <div>
      <Head>
        <title>Пластическая Хирургия груди - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Пластическая хирургия в NewMe Health Clinic предлагает широкий спектр процедур, включая мамопластику, узнайте больше о наших возможностях."
        />
        {/* <meta
          property="og:title"
          content="Пластическая Хирургия - NewMe Health Clinic"
        />
        <meta
          property="og:description"
          content="Пластическая хирургия в NewMe Health Clinic предлагает широкий спектр процедур, включая мамопластику, узнайте больше о наших возможностях."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://your-website-url/plastic-surgery"
        />
        <meta
          property="og:image"
          content="https://your-website-url/path-to-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Пластическая Хирургия - NewMe Health Clinic"
        />
        <meta
          name="twitter:description"
          content="Пластическая хирургия в NewMe Health Clinic предлагает широкий спектр процедур, включая ... ЗАМЕНИТЬ ... Узнайте больше о наших возможностях."
        />
        <meta
          name="twitter:image"
          content="https://your-website-url/path-to-image.jpg"
        /> */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.mammoplastyMain}
        header={"Маммопластика"}
        src={"/mammoMain.jpg"}
        alt={"Маммопластика"}
      />

      <section className={css.wrapper}>
        <TextCard
          header="Маммопластика"
          text="

          Для многих женщин форма и размер груди могут стать источником беспокойства и неудовлетворенности. Нередко это приводит к снижению самооценки, постоянным переживаниям и даже депрессии, что негативно сказывается на качестве жизни. Непропорциональная или асимметричная грудь может стать причиной неудобств как в физическом, так и в эмоциональном плане.

          В NewMe Health Clinic мы предлагаем решение этой проблемы с помощью маммопластики. Наши опытные специалисты помогут вам изменить форму и размер груди, чтобы вы чувствовали себя уверенно и комфортно в своем теле. Маммопластика позволяет скорректировать различные дефекты, увеличить или уменьшить грудь, а также сделать подтяжку, возвращая груди желаемую форму и объем.
          
          Мы предоставляем индивидуальный подход к каждому пациенту, учитывая все ваши пожелания и особенности. Наши врачи проводят тщательную консультацию, объясняя все этапы операции, возможные риски и ожидаемые результаты. С нашей поддержкой и профессиональным уходом на всех этапах – от подготовки до полного восстановления – вы сможете обрести гармонию и уверенность в себе, решив проблемы, которые беспокоили вас долгие годы."
        />
        <div className={css.imageWrapper}>
          <Image
            src={"/mammo1.jpg"}
            alt={"mammo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </section>

      <section className={css.wrapper}>
        <p className={css.textCard}>
          Если форма и размер вашей груди вызывают дискомфорт и влияют на вашу
          уверенность, маммопластика может стать простым и эффективным решением
          этой проблемы. Эта несложная операция не требует длительного
          восстановления и позволяет исправить недостатки, улучшая внешний вид и
          общее самочувствие. Процесс начинается с консультации с нашим
          пластическим хирургом, который обсудит ваши пожелания и предложит
          оптимальные варианты. За несколько дней до маммопластики следует
          избегать препаратов, влияющих на свертываемость крови, и отказаться от
          вредных привычек. Операция проходит под общим наркозом и занимает от
          одного до нескольких часов в зависимости от сложности. Врач выполняет
          необходимые манипуляции, будь то увеличение, уменьшение или подтяжка
          груди, для достижения желаемого результата. Разрезы делаются так,
          чтобы минимизировать видимость шрамов. После операции возможны отеки и
          незначительная боль, но эти симптомы проходят быстро. Для
          восстановления потребуется несколько недель, в течение которых важно
          следовать рекомендациям врача, носить поддерживающее белье и избегать
          физических нагрузок. Не стоит бояться процедуры: маммопластика —
          безопасное и эффективное решение, которое устранит проблему и вернет
          уверенность. В NewMe Health Clinic мы обеспечим индивидуальный подход
          и поддержку на всех этапах, помогая достичь наилучших результатов.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/mammo3.jpg"}
            alt={"mammo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </section>

      <section className={css.wrapper}>
        <div className={css.imageWrapper}>
          <Image
            src={"/mammo2.jpg"}
            alt={"mammo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
        <p className={css.textCard}>
          Наши услуги по маммопластике включают:
          <ul className={css.list}>
            <li>
              Увеличение груди: Повышение объема груди с использованием
              имплантатов. Мы учитываем ваши пожелания и особенности тела, чтобы
              создать естественный и красивый результат.
            </li>
            <li>
              Уменьшение груди: Уменьшение размера груди для улучшения пропорций
              тела и устранения физического дискомфорта.
            </li>
            <li>
              Подтяжка груди: Коррекция формы и устранение провисания груди для
              придания ей более молодого и подтянутого вида.
            </li>
            <li>
              Маммопластика после травм: Восстановление формы и функции груди
              после травм и операций.
            </li>
          </ul>
          Обращайтесь к нам за квалифицированной помощью!
        </p>
      </section>

      <section className={css.wrapper}>
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
          href={"/articles"}
          textBtn={"Больше фото"}
        />
      </section>

      <YouTubeVideo url={"https://www.youtube.com/embed/z6FjqTW0AZY"} />
      <CallBackSection className={css.mammo} classNameInput={css.inputMammo} />
    </div>
  );
}
