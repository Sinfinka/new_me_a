"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import css from "./NavBar.module.css";

export function NavBar({ onClose, isInSidebar, isInFooter }) {
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
            Главная
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
            Услуги
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
            Цены
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
            Акции
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
            Статьи
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
            О нас
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
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
