import { FONTS } from "../../../styles/FONTS";
import { COLORS } from "../../../styles/COLORS";
import styled from "styled-components";

const Style = styled.div`
  p {
    font-size: ${FONTS.subHeadingSize};
    font-weight: ${FONTS.subHeadingWeight};
    color: ${COLORS.FontTitle};
    text-align: center;
    margin-bottom: 0.2rem;
  }

  .titleUnderline {
    border-bottom: 3px solid #e46060;
    width: 5rem;
    margin: auto;
  }

  @media only screen and (min-width: 768px) {
    p {
      font-size: ${FONTS.largeSubHeadingSize};
    }
  }

  @media only screen and (min-width: 1024px) {
    /* border: 2px solid red; */
    /* padding: 1rem 2rem; */
    margin: 0 2rem;
  }
`;

export default Style;
