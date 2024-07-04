import React from "react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import css from "./Sidebar.module.css";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";
import Link from "next/link";
import Icon from "../icons";

const Sidebar = ({ isOpen, onClose, toggleModal }) => {
  const handleLogoClick = () => {
    onClose();
  };

  return (
    <div className={clsx(css.sidebar, { [css.sidebarOpen]: isOpen })}>
      <div className={css.sidebarHeader}>
        <Link href="/">
          <Icon
            className={css.logo}
            id="icon-logo"
            width="227"
            height="115"
            onClick={handleLogoClick}
          />
        </Link>
        <IoMdClose className={css.closeIcon} onClick={handleLogoClick} />
      </div>
      <div className={css.sidebarContent}>
        <div className={css.sidebarNavBar}>
          <NavBar onClose={onClose} isInSidebar />
        </div>
        <div className={css.sidebarCallMeBlock}>
          <CallMeBlock onClick={toggleModal} isInSidebar />
        </div>
        <div className={css.topBar}>
          <p>мы обеспечим вам лучший сервис</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
