import styled from "styled-components";
import parallaxBG1 from "../../Assets/parallaxBG22.jpg";
import parallaxBG2 from "../../Assets/parallaxBG2.jpg";
import bgGif from "../../Assets/bgGif3.jpeg";
import { FONTS } from "../../styles/FONTS";

const Style = styled.div`
  width: 100vw;
  /* height: 100vh; */

  /* height: 80vh; */
  /* border: 2px solid; */

  .header {
    cursor: crosshair;
    width: 100vw;
    height: 40rem;
    background-size: cover;
    background: linear-gradient(
        to right,
        rgba(2, 18, 44, 1),
        rgba(2, 26, 63, 0.7)
      ),
      url(${bgGif});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    position: relative;
    color: #ffffff;
    padding: 0 1rem;
    transition: all 0.8s;
    /* border: 2px solid yellow; */

    .btnCont {
      margin-bottom: 5rem;
    }

    .happyClient {
      /* width: 100%; */
      display: flex;
      justify-content: center;
      /* border: 2px solid red; */
    }
  }

  #headerTitle {
    /* text-align: center; */
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0;
  }

  .parallax1 {
    height: 30vh;
    background: linear-gradient(rgba(2, 18, 44, 0.7), rgba(2, 26, 63, 0.7)),
      url(${parallaxBG1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    background-attachment: fixed;
  }
  .parallax2 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50vh;
    background: linear-gradient(rgba(2, 18, 44, 0.7), rgba(2, 26, 63, 0.7)),
      url(${parallaxBG2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    background-attachment: fixed;
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
    max-height: 90%;
    /* border: 2px solid red; */

    #leadCaption {
      /* font-size: 14px; */
      font-weight: 400;
      color: #6b6b7b;
      max-height: 90%;
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

  @media only screen and (min-width: 760px) {
    .header {
      padding: 0 4rem;
    }

    .leadCaption {
      width: 75%;
      background-color: rgba(241, 241, 241, 0.82);

      #leadCaption {
        font-size: ${FONTS.mediumSubHeadingSize};
        line-height: calc(1.5 * ${FONTS.largeSubHeadingSize});

        /* border: 2px solid red; */
      }
    }
  }
  @media only screen and (min-width: 960px) {
    .header {
      height: 90vh;
      padding: 0 8rem;
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
