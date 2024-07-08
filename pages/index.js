import Head from "next/head";
import Button from "../components/Button/Button";
import css from "./HomePage.module.css";
import con from "../styles/container.module.css";
import Image from "next/image";
import CallbackModal from "../components/CallbackModal/CallbackModal";
import { useState } from "react";
import { AchivSection } from "../components/AchivSection/AchivSection";
import { Services } from "../components/Services/Services";
import { ToastContainer, toast } from "react-toastify";
import FloatingButton from "../components/FloatingButton/FloatingButton";
import { CallBackSection } from "../components/CallBackSection/CallBackSection";
import { QuestionsSection } from "../components/QuestionsSection/QuestionsSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Форма відправлена з головної", values);
    setSubmitting(false);
    toast.success("Сообщение отправлено. Вам позвонит консультант.");
    handleCloseModal();
  };

  return (
    <>
      <section className={css.hero}>
        <ToastContainer position="top-right" autoClose={3000} />
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
            <CallbackModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              onSubmit={handleSubmit}
            />
          </div>
          <div className={css.imageContainer}>
            <Image
              src="/DrManiHabibi.png"
              alt="Dr Mani Habibi"
              width={700}
              height={600}
            />
          </div>
        </div>
        <FloatingButton />
      </section>
      <AchivSection />
      <Services />
      <CallBackSection />
      <QuestionsSection />
    </>
  );
}
