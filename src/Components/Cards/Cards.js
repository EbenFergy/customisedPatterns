import React from "react";
import Style from "./style";

const Cards = ({ cardImage, cardTitle, cardBody }) => {
  return (
    <Style>
      <div className="cardHeader">
        <img className="cardImage" src={cardImage} alt={cardTitle} />
      </div>
      <div className="cardTitle"> {cardTitle} </div>
      <div className="cardBody">{cardBody}</div>
    </Style>
  );
};

export default Cards;
