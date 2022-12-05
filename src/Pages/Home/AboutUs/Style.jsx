import styled from "styled-components";
import { FONTS } from "../../../styles/FONTS";
import { COLORS } from "../../../styles/COLORS";

const Style = styled.div`
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  h1 {
    font-size: ${FONTS.largeSubHeadingSize};
    color: ${COLORS.FontTitle};
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
    width: 10rem;
    /* border: 2px solid; */

    div {
      width: inherit;
      transition: all 0.5 ease-in;
    }
  }
  a:hover {
    div {
      border-bottom: 2px solid;
    }
  }
`;
export default Style;
