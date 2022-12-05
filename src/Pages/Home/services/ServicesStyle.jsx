import { FONTS } from "../../../styles/FONTS";
import styled from "styled-components";

const ServicesStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  color: #2b2b2e;
  background-color: #dee2e7;
  /* 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
  /* border: 2px solid green; */

  .servCarousel {
    width: 100%;
  }

  .servicesTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: ${FONTS.subHeadingSize};
    font-weight: 900;
    margin-bottom: 1rem;
    .titleUnderline {
      border-bottom: 3px solid #e46060;
      width: 5rem;
      margin: auto;
    }
  }

  .servicesWebView {
    display: none;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    .servicesTitle {
      font-size: ${FONTS.largeSubHeadingSize};
    }
  }
  @media only screen and (min-width: 960px) {
    .servicesTitle {
      font-size: ${FONTS.largerSubHeadingSize};
    }
  }

  @media only screen and (min-width: 900px) {
    .servCarousel {
      display: none;
    }
    .servicesWebView {
      display: flex;
    }
  }
`;
export default ServicesStyle;
