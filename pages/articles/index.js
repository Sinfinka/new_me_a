import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Link from "next/link";
import css from "./ArticlesPage.module.css";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ArticlesPage() {
  const { i18n, t } = useTranslation("common");

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translations = await fetch(
          `/locales/${i18n.language}/common.json`
        ).then((res) => res.json());
        i18n.addResourceBundle(i18n.language, "common", translations);
      } catch (error) {
        console.error("Failed to load translations", error);
      }
    };

    loadTranslations();
  }, [i18n]);

  const breadcrumbs = [
    { label: t("home"), href: "/" },
    { label: t("articles") },
  ];

  return (
    <div>
      <Head>
        <title>{t("articles_title")} - NewMe Health Clinic</title>
        <meta name="description" content={t("description")} />
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.articlesMain}
        header={t("articles")}
      />
      <div className={css.articlesContent}>
        <div className={css.upcomingArticles}>
          <h2>{t("soon_message")}</h2>
          <p>
            {t("wait_message")}
            <Link href="/services" passHref>
              {t("services_link")}{" "}
            </Link>
            {t("update_message")}{" "}
          </p>
          <div className={css.imagePlaceholder}>
            <Image
              className={css.image}
              src="/soon.jpg"
              alt={t("soon_image_alt")}
              width={260}
              height={460}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const translations = await import(
    `../../public/locales/${locale}/common.json`
  );

  return {
    props: {
      // Передаем данные как JSON
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
