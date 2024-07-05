import { FaInfinity } from "react-icons/fa";
import css from "./Footer.module.css";
import con from "../../styles/container.module.css";
import Link from "next/link";
import Icon from "../icons";
import { NavBar } from "../NavBar/NavBar";
import { CallMeBlock } from "../CallMeBlock/CallMeBlock";
import { useState } from "react";
import CallbackModal from "../CallbackModal/CallbackModal";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className={css.footer}>
      <div className={`${con.container} ${css.wrapper}`}>
        <Link href="/">
          <Icon
            className={css.logo}
            id="icon-logo-white"
            width="100"
            height="50"
          />
        </Link>
        <div className={css.navigation}>
          <NavBar isInFooter />
          <CallMeBlock isInFooter onClick={handleOpenModal} />
        </div>
        <p className={css.text}>
          2024 Developed by <FaInfinity className={css.rotatingIcon} />{" "}
          <Link href="https://github.com/Sinfinka" className={css.linkToGit}>
            Sinfinka
          </Link>
        </p>
      </div>
      <CallbackModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          handleCloseModal();
        }}
      />
    </footer>
  );
}

export default Footer;
