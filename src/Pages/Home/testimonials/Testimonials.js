import React, { useState } from "react";
import { Style } from "./style";
import HorizontalCards from "../../../Components/Cards/HorizontalCards";
import clientImg from "../../../Assets/clientImg.jpeg";
import TForm from "./TForm";

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
  {
    cardImage: clientImg,
    cardTitle: "Rita Flores",
    cardBody: "Top class delivery.",
  },
  {
    cardImage: clientImg,
    cardTitle: "Princess Afere",
    cardBody: "Updates were made right on time. Best company.",
  },
  {
    cardImage: clientImg,
    cardTitle: "Yul Lings",
    cardBody: "So happy with what I got. Exactly what I wanted.",
  },
  {
    cardImage: clientImg,
    cardTitle: "Kathryn Joes",
    cardBody:
      "Felt like shouting when I got the fiinal result. Thank you so much guys.",
  },
];

const Testimonials = () => {
  const [currentTest, setCurrentTest] = useState(0);

  const selectTestimony = () => {
    let chosen = Math.floor(Math.random() * 23) % testimonyObj.length;
    setCurrentTest(chosen);
  };

  setTimeout(selectTestimony, 5000);

  return (
    <Style id="homeTestimonials">
      <div className="testHeader"></div>

      <div className="testBody">
        <div className="testBodyHeaderCont">
          <div className="testBodyHeader">
            <h6>OUR HAPPY CLIENTS</h6>
            <h3>What clients say about us</h3>

            <HorizontalCards
              cardImage={testimonyObj[currentTest].cardImage}
              cardTitle={testimonyObj[currentTest].cardTitle}
              cardBody={testimonyObj[currentTest].cardBody}
            />
          </div>
        </div>
        <div className="testimonialFormCont">
          <TForm />
        </div>
      </div>
    </Style>
  );
};

export default Testimonials;
