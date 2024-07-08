import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import css from "./LinkButton.module.css";
import clsx from "clsx";

const LinkButton = ({ textBtn, href, className }) => (
  <Link href={href} className={clsx(css.button, className)}>
    {textBtn}
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LinkButton;
