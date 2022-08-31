import styled from "styled-components";

const Button = styled.button`
  width: auto;
  border-radius: 5px;
  background-color: #e46060;
  /* background-color: rgb(25, 166, 100); */
  border: none;
  padding: 1rem 1.2rem;
  color: #ffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  :active {
    opacity: 0.5;
  }
`;

export default Button;
