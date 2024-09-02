import { AchivSection } from "../components/AchivSection/AchivSection";
import { Services } from "../components/Services/Services";
import { CallBackSection } from "../components/CallBackSection/CallBackSection";
import { QuestionsSection } from "../components/QuestionsSection/QuestionsSection";
import { AboutClinicSection } from "../components/AboutClinicSection/AboutClinicSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  return (
    <>
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
      <HeroSection />
      <AchivSection />
      <Services />
      <CallBackSection />
      <QuestionsSection />
      <AboutClinicSection />
    </>
  );
}
