import Head from "next/head";
import Link from "next/link";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./ServicesPage.module.css";
import { services } from "../../db/services.js";

import ServiceCard from "../../components/ServiceCard/ServiceCard";

const ServicesPage = () => {
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

      <PageMainSection additionalClass={css.servicesMain} header={"Услуги"} />

      <section className={css.serviceCard}>
        {services.map((service, index) => (
          <ServiceCard
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

      <h2>Бариатрия</h2>
      <p>
        Мы специализируемся на бариатрической хирургии, которая помогает
        пациентам достигать здоровья через потерю веса.
      </p>

      <h2>Стоматология</h2>
      <p>
        Наши стоматологи предлагают разнообразные стоматологические процедуры и
        лечения.
      </p>

      <Link href={"/services/hair-transplant"}>Пересадка волос</Link>

      <p>
        Мы предоставляем услуги по пересадке волос, помогая вам восстановить и
        улучшить вашу волосистость.
      </p>

      <h2>Коррекция зрения</h2>
      <p>
        Наши специалисты по коррекции зрения предлагают передовые технологии и
        процедуры, чтобы улучшить ваше зрительное здоровье.
      </p>
    </>
  );
};

export default ServicesPage;
