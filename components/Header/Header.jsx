import React, { useState } from "react";
import css from "./Header.module.css";
import Link from "next/link";
import con from "../../styles/container.module.css";
import Icon from "../../components/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";
import Sidebar from "../Sidebar/Sidebar";
import CallbackModal from "../CallbackModal/CallbackModal";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Форма відправлена з хедера", values);
    setSubmitting(false);
    toast.success("Сообщение отправлено. Вам позвонит консультант.");
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={css.header}>
        <div className={css.topBar}>
          <p>мы обеспечим вам лучший сервис</p>
        </div>
        <div className={`${css.wrapper} ${con.container}`}>
          <Link href="/">
            <Icon
              className={css.logo}
              id="icon-logo"
              width="227"
              height="115"
            />
          </Link>
          <div className={css.tools}>
            <CallMeBlock onClick={toggleModal} />
            <NavBar />
          </div>
          <GiHamburgerMenu className={css.burger} onClick={toggleSidebar} />
        </div>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
          toggleModal={toggleModal}
        />
        <CallbackModal
          isOpen={isModalOpen}
          onClose={toggleModal}
          onSubmit={handleSubmit}
        />
      </header>
    </>
  );
}

export default Header;
