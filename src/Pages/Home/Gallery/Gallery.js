import React from "react";
import Style from "./Style";
import Carousel from "../../../Components/Carousel/Carousel";
import img1 from "../../../Assets/Galleria/image_1.png";
import img2 from "../../../Assets/Galleria/image_2.png";
import img3 from "../../../Assets/Galleria/image_3.png";
import img4 from "../../../Assets/Galleria/image_4.png";
import img5 from "../../../Assets/Galleria/image_5.png";
import img6 from "../../../Assets/Galleria/image_6.png";

const Galleria = [
  { name: "img1", image: img1 },
  { name: "img2", image: img2 },
  { name: "img3", image: img3 },
  { name: "img4", image: img4 },
  { name: "img5", image: img5 },
  { name: "img6", image: img6 },
];

const Gallery = () => {
  return (
    <Style id="homeGallery">
      <p>Gallery</p>
      <div className="titleUnderline"></div>
      <Carousel Galleria={Galleria} />
    </Style>
  );
};

export default Gallery;
