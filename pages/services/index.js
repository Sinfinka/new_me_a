import Head from "next/head";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./ServicesPage.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { CallBackSection } from "../../components/CallBackSection/CallBackSection.jsx";
import { AchivSection } from "../../components/AchivSection/AchivSection.jsx";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent.jsx";
import { fetchServices } from "../api/api.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ServicesPage = ({ services }) => {
  const { t } = useTranslation("common");

  const breadcrumbs = [
    { label: t("home"), href: "/" },
    { label: t("breadcrumbs_services") },
  ];

  return (
    <>
      <Head>
        <title>{t("services_page_title")}</title>
        <meta name="description" content={t("services_page_description")} />
        {/* метатеги Open Graph */}
        <meta property="og:title" content={t("services_page_title")} />
        <meta
          property="og:description"
          content={t("services_page_description")}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/services" />
        <meta
          property="og:image"
          content="https://newmealanya.com/wp-content/uploads/breast-surgery-before-after.jpg" // заменить на актуальное фото
        />

        {/* метатеги Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("services_page_title")} />
        <meta
          name="twitter:description"
          content={t("services_page_description")}
        />
        <meta
          name="twitter:image"
          content="https://newmealanya.com/wp-content/uploads/breast-surgery-before-after.jpg"
        />
        <meta name="twitter:site" content="@NewMeAlanya" />
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.servicesMain}
        header={t("services")}
      />
      <AchivSection />

      <section className={css.serviceCard}>
        {services.map((service, index) => (
          <ServiceCard
            link={service.link}
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            details={service.details}
            links={service.links}
            afterWords={service.afterWords}
          />
        ))}
      </section>

      <CallBackSection />
    </>
  );
};

export async function getStaticProps({ locale }) {
  try {
    const services = await fetchServices();
    return {
      props: {
        services,
        ...(await serverSideTranslations(locale, ["common"])),
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        services: [],
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }
}

export default ServicesPage;
