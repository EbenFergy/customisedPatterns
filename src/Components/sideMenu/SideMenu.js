import React, { useContext } from "react";
import Style from "./style";
import SideMenuContext from "../../Store/SideMenuContext";
import Button from "../Button/Button";
import ReactDOM from "react-dom";
import BackDropStyle from "../BackDrop/BackDrop";

const BackDrop = () => {
  return <BackDropStyle></BackDropStyle>;
};
const SideMenu = () => {
  const { openMenu } = useContext(SideMenuContext);

  return (
    <>
      {openMenu &&
        ReactDOM.createPortal(
          <Style>
            <div className="navBtns">
              <a href="#homeHeader">Home</a>
            </div>
            <div className="navBtns">
              <a href="#homeServices">Services</a>
            </div>
            <div className="navBtns">
              <a href="#homeGallery">Gallery</a>
            </div>
            <a href="#homeTestimonials">
              <Button dormant={true} className="contactUs">
                Contact Us
              </Button>
            </a>
          </Style>,
          document.getElementById("modal")
        )}
      {openMenu &&
        ReactDOM.createPortal(
          <BackDrop />,
          document.getElementById("backdrop")
        )}
    </>
  );
};

export default SideMenu;
