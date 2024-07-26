import Head from "next/head";
import Link from "next/link";
import css from "./PromotionsPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import Image from "next/image";

export default function PromotionsPage() {
  const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Цены " }];
  return (
    <div>
      <Head>
        <title>Акции - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Узнайте о текущих акциях и специальных предложениях в NewMe Health Clinic. Получите выгодные условия на популярные медицинские процедуры."
        />
        {/* ЗМІНИТИ метатеги Open Graph и Twitter */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection additionalClass={css.promotionsMain} header={"Акции"} />
      <div className={css.promotionsContent}>
        <div className={css.upcomingPromotions}>
          <h2>Скоро здесь появятся актуальные акции и скидки!</h2>
          <p>
            Мы готовим для вас лучшие предложения на популярные медицинские
            процедуры. Следите за обновлениями!
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
              alt="Скоро здесь появятся акции"
              width={260}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
