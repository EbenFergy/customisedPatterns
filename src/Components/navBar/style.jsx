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
  padding: 1rem 1.5rem;
  /* z-index: 10; */
  background-color: rgb(2, 61, 147);
  /* background-color: rgb(255, 255, 255); */

  /* border: 2px solid red; */

  img {
  }

  .logoCont {
    border: 2px solid red;
    svg {
      height: 4rem;
      border: 2px solid red;
    }
  }
`;
export default Style;
