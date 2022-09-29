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
`;

export default Style;
