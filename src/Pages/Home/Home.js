import React from "react";
import Style from "./style";
import Button from "../../Components/Button/Button";
import Services from "./services/Services";

const Home = () => {
  return (
    <Style>
      <div className="header">
        High Definition <br />
        sketches
        <p>Customized 2D and 3D designs</p>
        <Button>Learn More</Button>
      </div>
      <Services />
    </Style>
  );
};

export default Home;
