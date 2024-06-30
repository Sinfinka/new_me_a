import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ text, onClick }) => (
  <button className={css.button} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
