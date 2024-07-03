"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import css from "./NavBar.module.css";

export function NavBar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/",
            })}
            href="/"
          >
            Главная
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/services",
            })}
            href="/services"
          >
            Услуги
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/prices",
            })}
            href="/prices"
          >
            Цены
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/promotions",
            })}
            href="/promotions"
          >
            Акции
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/articles",
            })}
            href="/articles"
          >
            Статьи
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/about",
            })}
            href="/about"
          >
            О нас
          </Link>
        </li>
        <li>
          <Link
            className={clsx(css.navLink, {
              [css.active]: pathname === "/contacts",
            })}
            href="/contacts"
          >
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
}
