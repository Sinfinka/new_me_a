import Head from "next/head";
import Button from "../components/Button/Button";
import css from "./HomePage.module.css";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
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

      <h1>Главная</h1>
      <Button text="Позвоните мне" onClick={handleButtonClick} />
    </div>
  );
}
