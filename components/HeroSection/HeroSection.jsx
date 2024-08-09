import Head from "next/head";
import { useState } from "react";
import { toast } from "react-toastify";
import CallbackModal from "../CallbackModal/CallbackModal";
import Button from "../Button/Button";
import css from "./HeroSection.module.css";
import con from "../../styles/container.module.css";

export const HeroSection = () => {
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
    <section className={css.heroSection}>
      <div className={`${con.container} ${css.wrapper}`}>
        <div className={css.content}>
          <h1 className={css.header}>
            <span className={css.headerBig}>Ваше здоровье</span>
            <div className={css.headerWrapper}>
              <span className={css.headerSmall}>в надежных </span>
              <span className={css.headerSmallSecond}> руках</span>
            </div>
          </h1>
          <Button
            text="Позвоните мне"
            onClick={handleButtonClick}
            className={css.HeroButton}
          />
          <CallbackModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};
