import React, { useState, useRef, useMemo, useEffect } from "react";
import Style from "./style";
import Button from "../../Components/Button/Button";
import Services from "./services/Services";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "./testimonials/Testimonials";
import Gallery from "./Gallery/Gallery";
import NavBar from "../../Components/navBar/NavBar";

const Home = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const headerRef = useRef(null);
  // console.log("headerRef", headerRef.current);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0.8,
      rootMargin: "0px",
    };
  }, []);

  // useRef does not render immediately,
  // so it can't be used in the same scope as it was created,
  // Hence, the need for putting it in a useEffect to create a different scope or block.
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    }, options);

    if (headerRef.current) observer.observe(headerRef.current);
  }, [options]);

  return (
    <Style>
      <NavBar isHeaderVisible={isHeaderVisible} />
      <div className="header" ref={headerRef}>
        <p id="headerTitle">
          High Definition <br />
          sketches
        </p>

        <p>Customized 2D and 3D designs</p>
        <Button>Learn More</Button>
      </div>
      <Services />
      <Testimonials />

      <div className="leadCaption">
        <p id="leadCaption">
          "With over 15 years of experience in delivering quality designs, we
          are sure to provide what you want with a quality compared to none"
        </p>

        <p id="leadTitle">
          Arch Omofoma Osagie <br /> <span>Lead Architect</span>
        </p>
      </div>
      <Gallery />
      <Footer />
    </Style>
  );
};

export default Home;
