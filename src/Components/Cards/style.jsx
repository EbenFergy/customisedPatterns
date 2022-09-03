import styled from "styled-components";

const Style = styled.div`
  /* width: 100%; */
  /* border: 2px solid red; */
  box-shadow: 0 0 0 2px #f2f2f7;
  border-radius: 4px;
  text-align: center;

  .cardHeader {
    margin-bottom: 1rem;
  }
  .cardImage {
    width: 100%;
  }

  .cardTitle {
    font-size: 1rem;
    font-weight: 600;
  }

  .cardBody {
    padding: 0.5rem 1rem 1rem 1rem;
    color: #212121;
  }
`;
export default Style;
