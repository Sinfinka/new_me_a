import { fetchPrices } from "../api/api.js";
import Head from "next/head";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./PricesPage.module.css";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import PricesTable from "../../components/PricesTable/PricesTable.jsx";

export default function PricesPage({ prices }) {
  const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Цены " }];

  const categories = [
    { key: "plasticSurgery", title: "Пластическая хирургия" },
    { key: "bariatricSurgery", title: "Бариатрическая хирургия" },
    { key: "dentistry", title: "Стоматология" },
    { key: "visionCorrection", title: "Коррекция зрения" },
    { key: "hairTransplant", title: "Трансплантация волос" },
  ];
  return (
    <div>
      <Head>
        <title>Цены - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Ознакомьтесь с ценами на медицинские услуги в NewMe Health Clinic. Мы предлагаем прозрачные и конкурентоспособные тарифы для различных процедур."
        />
        {/* ЗМІНИТИ  метатеги Open Graph и Twitter  */}
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection additionalClass={css.pricesMain} header={"Цены"} />
      <PricesTable categories={categories} prices={prices} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const prices = await fetchPrices();

    return {
      props: {
        prices,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        prices: [],
      },
    };
  }
}
