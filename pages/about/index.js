import Head from "next/head";
import { CallBackSection } from "../../components/CallBackSection/CallBackSection";
import { fetchServices } from "../api/api";
import css from "./AboutPage.module.css";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AboutPage = ({ services }) => {
  const { t } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState(null);

  const desiredOrder = [
    t("bariatric_surgery"),
    t("plastic_surgery"),
    t("dentistry"),
    t("hair_transplant"),
    t("vision_correction"),
  ];

  const sortedServices = services.sort((a, b) => {
    return desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title);
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const breadcrumbs = [
    { label: t("nav_home"), href: "/" },
    { label: t("nav_about") },
  ];

  return (
    <div>
      <Head>
        <title>{t("about_page_title")}</title>
        <meta name="description" content={t("about_page_description")} />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={t("about_page_title")} />
        <meta property="og:description" content={t("about_page_description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/about" />
        <meta
          property="og:image"
          content="https://newmealanya.com/wp-content/uploads/about-us-image.jpg" // replace with current photo
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("about_page_title")} />
        <meta
          name="twitter:description"
          content={t("about_page_description")}
        />
        <meta
          name="twitter:image"
          content="https://newmealanya.com/wp-content/uploads/about-us-image.jpg" // replace with current photo
        />
        <meta name="twitter:site" content="@NewMeAlanya" />
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      {/* Hero block */}
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>{t("hero_title")}</h1>
          <p>{t("hero_subtitle")}</p>
        </div>
      </section>

      <div className={css.aboutContent}>
        <h1>{t("about_header")}</h1>
        <p>{t("about_paragraph_1")}</p>
        <p>{t("about_paragraph_2")}</p>
      </div>
      <section className={css.servicesSection}>
        <h2>{t("our_services")}</h2>
        <ul>
          {sortedServices.map((service, index) => (
            <li key={service.id} className={css.serviceItem}>
              <div
                className={css.serviceTitle}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{service.title}</h3>
              </div>
              {activeIndex === index && (
                <div className={css.serviceContent}>
                  <p>{service.description}</p>
                  {service.link && (
                    <Link
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      passHref
                    >
                      {t("more_details")}
                    </Link>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <CallBackSection />
    </div>
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

export default AboutPage;
