import React, { useState, useEffect, useRef } from "react";
import css from "./TextCard.module.css";
import Button from "../Button/Button";

export function TextCard({ header, text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cardRef]);

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const renderText = () => {
    if (!isMobile || isExpanded) {
      return text;
    }
    return text.length > 300 ? text.substring(0, 300) + "..." : text;
  };

  return (
    <div className={css.wrapper} ref={cardRef} onClick={handleToggle}>
      <h3 className={css.header}>{header}</h3>
      <p className={css.text}>{renderText()}</p>
      {isMobile && text.length > 300 && (
        <Button
          text={isExpanded ? "Сховати" : "Більше"}
          onClick={handleToggle}
          type="button"
          className={css.textCardButton}
        />
      )}
    </div>
  );
}
