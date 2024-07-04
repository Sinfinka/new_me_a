// Sidebar.jsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import con from "../../styles/container.module.css";
import css from "./Sidebar.module.css";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";
import Link from "next/link";
import Icon from "../icons";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={clsx(
        css.sidebar,
        { [css.sidebarOpen]: isOpen },
        con.container
      )}
    >
      <div className={css.sidebarHeader}>
        <Link href="/">
          <Icon className={css.logo} id="icon-logo" width="227" height="115" />
        </Link>
        <IoMdClose className={css.closeIcon} onClick={onClose} />
      </div>
      <div className={css.sidebarContent}>
        {/* <CallMeBlock /> */}
        <NavBar onClose={onClose} isInSidebar />
        {/* <div className={css.topBar}>
          <p>мы обеспечим вам лучший сервис</p>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
