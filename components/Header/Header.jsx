import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import con from "../../styles/container.module.css";
// import CallbackModal from "../CallbackModal/CallbackModal";

function Header() {
  return (
    <header className={css.header}>
      <div className={css.topBar}>
        <p>мы обеспечим вам лучший сервис</p>
      </div>
      <div className={con.container}>
        <Logo />
        <address>
          <a href="tel:+905303069524">+905303069524</a>
        </address>
        <button
          type="button"
          className="btn btn-primary" // !!!
          data-toggle="modal"
          data-target="#callbackModal"
        >
          Обратный звонок
        </button>
        <nav>
          <ul className={css.navigation}>
            <li>
              <Link className={css.navLink} href="/">
                Главная
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/services">
                Услуги
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/prices">
                Цены
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/promotions">
                Акции
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/articles">
                Статьи
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/about">
                О нас
              </Link>
            </li>
            <li>
              <Link className={css.navLink} href="/contacts">
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <CallbackModal /> */}
    </header>
  );
}

export default Header;
