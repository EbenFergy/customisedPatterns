import React from "react";
import { CarouselStyle } from "./CarouselStyle";
import Cards from "../Cards/Cards";
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./Carousel.css";
const Carousel = ({ carouselObj, Galleria }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Navigation]}
      breakpoints={{
        400: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        450: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        550: {
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.6,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      navigation={true}
      pagination={true}
      scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      style={{
        maxWidth: "100%",
        zIndex: "0",
        // border: "2px solid red",
      }}
    >
      {carouselObj &&
        carouselObj.map((results) => (
          <SwiperSlide key={results.cardTitle}>
            <CarouselStyle>
              <Cards
                cardImage={results.cardImage}
                cardTitle={results.cardTitle}
                cardBody={results.cardBody}
              />
            </CarouselStyle>
          </SwiperSlide>
        ))}
      {Galleria &&
        Galleria.map((results) => (
          <SwiperSlide key={results.name}>
            <CarouselStyle>
              <img src={results.image} alt={results.name} id="galleriaImg" />
            </CarouselStyle>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
