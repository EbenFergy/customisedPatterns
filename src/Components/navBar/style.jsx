import styled from "styled-components";
import { FONTS } from "../../styles/FONTS";
import { COLORS } from "../../styles/COLORS";

const Style = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 0.75rem 1rem;
  /* z-index: 10; */
  background-color: ${({ isHeaderVisible }) =>
    isHeaderVisible ? "rgba(2, 61, 147, 0)" : "rgba(2, 61, 147, 1)"};
  transition: all 0.8s;
  /* background-color: rgba(255, 255, 255, 1); */

  /* border: 2px solid red; */

  img {
    height: 2.8rem;
  }

  .logoCont {
    /* border: 2px solid red; */
  }

  .navLinks,
  .contactUs {
    display: none;
  }

  @media only screen and (min-width: 500px) {
    padding: 0.75rem 2rem;
  }

  @media only screen and (min-width: 768px) {
    padding: 0.75rem 4rem;
  }

  @media only screen and (min-width: 960px) {
    padding: 0.75rem 8rem;

    a {
      text-decoration: none;
      color: ${COLORS.Gray};
    }
    .navLinks {
      display: flex;
      list-style: none;
      justify-content: space-around;
      width: 25rem;

      li a {
        text-decoration: none;
        color: ${COLORS.Gray};
        font-size: ${FONTS.smallBodySize};
      }
    }

    .contactUs {
      display: block;
    }
  }
`;
export default Style;
