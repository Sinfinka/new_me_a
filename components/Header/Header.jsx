import React from "react";
import css from "./Header.module.css";

import con from "../../styles/container.module.css";
import Icon from "../../components/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";

// import CallbackModal from "../CallbackModal/CallbackModal";

function Header() {
  return (
    <header className={css.header}>
      <div className={css.topBar}>
        <p>мы обеспечим вам лучший сервис</p>
      </div>
      <div className={`${css.wrapper} ${con.container}`}>
        <Icon className={css.logo} id="icon-logo" width="227" height="115" />
        <div className={css.tools}>
          <CallMeBlock />
          <NavBar />
          <GiHamburgerMenu className={css.burger} />
        </div>
      </div>
      {/* <CallbackModal /> */}
    </header>
  );
}

export default Header;
