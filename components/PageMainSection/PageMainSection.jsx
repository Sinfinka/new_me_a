// import Image from "next/image";
import css from "./PageMainSection.module.css";

export function PageMainSection({ header, src, alt }) {
  return (
    <section className={css.mainSection}>
      <h1 className={css.header}>{header}</h1>
      {/* <Image
        src={src}
        alt={alt}
        className={css.image}
        layout="responsive"
        width={1000}
        height={250}
      /> */}
    </section>
  );
}
