import clsx from "clsx";
import css from "./PageMainSection.module.css";

export function PageMainSection({ header, src, alt, additionalClass }) {
  return (
    <section className={clsx(css.mainSection, additionalClass)}>
      <h1 className={css.header}>{header}</h1>
    </section>
  );
}
