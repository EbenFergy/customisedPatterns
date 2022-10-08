import styled from "styled-components";

export const SlickStyle = styled.div`
  /* border: 2px solid red; */
  max-width: 100%;
  padding: 0 0 2rem;
  overflow: hidden;
  /* background-color: #4a4a4a; */

  .slick-slide {
    /* border: 2px solid blue; */
    padding-bottom: 2rem;
  }
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 5px;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    height: min-content;
    /* background-color: rgb(10, 23, 40); */
    /* background-color: rgba(10, 25, 10, 0.9); */
    /* background-color: rgba(145, 65, 145, 0.6); */
    overflow: hidden;
    border: 1px solid rgba(10, 25, 10, 1);
    /* border-radius: 5px; */
    padding: 0 0 1rem;
    min-width: 10rem;
    box-sizing: border-box;
    margin-bottom: 2rem;
  }
  #galleriaImg {
    width: 100%;
    object-fit: cover;
  }

  .galleryCont {
    width: 2rem;
    height: 5rem;
  }
`;
