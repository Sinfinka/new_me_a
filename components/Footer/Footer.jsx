import { FaInfinity } from "react-icons/fa";
import css from "./Footer.module.css";
import con from "../../styles/container.module.css";
import Link from "next/link";
import Icon from "../icons";
import { NavBar } from "../NavBar/NavBar";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={con.container}>
        <Link href="/">
          <Icon
            className={css.logo}
            id="icon-logo-white"
            width="100"
            height="50"
          />
        </Link>
        <NavBar isInFooter />
        <p className={css.text}>
          2024 Developed by <FaInfinity className={css.rotatingIcon} />{" "}
          <Link href="https://github.com/Sinfinka" className={css.linkToGit}>
            Sinfinka
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
