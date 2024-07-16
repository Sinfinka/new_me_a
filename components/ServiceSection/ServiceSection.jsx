import Image from "next/image";
import css from "./ServiceSection.module.css";

export default function ServiceSection({ serviceName, serviceText }) {
  return (
    <section className={css.servicesSection}>
      <h2> {serviceName} </h2>
      <p>{serviceText}</p>

      <div className={css.imageWrapper}>
        <Image
          src={"/plastic1.jpg"}
          alt={"Пластика груди"}
          className={css.image}
          layout="responsive"
          width={696}
          height={494}
        />
      </div>
    </section>
  );
}
