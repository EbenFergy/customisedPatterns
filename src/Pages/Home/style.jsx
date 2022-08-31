import styled from "styled-components";
import bgGif from "../../Assets/bgGif.gif";

const Style = styled.div`
  width: 100vw;
  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgba(1, 45, 112, 0.3), rgba(1, 45, 112, 0.3)),
    url(${bgGif});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.3rem;
  font-weight: 700;
  color: #ffffff;

  p {
    font-size: 1rem;
    font-weight: 600;
  }

  /* border: 2px solid yellow; */
`;

export default Style;
