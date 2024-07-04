import Head from "next/head";
import Button from "../components/Button/Button";
import css from "./HomePage.module.css";
import con from "../styles/container.module.css";
import Image from "next/image";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <section className={css.hero}>
      <Head>
        <title>Медицинская клиника New Me | Главная страница</title>
        <meta
          name="title"
          content="Медицинская клиника New Me - Пластическая хирургия, Бариатрия, Стоматология, Пересадка волос и коррекция зрения"
        />
        <meta
          name="description"
          content="Добро пожаловать в медицинскую клинику New Me! Мы специализируемся на пластической хирургии, бариатрической хирургии, стоматологии, пересадке волос и коррекции зрения. Наши специалисты обеспечат вам наивысший уровень медицинского обслуживания."
        />
        <meta
          name="keywords"
          content="медицинская клиника, пластическая хирургия, бариатрия, стоматология, пересадка волос, коррекция зрения, New Me"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://newmealanya.com/" />
        <meta
          property="og:title"
          content="Медицинская клиника New Me | Пластическая хирургия, Бариатрия, Стоматология, Пересадка волос и коррекция зрения"
        />
        <meta
          property="og:description"
          content="Добро пожаловать в медицинскую клинику New Me! Мы специализируемся на пластической хирургии, бариатрической хирургии, стоматологии, пересадке волос и коррекции зрения. Наши специалисты обеспечат вам наивысший уровень медицинского обслуживания."
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg" // ЗМІНИТИ
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://newmealanya.com/" />
        <meta
          property="twitter:title"
          content="Медицинская клиника New Me | Пластическая хирургия, Бариатрия, Стоматология, Пересадка волос и коррекция зрения"
        />
        <meta
          property="twitter:description"
          content="Добро пожаловать в медицинскую клинику New Me! Мы специализируемся на пластической хирургии, бариатрической хирургии, стоматологии, пересадке волос и коррекции зрения. Наши специалисты обеспечат вам наивысший уровень медицинского обслуживания."
        />
        <meta
          property="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg" // ЗМІНИТИ
        />
      </Head>
      <div className={`${con.container} ${css.wrapper}`}>
        <div className={css.content}>
          <h1 className={css.header}>
            <span className={css.headerBig}>Ваше здоровье</span>{" "}
            <span className={css.headerSmall}>в надежных руках</span>
          </h1>
          <Button
            text="Позвоните мне"
            onClick={handleButtonClick}
            className={css.button}
          />
        </div>
        <div className={css.imageContainer}>
          <Image
            src="/DrManiHabibi.png"
            alt="Dr Mani Habibi"
            width={272}
            height={176}
          />
        </div>
      </div>
    </section>
  );
}
