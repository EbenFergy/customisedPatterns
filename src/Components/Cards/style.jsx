import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";
import { FONTS } from "../../styles/FONTS";
import { SHADOWS } from "../../styles/SHADOWS";

export const Style = styled.div`
  /* width: 100%; */
  /* border: 2px solid red; */
  box-shadow: 0 0 0 2px #f2f2f7;
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02),
    0px 7px 23px rgba(0, 0, 0, 0.08);
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

  @media only screen and (min-width: 400px) {
    .cardBody {
      padding: 0.5rem 2rem 2rem 2rem;
    }
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

export const PlainCardsStyle = styled.div`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* margin: 0 1rem; */
  max-width: 20rem;
  position: relative;
  bottom: -5rem;
  background-color: ${COLORS.White};
  height: 25rem;
  box-shadow: ${SHADOWS.CARDSHADOW};
  border-bottom: 5px solid ${COLORS.Blue};

  /* border-top: 1px solid ${COLORS.Blue}; */

  :hover {
    border-bottom: 5px solid ${COLORS.Blue};
    transform: translateZ(0);
    z-index: 2;

    .PlainCardTitle {
      color: ${COLORS.Blue};
    }
  }

  .PlainCardHead {
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    background-color: ${COLORS.Gray};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80px;
    }
  }

  .PlainCardTitle {
    color: ${COLORS.DarkGray};
    font-weight: 800;
    font-size: ${FONTS.subHeadingSize};
    margin: 1rem 0;
  }

  .PlainCardBody {
    color: ${COLORS.FontBody};
    font-size: ${FONTS.bodySize};
    text-align: center;
  }
`;
