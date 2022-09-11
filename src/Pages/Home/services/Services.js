import React from "react";
import ServicesStyle from "./ServicesStyle";
import Carousel from "../../../Components/Carousel/Carousel";
import architectureImg from "../../../Assets/architectureImg.jpeg";

const Services = () => {
  const archTitle = "Architecture";
  const archBody =
    "Our Portfolio Is Comprised of Home Plans from Designers and Architects. Search our collection of 30k house plans by 200 designers.";

  const carouselObj = [
    { cardImage: architectureImg, cardTitle: archTitle, cardBody: archBody },
    { cardImage: architectureImg, cardTitle: archTitle, cardBody: archBody },
    { cardImage: architectureImg, cardTitle: archTitle, cardBody: archBody },
    { cardImage: architectureImg, cardTitle: archTitle, cardBody: archBody },
  ];
  return (
    <ServicesStyle>
      <div className="servicesTitle">
        Our Services <div className="titleUnderline"></div>
      </div>
      <Carousel carouselObj={carouselObj} />
    </ServicesStyle>
  );
};

export default Services;
