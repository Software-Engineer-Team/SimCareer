import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* margin-left: 70px; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 50px 50px 100px 120px;
  max-width: 1940px;
  margin: 0 auto;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

/* export const Title = styled.div` */
/*   font-weight: 550; */
/*   font-size: 22px; */
/*   line-height: 1.1; */
/*   letter-spacing: 1.2px; */
/*   margin-bottom: 30px; */
/*   width: 100%; */
/*   font-family: "Origin Tech Demo", sans-serif; */
/* `; */
export const QuickLinks = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & .title {
    min-width: 250px;
    line-height: 1;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-family: "Anton", sans-serif;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 1.3px;
    position: relative;
    z-index: -1;
    &:before {
      content: "";
      position: absolute;
      width: 100px;
      background: rgb(148, 121, 209);
      background: linear-gradient(
        90deg,
        rgba(148, 121, 209, 1) 20%,
        rgba(196, 177, 240, 1) 50%,
        rgba(148, 121, 209, 1) 80%
      );
      bottom: -14px;
      left: -10px;
      height: 20px;
      z-index: -1;
    }
  }
  & .links {
    /* background-color: rgb(0 0 0 / 7%); */
    padding: 10px;
    border-radius: 50px;
    border: 2px solid #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & .link {
      min-width: 33%;
      font-family: "Acumin Pro", sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 0;
      span {
        min-width: 150px;
        font-size: 16px;
      }
      & .svg {
        margin-right: 10px;
        width: 75px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border-radius: 6px;
        img,
        svg {
          border-radius: 6px;
          width: 100%;
          height: 100%;
          color: #fff;
        }
      }
    }
  }
`;
export const Functions = styled.div`
  width: 100%;
  height: 100%;
  & .container {
    width: 100%;
    height: 100%;
    & .img-bg {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1000px;
      min-width: 1000px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        max-width: 1000px;
      }
    }
  }
`;

export const WeeklyNews = styled.div`
  background-color: rgb(0 0 0 / 7%);
  padding: 30px;
  border-radius: 10px;
  & .header {
    width: 100%;
    font-size: 30px;
    line-height: 1;
    letter-spacing: 1.1;
    font-weight: 600;
    margin-bottom: 30px;
    &.read-all {
      margin-bottom: 0;
      font-size: 25px;
      margin-top: 10px;
    }
  }
  & .weekly-news {
    display: flex;
    flex-direction: column;
    & .news {
      padding: 10px 0px 10px 10px;
      display: flex;
      align-items: flex-start;
      margin-bottom: 10px;
      border-bottom: 1px solid #9e98b3;
      & .img {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 100%;
        img {
          width: 130px;
          border-radius: 10px;
          height: 100px;
          object-fit: cover;
        }
      }
      & .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 100%;
        & .title-news {
          color: #241e38;
          h5,
          p {
            margin: 0;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 1; /* number of lines to show */
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          h5 {
            font-size: 20px;
            font-weight: 500;
            width: 100%;
            line-height: 20px;
          }
          & .text-muted {
            font-size: 10px;
            color: #9e98b3;
            width: 100%;
          }
        }
        & .text-truncated {
          color: #00000090;
          font-size: 15px;
          font-weight: 500;
          margin-top: 10px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;

export const Events = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  border: 5px solid #000000;
  max-height: 600px;
  overflow: scroll;
  position: absolute;
  left: -500px;
  z-index: 100;

  &::-webkit-scrollbar {
    display: none;
  }

  .event-item {
    display: flex;
    justify-content: space-between;
    --event-item-margin-bottom: 35px;
    margin-bottom: var(--event-item-margin-bottom);

    &:last-child {
      margin-bottom: 0px !important;
      .event-right-container {
        &:before {
          height: 100% !important;
        }
      }
    }

    .event-left-container {
      display: flex;
      min-width: 124px;
      flex-direction: column;
      height: 100%;
      position: relative;

      .day-time {
        min-width: 100%;
        font-family: "Anton", sans-serif;
        font-size: 32px;
        text-transform: uppercase;
      }

      .month-year {
        font-family: Cambria, Georgia, serif;
        font-size: 30px;
        text-align: left;
      }
    }

    .event-right-container {
      display: flex;
      flex-direction: column;
      margin-left: 100px;
      position: relative;
      flex-wrap: wrap;

      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 1px;
        height: calc(100% + var(--event-item-margin-bottom));
        background-color: #000000;
        left: -100px;
      }

      &:after {
        left: -100px;
        top: 40px;
        width: 70px;
        height: 1px;
      }

      .event-right-content {
        display: flex;

        .event-img {
          img {
            border-radius: 20px;
            width: 190px;
            height: 90px;
            object-fit: cover;
          }
        }
        .event-content {
          margin-left: 20px;
          font-family: "Source Code Pro", monospace;

          text-transform: uppercase;

          .title,
          .time {
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 700;
          }

          .time {
            -webkit-line-clamp: 3;
          }

          .time > span {
            font-size: 18.3px;
            font-weight: 400;
            font-family: Cambria, Georgia, serif;
            text-transform: none;
            letter-spacing: 1.2px;
          }
        }
      }
      .event-register {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-top: 10px;

        .event-register-content {
          min-width: 130px;
          text-align: center;
          background-color: #6a3ce8;
          border-radius: 37px;
          color: #ffffff;
          transition: all 100ms ease-in;
          border: 1px solid #6a3ce8;
          cursor: pointer;
          text-decoration: none;

          &:hover {
            background-color: #ffffff;
            color: #6a3ce8;
          }

          & > span {
            font-family: "Anton", sans-serif;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: 400 !important;
          }
        }
      }
    }
  }
`;

export const JobTrackers = styled(Events)`
  padding: 0;
  border-radius: 10px;
  position: absolute;
  left: 600px;
  bottom: 20px;
  z-index: 100;
  width: 600px;

  & .job-content {
    overflow: scroll;
    max-height: 340px;

    &::-webkit-scrollbar {
      display: none;
    }

    & .job {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;

      /* &:first-child { */
      /*   margin-top: 10px; */
      /* } */
      /* &:last-child { */
      /*   margin-bottom: 10px; */
      /* } */

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
          font-family: Cambria, Georgia, serif;
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
          font-size: 16px;
          text-transform: lowercase;
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
  }
`;
