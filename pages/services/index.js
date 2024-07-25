import Head from "next/head";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./ServicesPage.module.css";
import { services } from "../../db/services.js";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { CallBackSection } from "../../components/CallBackSection/CallBackSection.jsx";
import { AchivSection } from "../../components/AchivSection/AchivSection.jsx";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent.jsx";

const ServicesPage = () => {
  const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Услуги" }];
  return (
    <>
      <Head>
        <title>Услуги - Клиника NewMe </title>
        <meta
          name="description"
          content="Клиника NewMe Health предлагает широкий спектр медицинских услуг в области пластической хирургии, бариатрии, стоматологии, пересадки волос и коррекции зрения. Узнайте больше о наших услугах."
        />
        {/* метатеги Open Graph */}
        <meta property="og:title" content="Услуги - Клиника NewMe" />
        <meta
          property="og:description"
          content="Клиника NewMe Health предлагает широкий спектр медицинских услуг в области пластической хирургии, бариатрии, стоматологии, пересадки волос и коррекции зрения. Узнайте больше о наших услугах."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/services" />
        <meta
          property="og:image"
          content="https://newmealanya.com/wp-content/uploads/breast-surgery-before-after.jpg" // змінити на актуальне фото
        />

        {/* метатеги Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Услуги - Клиника NewMe" />
        <meta
          name="twitter:description"
          content="Клиника NewMe Health предлагает широкий спектр медицинских услуг в области пластической хирургии, бариатрии, стоматологии, пересадки волос и коррекции зрения. Узнайте больше о наших услугах."
        />
        <meta
          name="twitter:image"
          content="https://newmealanya.com/wp-content/uploads/breast-surgery-before-after.jpg"
        />
        <meta name="twitter:site" content="@NewMeAlanya" />
      </Head>

      <BreadcrumbsComponent paths={breadcrumbs} />
      <PageMainSection additionalClass={css.servicesMain} header={"Услуги"} />
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

export default ServicesPage;
