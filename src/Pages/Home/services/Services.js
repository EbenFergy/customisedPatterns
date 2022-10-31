import React from "react";
import ServicesStyle from "./ServicesStyle";
import Carousel from "../../../Components/Carousel/Carousel";
// import SwiperCarousel from "../../../Components/Carousel/SwiperCarousel";
// import PlainCards from "../../../Components/Cards/PlainCards";
import architect from "../../../Assets/ServicesSVG/architect.svg";
// import architectColor from "../../../Assets/ServicesSVG/architectColor.svg";
import engineering from "../../../Assets/ServicesSVG/engineering.svg";
// import engineeringColor from "../../../Assets/ServicesSVG/engineeringColor.svg";
import realEstate from "../../../Assets/ServicesSVG/realEstate.svg";
// import realEstateColor from "../../../Assets/ServicesSVG/realEstateColor.svg";
// import supplies from "../../../Assets/ServicesSVG/supplies.svg";
// import suppliesColor from "../../../Assets/ServicesSVG/suppliesColor.svg";
import survey from "../../../Assets/ServicesSVG/survey.svg";
// import surveyColor from "../../../Assets/ServicesSVG/surveyColor.svg";

const Services = () => {
  const cardBody =
    "Our Portfolio Is Comprised of Home Plans from Designers and Architects. ";

  const servicesObj = [
    {
      title: "Architect",
      image: architect,
      body: cardBody,
    },
    {
      title: "Engineering",
      image: engineering,
      body: cardBody,
    },
    {
      title: "Real Estate",
      image: realEstate,
      body: cardBody,
    },
    // {
    //   title: "Supplies",
    //   image: supplies,
    //   body: cardBody,
    // },
    {
      title: "Survey",
      image: survey,
      body: cardBody,
    },
  ];
  return (
    <ServicesStyle>
      {/* <SwiperCarousel carouselObj={servicesObj} /> */}
      <div className="servCarousel">
        <Carousel carouselObj={servicesObj} />
      </div>
      {/* {servicesObj.map((service) => (
        <PlainCards
          image={service.image}
          title={service.title}
          body={service.body}
        />
      ))} */}
    </ServicesStyle>
  );
};

export default Services;
