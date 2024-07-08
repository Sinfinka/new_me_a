import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./PhotoCarousel.module.css";

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={css.slider}>
      <div>
        <img src={"/clinic.jpg"} alt="Photo 1" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={"/clinic5.jpg"} alt="Photo 1" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={"/clinic1.jpg"} alt="Photo 2" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={"/clinic2.jpg"} alt="Photo 3" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={"/clinic3.jpg"} alt="Photo 4" style={{ width: "100%" }} />
      </div>
      <div>
        <img src={"/clinic6.jpg"} alt="Photo 5" style={{ width: "100%" }} />
      </div>
    </Slider>
  );
};

export default PhotoCarousel;
