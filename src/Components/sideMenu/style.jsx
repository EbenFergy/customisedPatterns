import styled from "styled-components";

const Style = styled.div`
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgb(2, 61, 147, 0.98);
  width: ${({ openMenu }) => (openMenu ? "78vw" : "0vw")};
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  box-sizing: border-box;
  transition: width 0.5s ease-in-out;
  color: rgb(255, 255, 255);
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
`;

export default Style;
