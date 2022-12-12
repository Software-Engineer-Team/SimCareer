import styled from "styled-components";

export const Container = styled.div`
  & .job {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    & .img {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      width: 90px;
      background-color: #ffffff;
      border: 1px solid #00000020;
      border-radius: 50%;
      img {
        width: 60px;
        height: 60px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
    & .content {
      color: #241e38;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 250px;
      height: 100px;
      /* margin-left: 20px; */
      h5,
      p {
        margin: 0;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-weight: 400;
        /* font-family: Cambria, Georgia, serif; */
        font-family: "Roboto", Helvetica, Arial, sans-serif !important;
        letter-spacing: 1.2px;
        max-width: 240px;
      }
      h5 {
        font-size: 17px;
        font-weight: 500;
        color: #000000;
        width: 100%;
        line-height: 20px;
        font-weight: 700;
      }
      & .text-muted {
        font-size: 13px;
        /* text-transform: lowercase; */
        color: #000;
        font-weight: 400;
        width: 100%;
        display: block;
        &:first-letter {
          text-transform: uppercase;
        }
      }
    }
    .icon {
      color: red;
    }
  }

  @media screen and (max-width: 500px) {
    & .job {
      margin: 10px 0;
      & .img {
        margin-right: 10px;
        border-radius: 10px;
        img {
          display: block;
        }
      }
      & .content {
        width: 250px;
        height: 100px;
        h5 {
          font-size: 12px;
          font-weight: 500;
          color: #000000;
          width: 100%;
          line-height: 20px;
          font-weight: 700;
        }
        & .text-muted {
          font-size: 10px;
        }
      }
    }
  }
`;
