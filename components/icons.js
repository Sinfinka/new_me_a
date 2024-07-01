import React from "react";
const Icon = ({ id, className, ...props }) => (
  <svg className={className} {...props}>
    <use xlinkHref={`/icons.svg#${id}`} />
  </svg>
);

export default Icon;

// import Icon from "../components/icons";
// <Icon id="icon-untitled" />
// <Icon id="icon-whatsapp" />
