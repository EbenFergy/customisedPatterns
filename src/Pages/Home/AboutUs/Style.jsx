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
  }
`;
export default Style;
