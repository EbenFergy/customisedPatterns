import { FONTS } from "../../../styles/FONTS";
import styled from "styled-components";

const ServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  color: #2b2b2e;
  /* border: 2px solid green; */

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

  @media only screen and (min-width: 768px) {
    .servicesTitle {
      font-size: ${FONTS.largeSubHeadingSize};
    }
  }
`;
export default ServicesStyle;
