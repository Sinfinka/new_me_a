import Head from "next/head";
import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { PageMainSection } from "../../../components/PageMainSection/PageMainSection";
import css from "./BariatricsPage.module.css";
import { services } from "../../../db/services.js";
import { CallBackSection } from "../../../components/CallBackSection/CallBackSection.jsx";
import Image from "next/image";
import Link from "next/link.js";

export default function BariatricsPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Бариатрическая хирургия" },
  ];

  const bariatricSurgeryServices = services.filter(
    (service) => service.title === "Бариатрическая хирургия"
  );

  return (
    <div>
      <Head>
        <title>Бариатрия - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Бариатрическая хирургия в NewMe Health Clinic помогает пациентам достигать здоровья через потерю веса. Узнайте больше о наших услугах и как мы можем помочь вам."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.plasticMain}
        header={"Бариатрическая хирургия"}
        src={"/plasticMain.jpg"}
        alt={"Бариатрическая хирургия"}
      />
      <div className={css.servicesContainer}>
        <h1 className={css.mainHeader}>
          New Me Health Clinic предоставляет услуги:
        </h1>
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
