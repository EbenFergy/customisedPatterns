import styled from "styled-components";

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

  @media only screen and (min-width: 500px) {
    padding: 0.75rem 2rem;
  }
`;
export default Style;
