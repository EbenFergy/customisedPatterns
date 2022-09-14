import styled from "styled-components";

export const Style = styled.div`
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
    color: #2b2b2e;
  }

  .cardBody {
    padding: 0.5rem 1rem 1rem 1rem;
    color: #6b6b7b;
    font-size: 14px;
  }
`;

export const HorzStyle = styled.div`
  /* width: 100%; */
  /* border: 2px solid red; */
  box-shadow: 0 0 0 2px #f2f2f7;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  text-align: start;
  padding: 0 0.5rem;
  color: #ffffff;
  height: 7rem;
  min-width: 16rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  .cardLeft {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  .cardImage {
    width: 4rem;
    border-radius: 50%;
  }

  .cardTitle {
    font-size: 14px;
    font-weight: 700;
    padding-bottom: 0.5rem;
  }

  .cardBody {
    font-size: 0.75rem;
  }
`;
