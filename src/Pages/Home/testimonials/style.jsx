import styled from "styled-components";
import BG from "../../../Assets/testimonialImg.webp";

const Style = styled.div`
  height: 90vh;
  /* border: 2px solid green; */

  .testHeader {
    height: 60%;
    background: linear-gradient(rgba(1, 45, 112, 0.9), rgba(1, 45, 112, 0.9)),
      url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;

    h6,
    h3 {
      margin: 0;
      color: #ffffff;
      /* align-self: flex-start; */
      /* border: 2px solid; */
    }

    h3 {
      margin-bottom: 1rem;
    }
    h6 {
      color: #e46060;
    }
  }
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem;
  min-width: 14rem;
  max-width: 25rem;
  margin: auto;
  position: relative;
  top: -5rem;
  background-color: #ffffff;
  box-shadow: 0 4px 4px 0 #f2f2f7;
  border-radius: 5px;
  /* border: 2px solid; */

  .formTitle {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  input {
    margin-bottom: 1rem;
    width: 90%;
    padding: 0.5rem 0;
  }

  Button {
    width: 90%;
  }

  hr {
    width: 30%;
    border: 1px solid #e46060;
    position: absolute;
    bottom: 0;
    margin: 0;
  }
`;

export default Style;
