import Head from "next/head";
import css from "./VisionCorrectionPage.module.css";
import Link from "next/link";
import Image from "next/image";
import { CallBackSection } from "../../../components/CallBackSection/CallBackSection";
import { PageMainSection } from "../../../components/PageMainSection/PageMainSection";
import BreadcrumbsComponent from "../../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { services } from "../../../db/services.js";

export default function VisionCorrectionPage() {
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Услуги", href: "/services" },
    { label: "Коррекция зрения" },
  ];

  const stomatologyServices = services.filter(
    (service) => service.title === "Коррекция зрения"
  );

  return (
    <div>
      <Head>
        <title>Коррекция зрения - NewMe Health Clinic</title>
        <meta
          name="description"
          content="Узнайте о передовых технологиях и процедурах коррекции зрения в NewMe Health Clinic. Наши специалисты помогут улучшить ваше зрение."
        />
        {/* ЗМІНИТИ Open Graph и Twitter */}
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />

      <PageMainSection
        additionalClass={css.plasticMain}
        header={"Коррекция зрения"}
        src={"/dentalMain.jpg"}
        alt={"Коррекция зрения"}
      />
      <div className={css.servicesContainer}>
        <h1 className={css.mainHeader}>
          New Me Health Clinic предоставляет услуги:
        </h1>
        {stomatologyServices.map((service, index) => (
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
