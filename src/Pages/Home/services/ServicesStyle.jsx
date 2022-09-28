import styled from "styled-components";

const ServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  color: #2b2b2e;
  /* border: 2px solid green; */

  .servicesTitle {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 1rem;
    .titleUnderline {
      border-bottom: 3px solid #e46060;
      width: 5rem;
      margin: auto;
    }
  }
`;
export default ServicesStyle;
