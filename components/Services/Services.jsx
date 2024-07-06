import css from "./Services.module.css";
import con from "../../styles/container.module.css";
import { FrontServicesCard } from "../FrontServicesCard/FrontServicesCard";
import { ServicesCard } from "../ServicesCard/ServicesCard";
import TelegramButton from "../TelegramButton/TelegramButton";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import ViberButton from "../ViberButton/ViberButton";

export function Services() {
  return (
    <section className={css.services}>
      <div className={`${con.container} ${css.wrapper}`}>
        <FrontServicesCard />
        <ServicesCard
          text={"Мамопластика. Изменение формы груди..."}
          src={"/mamo.png"}
          alt={"Пластика груди"}
        />
        <ServicesCard
          text={"Бариатрическая хирургия"}
          src={"/bariatric.jpg"}
          alt={"Бариатрическая хирургия"}
        />
        <ServicesCard
          text={"Ринопластика"}
          src={"/rino.jpg"}
          alt={"Ринопластика"}
        />
        <ServicesCard
          text={"Лечение зубов"}
          src={"/dental.jpg"}
          alt={"Лечение зубов"}
        />
        <ServicesCard
          text={"Пересадка волос"}
          src={"/hair.jpg"}
          alt={"Пересадка волос"}
        />
        <ServicesCard
          text={"Корекция зрения"}
          src={"/eyes.jpg"}
          alt={"Корекция зрения"}
        />
        <ServicesCard
          text={"Пластическая хирургия"}
          src={"/plastic.jpg"}
          alt={"Пластическая хирургия"}
        />
      </div>
    </section>
  );
}
