import React from "react";
import clsx from "clsx";
import css from "./CallMeBlock.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export function CallMeBlock({ isInSidebar, isInFooter, onClick }) {
  const { t } = useTranslation();

  const handleCallbackClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={clsx(css.callMe, {
        [css.inSidebar]: isInSidebar,
        [css.inFooter]: isInFooter,
      })}
    >
      <address className={css.address}>
        <a className={css.telLink} href={`tel:+${phoneNumber}`}>
          {`+${phoneNumber}`}
        </a>
      </address>
      <button type="button" className={css.btn} onClick={handleCallbackClick}>
        {t("call_me_block_callback_button")}
      </button>
      <p className={css.workTime}>{t("call_me_block_work_time")}</p>
      <LanguageSwitcher isInFooter={isInFooter} />
    </div>
  );
}
