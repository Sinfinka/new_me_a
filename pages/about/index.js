import Head from "next/head";
import { CallBackSection } from "../../components/CallBackSection/CallBackSection";
import { fetchServices } from "../api/api";
import css from "./AboutPage.module.css";
import BreadcrumbsComponent from "../../components/BreadcrumbsComponent/BreadcrumbsComponent";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const AboutPage = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Бажаний порядок
  const desiredOrder = [
    "Бариатрическая хирургия",
    "Пластическая хирургия",
    "Стоматология",
    "Пересадка волос",
    "Коррекция зрения",
  ];

  const sortedServices = services.sort((a, b) => {
    return desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title);
  });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "О нас" }];

  return (
    <div>
      <Head>
        <title>О нас - NewMe Health Clinic</title>
        <meta
          name="description"
          content="NewMe Health Clinic предлагает высококачественные медицинские услуги в сотрудничестве с ведущими больницами и клиниками. Узнайте больше о наших услугах и нашей команде."
        />
        {/* метатеги Open Graph */}
        <meta property="og:title" content="О нас - NewMe Health Clinic" />
        <meta
          property="og:description"
          content="NewMe Health Clinic предлагает высококачественные медицинские услуги в сотрудничестве с ведущими больницами и клиниками. Узнайте больше о наших услугах и нашей команде."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/about" />
        <meta
          property="og:image"
          content="https://newmealanya.com/wp-content/uploads/about-us-image.jpg" // змініть на актуальне фото
        />

        {/* метатеги Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="О нас - NewMe Health Clinic" />
        <meta
          name="twitter:description"
          content="NewMe Health Clinic предлагает высококачественные медицинские услуги в сотрудничестве с ведущими больницами и клиниками. Узнайте больше о наших услугах и нашей команде."
        />
        <meta
          name="twitter:image"
          content="https://newmealanya.com/wp-content/uploads/about-us-image.jpg" // змініть на актуальне фото
        />
        <meta name="twitter:site" content="@NewMeAlanya" />
      </Head>
      <BreadcrumbsComponent paths={breadcrumbs} />
      {/* Герой-блок */}
      <section className={css.heroSection}>
        <div className={css.heroContent}>
          <h1>Добро пожаловать в NewMe Health Clinic</h1>
          <p>Ваш путь к здоровью начинается здесь</p>
        </div>
      </section>

      <div className={css.aboutContent}>
        <h1>О нас</h1>
        <p>
          В NewMe Health Clinic мы стремимся предоставлять высококачественные
          медицинские услуги. Наша команда опытных профессионалов гарантирует
          вам высочайший уровень обслуживания. Мы тесно сотрудничаем с ведущими
          больницами, клиниками и оздоровительными центрами, чтобы предоставить
          широкий спектр медицинских процедур и услуг — от плановых осмотров до
          сложных операций. Наше внимание к вашему медицинскому путешествию не
          ограничивается медицинскими процедурами — мы организуем вашу поездку,
          обеспечим комфортное проживание и услуги переводчика.
        </p>
        <p>
          Наша главная цель — сделать ваше медицинское обслуживание максимально
          комфортным и приятным. Независимо от того, нужна вам медицинская
          консультация или полный план лечения, мы будем рядом с вами на каждом
          этапе, чтобы обеспечить ваше полное удовлетворение. Свяжитесь с нами
          уже сегодня, чтобы узнать больше о наших услугах и том, как мы можем
          помочь вам.
        </p>
      </div>
      <section className={css.servicesSection}>
        <h2>Наши услуги</h2>
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
                      Подробнее...
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

export async function getStaticProps() {
  try {
    const services = await fetchServices();
    return {
      props: {
        services,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        services: [],
      },
    };
  }
}

export default AboutPage;
