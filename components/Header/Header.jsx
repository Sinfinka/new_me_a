import React from "react";
import css from "./Header.module.css";
import Link from "next/link";
import con from "../../styles/container.module.css";
import Icon from "../../components/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

// import CallbackModal from "../CallbackModal/CallbackModal";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <header className={css.header}>
      <div className={css.topBar}>
        <p>мы обеспечим вам лучший сервис</p>
      </div>
      <div className={`${css.wrapper} ${con.container}`}>
        <Link href="/">
          <Icon className={css.logo} id="icon-logo" width="227" height="115" />
        </Link>
        <div className={css.tools}>
          <CallMeBlock />
          <NavBar />
        </div>
        <GiHamburgerMenu className={css.burger} onClick={toggleSidebar} />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* <CallbackModal /> */}
    </header>
  );
}

export default Header;
