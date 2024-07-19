import Head from "next/head";
import Link from "next/link";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./ServicesPage.module.css";
import { services } from "../../db/services.js";

import ServiceCard from "../../components/ServiceCard/ServiceCard";

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Услуги - Клиника NewMe </title>
        <meta
          name="description"
          content="Клиника NewMe Health предлагает широкий спектр медицинских услуг в области пластической хирургии, бариатрии, стоматологии, пересадки волос и коррекции зрения. Узнайте больше о наших услугах."
        />
        {/* ЗМІНИТИ метатеги Open Graph и Twitter */}
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

      {/* <h1 className={css.header}>Услуги</h1> */}

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
    </div>
  );
};

export default ServicesPage;
