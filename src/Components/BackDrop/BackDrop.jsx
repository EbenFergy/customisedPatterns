import styled from "styled-components";

const BackDropStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  z-index: 10;

  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid red;
`;

export default BackDropStyle;
