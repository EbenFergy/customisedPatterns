import React from "react";
import Style from "./style";
import Button from "../../Components/Button/Button";
import Services from "./services/Services";
import Footer from "../../Components/Footer/Footer";

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
      <div className="leadCaption">
        "With over 15 years of experience in delivering quality designs, we are
        sure to provide what you want with a quality compared to none"
        <p>
          Arch Omofoma Osagie <br /> Lead Architect
        </p>
      </div>
      <Footer />
    </Style>
  );
};

export default Home;
