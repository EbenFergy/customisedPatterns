import styled from "styled-components";

const Style = styled.div`
  /* height: 100vh; */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(2, 61, 147, 0.98);
  width: ${({ openMenu }) => (openMenu ? "78vw" : "0vw")};
  overflow: hidden;
  align-items: center;
  padding: 4rem 0;
  transition: width 0.5s ease-in-out;
  color: rgb(255, 255, 255);
  z-index: 10;
  /* border: 2px solid; */

  div {
    padding: 1.5rem 1rem;
    margin: 1rem;
    opacity: ${({ openMenu }) => (openMenu ? "1" : "0")};
    transition: opacity 0.3s;
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

  .hamburgerIcon {
    display: none;
    /* border: 2px solid; */
  }

  .navBtns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default Style;
