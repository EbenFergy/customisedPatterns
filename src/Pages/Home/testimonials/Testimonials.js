import React from "react";
import Style from "./style";
import HorizontalCards from "../../../Components/Cards/HorizontalCards";
import clientImg from "../../../Assets/clientImg.jpeg";

const Testimonials = () => {
  let testimonials = [
    {
      cardImage: clientImg,
      cardTitle: "Anthony Ogakwe",
      cardBody:
        "I was so impressed with the way my work was done. Delivery was done with specifications",
    },
    {
      cardImage: clientImg,
      cardTitle: "Blessed Omoregbe",
      cardBody:
        "The fact that i could get such expertise in Nigeria is commendable",
    },
    {
      cardImage: clientImg,
      cardTitle: "Simeon Peters",
      cardBody: "Exactly what I wanted, I totally recommend them",
    },
  ];
  //   let cardBody =
  //     "I was so impressed with the way my work was done. Delivery was done with specifications";

  //   let clientName = "Anthony Ogakwe";
  return (
    <Style>
      <div className="testHeader">
        <h6>OUR HAPPY CLIENTS</h6>
        <h3>What clients say about us</h3>
        {testimonials.map((testimony) => (
          <HorizontalCards
            cardImage={testimony.clientImg}
            cardTitle={testimony.clientName}
            cardBody={testimony.cardBody}
          />
        ))}
      </div>
      <div></div>
    </Style>
  );
};

export default Testimonials;
