import Icon from "../icons";
import css from "./IconCard.module.css";

export function IconCard({ text, iconId }) {
  return (
    <div className={css.iconCard}>
      <Icon className={css.logo} id={iconId} width="50" height="35" />
      <p className={css.text}>{text}</p>
    </div>
  );
}
