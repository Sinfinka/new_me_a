import css from "./Services.module.css";
import con from "../../styles/container.module.css";
import { FrontServicesCard } from "../FrontServicesCard/FrontServicesCard";
import { ServicesCard } from "../ServicesCard/ServicesCard";
import Link from "next/link";

export function Services() {
  return (
    <section className={css.services}>
      <div className={`${con.container} ${css.wrapper}`}>
        <Link href={"/services"}>
          <FrontServicesCard />
        </Link>
        <ServicesCard
          text={"Мамопластика. Изменение формы груди"}
          src={"/mamo.png"}
          alt={"Пластика груди"}
          href={"/services/plastic/breast-surgery"}
        />
        <ServicesCard
          text={"Терапия избыточного веса и сахарного диабета 2-го типа"}
          src={"/diabet.jpg"}
          alt={"Терапия избыточного веса и сахарного диабета 2-го типа"}
          href={"/services/bariatric"}
        />
        <ServicesCard
          text={"Ринопластика"}
          src={"/rino.jpg"}
          alt={"Ринопластика"}
          href={"/services/plastic/rhinoplasty"}
        />
        <ServicesCard
          text={"Лечение зубов"}
          src={"/dental.jpg"}
          alt={"Лечение зубов"}
          href={"/services/stomatology"}
        />
        <ServicesCard
          text={"Пересадка волос"}
          src={"/hair.jpg"}
          alt={"Пересадка волос"}
          href={"/services/hair-transplant"}
        />
        <ServicesCard
          text={"Корекция зрения"}
          src={"/eyes.jpg"}
          alt={"Корекция зрения"}
          href={"/services/vision-correction"}
        />
        <ServicesCard
          text={"Пластическая хирургия"}
          src={"/plastic.jpg"}
          alt={"Пластическая хирургия"}
          href={"/services/plastic"}
        />
      </div>
    </section>
  );
}
