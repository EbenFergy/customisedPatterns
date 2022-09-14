import React, { useState } from "react";
import Style from "./style";
import HorizontalCards from "../../../Components/Cards/HorizontalCards";
import clientImg from "../../../Assets/clientImg.jpeg";

const testimonyObj = [
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

const Testimonials = () => {
  const [currentTest, setCurrentTest] = useState(0);

  const selectTestimony = () => {
    let chosen = Math.floor(Math.random() * 23) % testimonyObj.length;
    setCurrentTest(chosen);
  };

  setTimeout(selectTestimony, 3000);

  return (
    <Style>
      <div className="testHeader">
        <h6>OUR HAPPY CLIENTS</h6>
        <h3>What clients say about us</h3>

        <HorizontalCards
          cardImage={testimonyObj[currentTest].cardImage}
          cardTitle={testimonyObj[currentTest].cardTitle}
          cardBody={testimonyObj[currentTest].cardBody}
        />
      </div>
      <div></div>
    </Style>
  );
};

export default Testimonials;