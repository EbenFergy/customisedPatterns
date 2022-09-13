import React from "react";
import Style from "./style";
import HorizontalCards from "../../../Components/Cards/HorizontalCards";
import clientImg from "../../../Assets/clientImg.jpeg";

const Testimonials = () => {
  let cardBody =
    "I was so impressed with the way my work was done. Delivery was done with specifications";

  let clientName = "Anthony Ogakwe";
  return (
    <Style>
      <div className="testHeader">
        <h6>OUR HAPPY CLIENTS</h6>
        <h3>What clients say about us</h3>
        <HorizontalCards
          cardImage={clientImg}
          cardTitle={clientName}
          cardBody={cardBody}
        />
      </div>
      <div></div>
    </Style>
  );
};

export default Testimonials;
