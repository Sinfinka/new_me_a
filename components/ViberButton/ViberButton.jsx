import React from "react";
import Icon from "../icons";
import css from "./ViberButton.module.css";

function ViberButton({ phoneNumber }) {
  const handleButtonClick = () => {
    // window.open(`https://viber.com/${phoneNumber}`, "_blank");
    window.open(`https://vibr.cc/${phoneNumber}`, "_blank");
  };

  return (
    <button className={css.btn} onClick={handleButtonClick}>
      Написать в Viber <Icon id="icon-viber" width="52" height="43" />
    </button>
  );
}

export default ViberButton;

{
  /* <ViberButton phoneNumber={"+905303069524"} /> */
}
