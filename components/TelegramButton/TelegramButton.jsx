import React from "react";
import Icon from "../icons";
import css from "./TelegramButton.module.css";

function TelegramButton({ chatIdOrUsername }) {
  const handleButtonClick = () => {
    window.open(`https://t.me/${chatIdOrUsername}`, "_blank");
  };

  return (
    <button className={css.btn} onClick={handleButtonClick}>
      Написать в Telegram
      <Icon id="icon-telegram" width="52" height="43" />
    </button>
  );
}

export default TelegramButton;
