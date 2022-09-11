import styled from "styled-components";

export const Style = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: rgb(2, 61, 147);
  color: #ffffff;
  /* border: 2px solid red; */

  .footerTitle {
    font-weight: 800;
    font-size: 1.2rem;
    .titleUnderline {
      border-bottom: 3px solid #e46060;
      margin-top: 0.5rem;

      width: 2.5rem;
    }

    margin-bottom: 1rem;
  }

  .copyright {
    font-size: 0.75rem;
    font-weight: 300;
    text-align: center;
  }
`;
export const Form = styled.form`
  /* border: 2px solid yellow; */
  margin-bottom: 2rem;
  input {
    background: none;
    border: none;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 1rem;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 0.75rem;

    ::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
