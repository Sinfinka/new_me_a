import Head from "next/head";
import Link from "next/link";
import { PageMainSection } from "../../components/PageMainSection/PageMainSection";
import css from "./ServicesPage.module.css";

import ServiceSection from "../../components/ServiceSection/ServiceSection";

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
      <ServiceSection
        serviceName={"Пластическая хирургия"}
        serviceText={
          "Наша клиника предлагает широкий спектр пластических хирургических вмешательств..........."
        }
      />
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
