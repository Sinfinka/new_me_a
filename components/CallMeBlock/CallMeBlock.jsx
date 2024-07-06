import React from "react";
import clsx from "clsx";
import css from "./CallMeBlock.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

export function CallMeBlock({ isInSidebar, isInFooter, onClick }) {
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
        Обратный звонок
      </button>
      <p className={css.workTime}>ПН-ПТ: 10-19</p>
      <LanguageSwitcher isInFooter={isInFooter} />
    </div>
  );
}
