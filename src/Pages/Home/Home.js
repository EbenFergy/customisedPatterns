import React from "react";
import Style from "./style";
import Button from "../../Components/Button/Button";
import Services from "./services/Services";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Gallery from "./Gallery/Gallery";

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
      <Testimonials />

      <div className="leadCaption">
        "With over 15 years of experience in delivering quality designs, we are
        sure to provide what you want with a quality compared to none"
        <p>
          Arch Omofoma Osagie <br /> Lead Architect
        </p>
      </div>
      <Gallery />
      <div>Order now</div>
      <Footer />
    </Style>
  );
};

export default Home;
