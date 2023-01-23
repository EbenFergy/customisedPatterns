import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";

export const FormCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 2px solid #07a884; */
  /* padding: 1rem; */
  width: 90%;
  /* max-width: 18rem; */

  .formikForm {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .passwordWrapper {
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 100%;
    }

    .eyeWrapper {
      position: absolute;
      right: 0.5rem;
      display: flex;
      align-items: center;
      /* border: 2px solid; */

      svg {
        width: 15px;
      }
    }
  }

  button {
    margin: auto;
  }
`;
export const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  input,
  textarea,
  select {
    padding: 0.5rem 1rem;
    border: 1px solid ${COLORS.DarkGray};
    font-family: inherit;
    margin: 0;
    width: 100%;
  }
  textarea {
    height: 5.5rem;
  }
`;

export const ErrorStyle = styled.div`
  color: red;
  font-size: 0.8rem;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: auto;
  border-radius: 5px;
  background-color: #07a884;
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
