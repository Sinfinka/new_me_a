import Head from "next/head";
import Link from "next/link";
import css from "./ArticlesPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import Image from "next/image";

export default function ArticlesPage() {
  const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Статьи" }];

  return (
    <div>
      <Head>
        <title>Статьи - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Читайте наши статьи и новости, чтобы быть в курсе последних тенденций и советов по здоровью от NewMe Health Clinic."
        />
        {/* ЗМІНИТИ метатеги Open Graph и Twitter */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection additionalClass={css.articlesMain} header={"Статьи"} />
      <div className={css.articlesContent}>
        <div className={css.upcomingArticles}>
          <h2>Скоро здесь появятся интересные статьи!</h2>
          <p>
            Мы готовим для вас полезные материалы и новости о здоровье и
            медицинских процедурах. Следите за обновлениями!
          </p>
          <p>
            Пока вы ждете, посетите наш раздел{" "}
            <Link href="/services" passHref>
              услуг
            </Link>
            , чтобы узнать больше о наших предложениях.
          </p>
          <div className={css.imagePlaceholder}>
            <Image
              className={css.image}
              src="/soon.jpg"
              alt="Скоро появятся статьи"
              width={260}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
