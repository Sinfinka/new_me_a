import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({ text, onClick, type, className }) => (
  <button className={clsx(css.button, className)} onClick={onClick} type={type}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
