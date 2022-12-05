import styled from "styled-components";
import BG from "../../../Assets/testimonialImg.webp";
import { FONTS } from "../../../styles/FONTS";
import { COLORS } from "../../../styles/COLORS";

const Style = styled.div`
  height: 40rem;
  /* border: 2px solid green; */
  position: relative;

  .testHeader {
    height: 60%;
    background: linear-gradient(rgba(1, 45, 112, 0.9), rgba(1, 45, 112, 0.9)),
      url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
  }

  .testimonialFormCont {
    position: relative;
    padding: 1rem 0;
    height: fit-content;
  }

  .testBody {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    padding: 0 0.5rem;

    /* border: 2px solid red; */

    .testBodyHeader {
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
  }

  @media only screen and (min-width: 768px) {
    height: 30rem;

    .testBody {
      display: flex;
      flex-direction: row-reverse;

      > div {
        width: 50%;
      }
    }

    .testimonialFormCont {
      /* border: 2px solid blue; */
      height: 100%;
      padding-top: 2rem;
    }

    .testHeader {
      height: 70%;
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
  background-color: #ffffff;
  box-shadow: 0 4px 4px 0 #f2f2f7;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02),
    0px 7px 23px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  /* border: 2px solid; */

  .formTitle {
    margin-bottom: 1rem;
    font-size: ${FONTS.subHeadingSize};
    color: ${COLORS.FontTitle};
    font-weight: 700;
  }

  input {
    margin-bottom: 1rem;
    width: 90%;
    padding: 0.5rem 0 0.5rem 0.5rem;
    font-size: 14px;
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

  @media only screen and (min-width: 768px) {
    max-width: 28rem;
    height: 95%;
    right: 0;
  }
`;

export default Style;
