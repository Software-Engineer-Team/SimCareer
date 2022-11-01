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
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  font-weight: 550;
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: 1.2px;
  margin-bottom: 30px;
  width: 100%;
`;
export const QuickLinks = styled.div`
  padding: 30px;
  margin-bottom: 50px;
  width: 100%;
  background-color: rgb(0 0 0 / 7%);
  border-radius: 6px;
  & .title {
    width: 100%;
    font-size: 30px;
    line-height: 1;
    letter-spacing: 1.1;
    font-weight: 600;
    margin-bottom: 20px;
  }
  & .links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & .link {
      min-width: 25%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin: 10px 0;
      & .svg {
        margin-right: 20px;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        border-radius: 6px;
      }
      img,
      svg {
        width: 35px;
        height: 35px;
        color: #fff;
      }
    }
  }
`;
export const Functions = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  grid-column-gap: 50px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .view-all {
      font-size: 18px;
      color: #00000090;
      text-transform: uppercase;
    }
  }
  & .schedule {
    & .day-time,
    /* & .time-content .time, */
    & .time-content .content .content-title,
    & .time-content .content .trainner,
    & .time-content .content .no_people,
    & .time-content .content .zoom-meeting {
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-word;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    & .day-time {
      font-size: 20px;
      color: #00000090;
      margin-bottom: 20px;
    }
    & .time-content {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & .time {
        min-width: 100px;
        text-align: left;
        align-self: flex-start;
      }
      & .content {
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        border: 1px solid #9e98b190;
        & .content-title {
          line-height: 20px;
        }
        & .zoom-meeting {
        }
        & .trainner {
          font-size: 12px;
          color: #9e98b3;
        }
        & .no_people,
        & .zoom-meeting {
          color: #00000090;
          display: flex;
          align-items: center;
          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export const JobTrackers = styled(Events)`
  background-color: rgb(0 0 0 / 7%);
  padding: 30px;
  border-radius: 10px;

  & .job-content {
    & .category {
      margin-bottom: 20px;
      color: gray;
    }
    & .job {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: 20px 0;
      & .img {
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        img {
          width: 130px;
          border-radius: 10px;
          height: 100px;
          object-fit: cover;
        }
      }
      & .content {
        color: #241e38;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100%;
        height: 100px;

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
          color: #00000090;
          width: 100%;
          line-height: 20px;
        }
        & .text-muted {
          font-size: 18px;
          color: #000;
          font-weight: 600;
          width: 100%;
        }
      }
    }
  }
`;
