import Head from "next/head";
import BreadcrumbsComponent from "../../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../../components/PageMainSection/PageMainSection";
import css from "./SleeveGastrectomyPage.module.css";
import { CallBackSection } from "../../../../components/CallBackSection/CallBackSection";
import YouTubeVideo from "../../../../components/YouTubeVideo/YouTubeVideo";
import { PhotoCard } from "../../../../components/PhotoCard/PhotoCard";
import Image from "next/image";
import { TextCard } from "../../../../components/TextCard/TextCard";

export default function SleeveGastrectomyPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Бариатрическая хирургия", href: "/services/bariatric" },
    { label: "Рукавная резекция желудка" },
  ];
  const images = ["/sleeve4.jpg", "/sleeve3.jpg", "/sleeve5.jpg"];
  return (
    <div>
      <Head>
        <title>Рукавная резекция желудка</title>
        <meta name="description" content="Рукавная резекция желудка" />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.rhinoplastyMain}
        header={"Резекция желудка"}
        src={"/gastricMain.jpg"}
        alt={"Резекция желудка"}
      />

      <div className={css.wrapper}>
        <TextCard
          header="Рукавная Резекция Желудка: Эффективный Метод Похудения"
          text='Рукавная резекция желудка, также известная как вертикальная гастрэктомия, является одной из самых популярных и эффективных хирургических процедур для лечения ожирения. Эта операция заключается в удалении значительной части желудка, что помогает пациентам уменьшить количество потребляемой пищи и, соответственно, похудеть. Процедура имеет многочисленные преимущества, благодаря которым её выбирают многие пациенты, стремящиеся к долгосрочному контролю веса и улучшению качества жизни.


Рукавная резекция желудка – это хирургическая процедура, при которой удаляется около 75-80% желудка, в результате чего остается узкая трубка или "рукав". Это уменьшает объем желудка, благодаря чему пациенты быстрее насыщаются меньшими порциями пищи. Кроме того, удаление части желудка снижает уровень гормона грелина, который отвечает за чувство голода, что помогает уменьшить аппетит.'
        />
        <div className={css.imageWrapper}>
          <Image
            src={"/sleeve1.jpg"}
            alt={"abdomino"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          Эта процедура рекомендуется пациентам с индексом массы тела (ИМТ) 40 и
          выше, или с ИМТ 35 и выше при наличии сопутствующих заболеваний,
          связанных с ожирением, таких как диабет 2-го типа. <br /> Перед
          операцией проводится тщательное медицинское обследование, включающее
          анализы крови, ЭКГ и эндоскопию, чтобы убедиться в отсутствии
          противопоказаний. Пациент также получает полное консультирование с
          хирургом и диетологом о подготовке к операции, ее ходе и
          реабилитационном периоде. <br /> Операция проводится под общей
          анестезией. Через несколько небольших разрезов в брюшной полости
          вводятся лапароскоп и хирургические инструменты. Хирург удаляет часть
          желудка. После удаления разрезы закрываются. Пациент остается под
          наблюдением в больнице несколько дней. В постоперационный период
          пациент придерживается строгой диеты, начиная с жидких продуктов и
          постепенно переходя к нормальному питанию. <br /> <br /> Процедура
          снижает объем желудка, ограничивая количество потребляемой пищи и
          уменьшая чувство голода за счет снижения уровня гормона грелина. Это
          способствует значительному снижению веса и улучшению сопутствующих
          заболеваний, таких как диабет 2-го типа, гипертония и другие
          состояния, связанные с ожирением.
        </p>
        <div className={css.imageWrapper}>
          <Image
            src={"/sleeve2.jpg"}
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
            src={"/sleeve2.jpg"}
            alt={"lipo"}
            className={css.image}
            layout="responsive"
            width={696}
            height={494}
          />
        </div>
        <p className={css.textCard}>
          Преимущества Рукавной Резекции Желудка:
          <ul className={css.list}>
            <li>
              <strong>Значительная Потеря Веса:</strong> Пациенты могут ожидать
              значительную потерю веса в течение года после операции. В среднем,
              они теряют около 50-70% избыточного веса.
            </li>
            <li>
              <strong>Улучшение Сопутствующих Заболеваний:</strong> Рукавная
              резекция желудка способствует улучшению или даже полному
              исчезновению таких заболеваний, как диабет 2 типа, гипертония,
              апноэ сна и другие состояния, связанные с ожирением.
            </li>

            <li>
              <strong>Отсутствие Малабсорбции:</strong> Эта процедура не влияет
              на всасывание питательных веществ в кишечнике, что уменьшает риск
              дефицита витаминов и минералов.
            </li>
            <li>
              <strong>Быстрое Восстановление:</strong> Обычно пациенты проводят
              в больнице 2-3 дня и могут вернуться к обычной деятельности через
              2-4 недели после операции.
            </li>
          </ul>
          Обращайтесь к нам за профессиональной помощью и начните свой путь к
          здоровому и счастливому будущему уже сегодня!
        </p>
      </div>
      <div className={css.wrapper}>
        <p className={css.textCard}>
          <h4 className={css.listHeader}>Почему стоит выбрать нас?</h4>В нашей
          клинике работают опытные хирурги, которые специализируются на
          похудении. Мы используем современные технологии и методики, чтобы
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
          href={"/articles"} // зробити окремий маршрут на статті про носи
          textBtn={"Больше фото"}
        />
      </div>
      <YouTubeVideo url={"https://www.youtube.com/embed/TKUrrY4xY0s"} />
      <CallBackSection
        className={css.sleeve}
        classNameInput={css.inputSleeve}
      />
    </div>
  );
}
