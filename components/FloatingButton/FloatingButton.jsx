import React, { useState } from "react";
import css from "./FloatingButton.module.css";

import TelegramButton from "../TelegramButton/TelegramButton";
import ViberButton from "../ViberButton/ViberButton";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import Icon from "../icons";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.floatingButtonContainer}>
      <button className={css.floatingButton} onClick={toggleOpen}>
        <Icon className={css.logo} id="icon-mesage" width="52" height="43" />
      </button>
      {isOpen && (
        <div className={css.buttonContainer}>
          <div className={css.buttonWhatsApp}>
            <WhatsAppButton phoneNumber={"905303069524"} />
          </div>
          <div className={css.buttonTelegram}>
            <TelegramButton chatIdOrUsername={"elenademiriz"} />
          </div>
          <div className={css.buttonViber}>
            <ViberButton phoneNumber={"905303069524"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
