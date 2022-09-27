import styled from "styled-components";
import bgGif from "../../Assets/bgGif3.jpeg";

const Style = styled.div`
  width: 100vw;
  /* height: 80vh; */
  /* border: 2px solid; */

  .header {
    width: 100vw;
    height: 40rem;
    background-size: cover;
    background: linear-gradient(rgba(2, 26, 63, 0.6), rgba(2, 26, 63, 0.6)),
      url(${bgGif});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #ffffff;
    /* border: 2px solid yellow; */
  }

  #headerTitle {
    text-align: center;
    font-size: 2.5rem;
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
    padding: 2rem 1rem;
    text-align: center;
    font-size: 1.2rem;

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
`;

export default Style;
