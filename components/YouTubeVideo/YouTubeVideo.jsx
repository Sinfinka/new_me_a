import React from "react";
import css from "./YouTubeVideo.module.css";

const YouTubeVideo = ({ url }) => {
  return (
    <section className={css.section}>
      <iframe
        width="450"
        height="800"
        src={url}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      ></iframe>
    </section>
  );
};

export default YouTubeVideo;
