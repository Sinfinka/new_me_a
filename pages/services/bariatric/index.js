import Head from "next/head";
import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../components/PageMainSection/PageMainSection";
import css from "./BariatricsPage.module.css";
import { services } from "../../../db/services.js";
import { CallBackSection } from "../../../components/CallBackSection/CallBackSection.jsx";
import Image from "next/image";
import Link from "next/link.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function BariatricsPage() {
  const { t } = useTranslation("common");

  const breadcrumbs = [
    { label: t("home"), href: "/" },
    { label: t("breadcrumbs_services"), href: "/services" },
    { label: t("bariatric_surgery") },
  ];

  const bariatricSurgeryServices = services.filter(
    (service) => service.title === "Бариатрическая хирургия"
  );

  return (
    <div>
      <Head>
        <title>{t("bariatric_surgery")}</title>
        <meta name="description" content={t("bariatrics_page_description")} />
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.plasticMain}
        header={t("bariatric_surgery")}
        src={"/plasticMain.jpg"}
        alt={t("bariatrics_page_title")}
      />

      <div className={css.servicesContainer}>
        <h1 className={css.mainHeader}>{t("bariatrics_services_intro")}</h1>
        {bariatricSurgeryServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <CallBackSection
        className={css.plastic}
        classNameInput={css.inputPlastic}
      />
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <div className={css.serviceSection}>
      <div className={css.serviceHeader}>
        <Image
          src={service.image}
          alt={service.title}
          className={css.serviceImage}
          layout="responsive"
          width={300}
          height={200}
        />
        <h2>{service.title}</h2>
      </div>
      <p className={css.text}>{service.details}</p>
      <div className={css.linksList}>
        {service.links.map((link, linkIndex) => (
          <LinkCard key={linkIndex} link={link} />
        ))}
      </div>
      <p className={css.text}>{service.afterWords}</p>
    </div>
  );
}

function LinkCard({ link }) {
  return (
    <div className={css.linkCard}>
      <Link className={css.serviceLink} href={link.href} passHref>
        <Image
          src={link.src}
          alt={link.alt}
          className={css.linkImage}
          layout="responsive"
          width={150}
          height={100}
        />
        <div className={css.linkInfo}>
          <h3 className={css.linkTitle}>{link.title}</h3>
          <p className={css.linkDescription}>{link.description}</p>
        </div>
      </Link>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
