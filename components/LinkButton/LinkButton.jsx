import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import css from "./LinkButton.module.css";

const LinkButton = ({ textBtn, href }) => (
  <Link href={href} className={css.button}>
    {textBtn}
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkButton;
