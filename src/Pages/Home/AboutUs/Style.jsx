import styled from "styled-components";
import { FONTS } from "../../../styles/FONTS";
import { COLORS } from "../../../styles/COLORS";

const Style = styled.div`
  height: 28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  > div {
    /* border: 2px solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: ${FONTS.largeSubHeadingSize};
    color: ${COLORS.FontTitle};
    font-weight: 400;
    /* border: 1px solid; */
    margin: 0;
  }

  p {
    font-size: ${FONTS.bodySize};
    font-weight: ${FONTS.bodyWeight};
    color: ${COLORS.FontTitle};
    line-height: calc(1.5 * ${FONTS.bodySize});
  }

  a {
    text-decoration: none;
    font-size: ${FONTS.subHeadingSize};
    color: ${COLORS.FontTitle};

    /* border: 2px solid; */

    div {
      width: 8.5rem;
    }
  }
  a:hover {
    div {
      border-bottom: 2px solid;
    }
  }

  @media only screen and (min-width: 768px) {
    .aboutUsText {
      width: 60%;
    }
    h1 {
      font-size: ${FONTS.largestSubHeadingSize};
    }
    p {
      font-size: ${FONTS.mediumSubHeadingSize};
      line-height: calc(1.5 * ${FONTS.largeSubHeadingSize});
    }
  }
`;
export default Style;
