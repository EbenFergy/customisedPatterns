import styled from "styled-components";
import BG from "../../../Assets/testimonialImg.webp";

const Style = styled.div`
  height: 80vh;
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
    justify-content: center;
    padding: 0 1rem;

    h6,
    h3 {
      margin: 0;
      color: #ffffff;
      align-self: flex-start;
    }

    h3 {
      margin-bottom: 1rem;
    }
    h6 {
      color: #e46060;
    }
  }
`;

export default Style;
