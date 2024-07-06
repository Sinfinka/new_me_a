import React from "react";
import Icon from "../icons";
import css from "./WhatsAppButton.module.css";

function WhatsAppButton({ phoneNumber }) {
  const handleButtonClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button className={css.btn} onClick={handleButtonClick}>
      Написать в WhatsApp <Icon id="icon-whatsapp" width="52" height="43" />
    </button>
  );
}

export default WhatsAppButton;

{
  /* <WhatsAppButton phoneNumber={"905303069524"} /> */
}
