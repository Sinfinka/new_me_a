"use client";

import React from "react";
import css from "./PhotoCard.module.css";
import LinkButton from "../LinkButton/LinkButton.jsx";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel.jsx";

export function PhotoCard({ href, textBtn, header, text, images }) {
  return (
    <div className={css.wrapper}>
      <h3 className={css.header}>{header}</h3>
      <p className={css.text}>{text}</p>
      <PhotoCarousel images={images} />
      <LinkButton
        href={href}
        textBtn={textBtn}
        className={css.photoCardButton}
      />
    </div>
  );
}
