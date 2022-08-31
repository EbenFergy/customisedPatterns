import styled from "styled-components";

const Style = styled.div`
  height: 100vh;
  width: 70vw;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.8);
  background-color: rgb(2, 61, 147, 0.8);
  /* display: ${({ openMenu }) => (openMenu ? "flex" : "none")}; */
  width: ${({ openMenu }) => (openMenu ? "70vw" : "0")};
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
  transition: width 0.5s ease-in-out;
  /* border: 2px solid; */

  div {
    padding: 2rem 1rem;
    margin-bottom: 1rem;
    opacity: ${({ openMenu }) => (openMenu ? "1" : "0")};
    transition: opacity 0.3s;
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
`;

export default Style;
