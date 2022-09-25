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
    background: linear-gradient(rgba(1, 45, 112, 0.2), rgba(1, 45, 112, 0.2)),
      url(${bgGif});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 700;
    color: #ffffff;
    /* border: 2px solid yellow; */
  }

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  .leadCaption {
    width: 100%;
    background-color: #f6f7f9;
    padding: 2rem 1rem;
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default Style;
