import React from "react";
import ServicesStyle from "./ServicesStyle";
import Carousel from "../../../Components/Carousel/Carousel";
import Cards from "../../../Components/Cards/Cards";
import architectureImg from "../../../Assets/architectureImg.jpeg";

const Services = () => {
  const archTitle = "Architecture";
  const archBody =
    "Our Portfolio Is Comprised of Home Plans from Designers and Architects. Search our collection of 30k house plans by 200 designers.";
  return (
    <ServicesStyle>
      <div className="servicesTitle">
        Our Services <div className="titleUnderline"></div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="cards">
        <Cards
          cardImage={architectureImg}
          cardTitle={archTitle}
          cardBody={archBody}
        />
      </div>
    </ServicesStyle>
  );
};

export default Services;
