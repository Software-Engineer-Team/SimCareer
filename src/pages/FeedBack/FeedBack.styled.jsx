import styled from "styled-components";

export const FeedBackContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FeedBackContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  /* grid-template-columns: 3fr 1fr; */
`;

export const FeedBackContentLeft = styled.div`
  height: 100%;
  width: 100%;
  /* padding: 35px 35px 35px 35px; */
  /* overflow-y: auto; */

  .file-pdf {
    width: 100%;
    height: 100%;
    padding-bottom: 35px;
    /* padding-top: 400px; */

    /* img { */
    /*   width: 1000px; */
    /*   height: 1000px; */
    /*   /* object-fit: cover; */
    */
    /* } */

    embed {
      width: 100%;
      height: 100%;
      min-width: 100%;
    }
  }
`;

export const FeedBackContentRight = styled.div`
  padding: 20px;
  background-color: #fbfbfb;
  .feedback-content-right {
    .feedback-image {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      img {
        width: 300px;
      }
      .title {
        text-transform: uppercase;
        font-family: "Anton", sans-serif;
        font-size: 36px;
        font-weight: 500;
        color: #787475;
        line-height: 30px;
      }
    }
  }
`;

export const FeedBackHeader = styled.header`
  background: #231f20;
  width: 100%;
  color: #ffffff;
  display: flex;
  padding: 15px 35px;

  .feedback-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 190px;

    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }

    div {
      font-family: "Anton", sans-serif;
      margin-left: 5px;
      font-size: 23px;
    }
  }

  .cv-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 190px;

    .cv-name {
      font-family: "Anton", sans-serif;
      font-size: 27px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        right: -30px;
        top: 0;
        width: 3px;
        height: 100%;
        background-color: #ffffff;
        z-index: 100;
      }
    }

    .file-name {
      font-family: Cambria, Georgia, serif;
      font-weight: 550;
      margin-left: 50px;
    }
  }
`;
