import styled from "styled-components";
import { FONTS } from "../../styles/FONTS";

const Style = styled.div`
  /* height: 100vh; */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(2, 61, 147, 0.97);
  width: 100vw;
  overflow: hidden;
  align-items: center;
  padding: 4rem 0;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 2s ease-in-out;

  /* border: 2px solid; */

  div {
    padding: 1.5rem 1rem;
    margin: 1rem;
    border-bottom: 0.8px solid rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  div:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .hamburgerIcon_cont {
    display: flex;
    justify-content: end;

    svg {
      height: 1.3rem;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: ${FONTS.mediumSubHeadingSize};
    /* border: 2px solid white; */
  }
  .closeIcon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.5rem 1.5rem 0 0;
  }

  #sideContact {
    position: absolute;
    bottom: 0;
    margin-bottom: 3rem;
  }

  .hamburgerIcon {
    display: none;
    /* border: 2px solid; */
  }

  .navBtns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid green;
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default Style;
