import css from "./CallMeBlock.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

export function CallMeBlock() {
  return (
    <div className={css.callMe}>
      <address>
        <a className={css.telLink} href="tel:+905303069524">
          +905303069524
        </a>
      </address>
      <button
        type="button"
        className={css.btn}
        data-toggle="modal"
        data-target="#callbackModal"
      >
        Обратный звонок
      </button>
      <p className={css.workTime}>ПН-ПТ: 10-19</p>
      <LanguageSwitcher />
    </div>
  );
}
