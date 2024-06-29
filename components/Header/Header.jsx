import Link from "next/link";
import React from "react";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/services">Услуги</Link>
          </li>
          <li>
            <Link href="/prices">Цены</Link>
          </li>
          <li>
            <Link href="/promotions">Акции</Link>
          </li>
          <li>
            <Link href="/articles">Статьи</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
