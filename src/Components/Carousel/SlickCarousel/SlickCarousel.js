import React from "react";
import { SlickStyle } from "./SlickStyle";
import Cards from "../../Cards/Cards";

// import slick carousels
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickCarousel = ({ carouselObj, Galleria }) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 2.6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2.2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1.6,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1.3,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SlickStyle>
      <Slider {...settings}>
        {carouselObj &&
          carouselObj.map((results) => (
            // <div className="cards">
            <Cards
              cardImage={results.cardImage}
              cardTitle={results.cardTitle}
              cardBody={results.cardBody}
            />
            // </div>
          ))}
        {Galleria &&
          Galleria.map((results) => (
            <div className="galleryCont">
              <img src={results.image} alt={results.name} id="galleriaImg" />
            </div>
          ))}
      </Slider>
    </SlickStyle>
  );
};

export default SlickCarousel;
