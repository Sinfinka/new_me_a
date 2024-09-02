"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import css from "./NavBar.module.css";
import { useTranslation } from "react-i18next";

export function NavBar({ onClose, isInSidebar, isInFooter }) {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <nav
      className={clsx({
        [css.inSidebar]: isInSidebar,
        [css.inFooter]: isInFooter,
      })}
    >
      <ul className={css.navigation}>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/",
            })}
            href="/"
            onClick={onClose}
          >
            {t("nav_home")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/services",
            })}
            href="/services"
            onClick={onClose}
          >
            {t("nav_services")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/prices",
            })}
            href="/prices"
            onClick={onClose}
          >
            {t("nav_prices")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/promotions",
            })}
            href="/promotions"
            onClick={onClose}
          >
            {t("nav_promotions")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/articles",
            })}
            href="/articles"
            onClick={onClose}
          >
            {t("nav_articles")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/about",
            })}
            href="/about"
            onClick={onClose}
          >
            {t("nav_about")}
          </Link>
        </li>
        <li className={css.li}>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/contacts",
            })}
            href="/contacts"
            onClick={onClose}
          >
            {t("nav_contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
