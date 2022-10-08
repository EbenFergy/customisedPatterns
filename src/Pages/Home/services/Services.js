import React from "react";
import ServicesStyle from "./ServicesStyle";
import Carousel from "../../../Components/Carousel/Carousel";
import SlickCarousel from "../../../Components/Carousel/SlickCarousel/SlickCarousel";
import architectureImg from "../../../Assets/Services/architectureImg.jpeg";
import civilImg from "../../../Assets/Services/civil.png";
import surveyImg from "../../../Assets/Services/survey.png";
import realEstateImg from "../../../Assets/Services/realEstate.png";
import generalSupplyImg from "../../../Assets/Services/generalSupply.png";

const Services = () => {
  const archBody =
    "Our Portfolio Is Comprised of Home Plans from Designers and Architects. Search our collection of 30k house plans by 200 designers.";

  const carouselObj = [
    {
      cardImage: architectureImg,
      cardTitle: "Architecture",
      cardBody: archBody,
    },
    {
      cardImage: civilImg,
      cardTitle: "Engineering",
      cardBody: archBody,
    },
    { cardImage: surveyImg, cardTitle: "Surveying", cardBody: archBody },
    {
      cardImage: realEstateImg,
      cardTitle: "Real Estate",
      cardBody: archBody,
    },
    {
      cardImage: generalSupplyImg,
      cardTitle: "General Supplies",
      cardBody: archBody,
    },
  ];
  return (
    <ServicesStyle>
      <div className="servicesTitle">
        Our Services <div className="titleUnderline"></div>
      </div>
      <Carousel carouselObj={carouselObj} />
      <SlickCarousel carouselObj={carouselObj} />
    </ServicesStyle>
  );
};

export default Services;
