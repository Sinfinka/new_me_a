import { IconCard } from "../IconCard/IconCard";
import css from "./AchivSection.module.css";

export function AchivSection() {
  return (
    <section className={css.achivSection}>
      <IconCard
        text={"Широчайший спектр медицинских услуг"}
        iconId={"icon-list"}
      />
      <IconCard
        text={"Дипломированные специалисты высокого класса"}
        iconId={"icon-diploma"}
      />
      <IconCard
        text={"Современное оборудование и технологии"}
        iconId={"icon-certificate"}
      />
      <IconCard
        text={"Профессиональная консультация специалиста"}
        iconId={"icon-profi"}
      />
      <IconCard
        text={"Индивидуальный подход к каждому пациенту"}
        iconId={"icon-gear"}
      />
      <IconCard
        text={"Полная организация поездки и проживания"}
        iconId={"icon-plane"}
      />
    </section>
  );
}
