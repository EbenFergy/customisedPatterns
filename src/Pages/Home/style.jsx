import styled from "styled-components";
import bgGif from "../../Assets/bgGif3.jpeg";
import { COLORS } from "../../styles/COLORS";

const Style = styled.div`
  width: 100vw;
  /* height: 80vh; */
  /* border: 2px solid; */

  .header {
    width: 100vw;
    height: 40rem;
    background-size: cover;
    background: linear-gradient(rgba(2, 18, 44, 0.7), rgba(2, 26, 63, 0.7)),
      url(${bgGif});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #ffffff;
    /* border: 2px solid yellow; */
  }

  #headerTitle {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  .leadCaption {
    width: 100%;
    background-color: #f1f1f1;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 1.2rem;
    margin: 2rem 0;

    #leadCaption {
      font-size: 14px;
      font-weight: 400;
      color: #6b6b7b;
    }

    #leadTitle {
      color: #2b2b2e;
      span {
        font-weight: 400;
      }
    }
  }

  .smoosh {
    border: 2px solid red;
  }

  @media only screen and (min-width: 600px) {
    /* .header {
      height: 100vh;
    } */

    .leadCaption {
      padding: 2rem 4rem;
    }
  }
  @media only screen and (min-width: 700px) {
    .leadCaption {
      padding: 2rem 6rem;
    }
  }

  @media only screen and (min-width: 960px) {
    .header {
      height: 90vh;
    }

    #headerTitle {
      font-size: 40px;
    }

    p {
      font-size: 20px;
      font-weight: 500;
    }
  }
  @media only screen and (min-width: 1280px) {
    #headerTitle {
      font-size: 60px;
    }
  }
`;

export default Style;
