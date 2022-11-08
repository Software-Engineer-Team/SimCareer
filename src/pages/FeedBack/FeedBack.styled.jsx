import styled from "styled-components";

export const FeedBackContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const FeedBackContent = styled.div``;

export const FeedBackContentLeft = styled.div``;

export const FeedBackContentRight = styled.div``;

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

      &:after {
        content: "";
        position: absolute;
      }
    }
  }
`;
