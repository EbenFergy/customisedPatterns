import React from "react";
import { CarouselStyle } from "./CarouselStyle";
import Cards from "../Cards/Cards";
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Carousel = ({ carouselObj }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      navigation
      pagination={true}
      scrollbar={{ draggable: true }}
      //   onSwiper={(swiper) => console.log(swiper)}
      //   onSlideChange={() => console.log("slide change")}
      style={{
        maxWidth: "100%",
        zIndex: "-1",
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
    </Swiper>
  );
};

export default Carousel;
