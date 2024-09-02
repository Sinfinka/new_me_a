import { useState } from "react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import CallbackModal from "../CallbackModal/CallbackModal";
import Button from "../Button/Button";
import css from "./HeroSection.module.css";
import con from "../../styles/container.module.css";

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Форма відправлена з головної", values);
    setSubmitting(false);
    toast.success(t("form_success_message"));
    handleCloseModal();
  };

  return (
    <section className={css.heroSection}>
      <div className={`${con.container} ${css.wrapper}`}>
        <div className={css.content}>
          <h1 className={css.header}>
            <span className={css.headerBig}>{t("hero_section_title_big")}</span>
            <div className={css.headerWrapper}>
              <span className={css.headerSmall}>
                {t("hero_section_title_small_1")}
              </span>
              <span className={css.headerSmallSecond}>
                {t("hero_section_title_small_2")}
              </span>
            </div>
          </h1>
          <Button
            text={t("call_me_button")}
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
