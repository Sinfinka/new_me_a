import React from "react";
import clsx from "clsx";
import css from "./CallMeBlock.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export function CallMeBlock({ isInSidebar, onClick }) {
  const handleCallbackClick = () => {
    if (onClick) {
      onClick(); // Викликати передану функцію обробника події onClick
    }
  };

  return (
    <div className={clsx(css.callMe, { [css.inSidebar]: isInSidebar })}>
      <address className={css.address}>
        <a className={css.telLink} href="tel:+905303069524">
          +905303069524
        </a>
      </address>
      <button type="button" className={css.btn} onClick={handleCallbackClick}>
        Обратный звонок
      </button>
      <p className={css.workTime}>ПН-ПТ: 10-19</p>
      <LanguageSwitcher />
    </div>
  );
}
