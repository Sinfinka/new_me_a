import Head from "next/head";
import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../components/PageMainSection/PageMainSection";
import css from "./PlasticSurgeryPge.module.css";
import Link from "next/link";
import Image from "next/image";
import { services } from "../../../db/services.js";
import { CallBackSection } from "../../../components/CallBackSection/CallBackSection.jsx";

export default function PlasticSurgeryPge() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Пластическая Хирургия" },
  ];

  const plasticSurgeryServices = services.filter(
    (service) => service.title === "Пластическая хирургия"
  );

  return (
    <div>
      <Head>
        <title>Пластическая Хирургия - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Пластическая хирургия в NewMe Health Clinic предлагает широкий спектр процедур, включая ЗМІНИТИ. Узнайте больше о наших возможностях."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection
        additionalClass={css.plasticMain}
        header={"Пластическая хирургия"}
        src={"/plasticMain.jpg"}
        alt={"Пластическая хирургия"}
      />

      <div className={css.servicesContainer}>
        <h1 className={css.mainHeader}>
          New Me Health Clinic предоставляет услуги:
        </h1>
        {plasticSurgeryServices.map((service, index) => (
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
