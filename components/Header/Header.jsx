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
            <Link href="/">Головна</Link>
          </li>
          <li>
            <Link href="/services">Послуги</Link>
          </li>
          <li>
            <Link href="/prices">Ціни</Link>
          </li>
          <li>
            <Link href="/promotions">Акції</Link>
          </li>
          <li>
            <Link href="/articles">Статті</Link>
          </li>
          <li>
            <Link href="/about">Про нас</Link>
          </li>
          <li>
            <Link href="/contacts">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
