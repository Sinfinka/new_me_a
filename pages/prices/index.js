import { fetchPrices } from "../api/api.js";
import Head from "next/head";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./PricesPage.module.css";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import PricesTable from "../../components/PricesTable/PricesTable.jsx";
import { TextCard } from "../../components/TextCard/TextCard.jsx";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PricesPage({ prices }) {
  const { t } = useTranslation("common");

  const breadcrumbs = [
    { label: t("nav_home"), href: "/" },
    { label: t("nav_prices") },
  ];

  const categories = [
    { key: "plasticSurgery", title: t("prices_page_category_plasticSurgery") },
    {
      key: "bariatricSurgery",
      title: t("prices_page_category_bariatricSurgery"),
    },
    { key: "dentistry", title: t("prices_page_category_dentistry") },
    {
      key: "visionCorrection",
      title: t("prices_page_category_visionCorrection"),
    },
    { key: "hairTransplant", title: t("prices_page_category_hairTransplant") },
  ];

  return (
    <div>
      <Head>
        <title>{t("prices_page_title")}</title>
        <meta name="description" content={t("prices_page_description")} />
        {/* Open Graph */}
        <meta property="og:title" content={t("prices_page_title")} />
        <meta
          property="og:description"
          content={t("prices_page_description")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/prices" />
        <meta
          property="og:image"
          content="https://newmealanya.com/path-to-image.jpg"
        />{" "}
        {/* Замените на актуальное фото */}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("prices_page_title")} />
        <meta
          name="twitter:description"
          content={t("prices_page_description")}
        />
        <meta
          name="twitter:image"
          content="https://newmealanya.com/path-to-image.jpg"
        />{" "}
        {/* Замените на актуальное фото */}
        <meta name="twitter:site" content="@NewMeAlanya" />
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.pricesMain}
        header={t("nav_prices")}
      />

      <div className={css.textCardWrapper}>
        <TextCard
          header={t("prices_page_important_info_header")}
          text={t("prices_page_important_info_text")}
        />
      </div>

      <PricesTable categories={categories} prices={prices} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  try {
    const prices = await fetchPrices();
    return {
      props: {
        prices,
        ...(await serverSideTranslations(locale, ["common"])),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        prices: [],
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}
