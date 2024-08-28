import LinkButton from "../LinkButton/LinkButton";
import css from "./ServicesCard.module.css";
import Image from "next/image";

export function ServicesCard({ text, src, alt, href }) {
  return (
    <div className={css.wrapper}>
      <Image
        src={src}
        alt={alt}
        className={css.image}
        layout="responsive"
        width={260}
        height={170}
      />
      <h3 className={css.header}>{text}</h3>
      <LinkButton textBtn={"Узнать больше"} href={href} />
    </div>
  );
}
