import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./PhotoCarousel.module.css";
import Image from "next/image";

const PhotoCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className={css.slider}>
      {images.map((image, index) => (
        <div key={index} className={css.imageContainer}>
          <Image
            src={image}
            alt={`Photo ${index + 1}`}
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;
