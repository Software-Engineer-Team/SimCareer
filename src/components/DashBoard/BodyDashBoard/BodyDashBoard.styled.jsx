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
  z-index: -1;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

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
      div.content {
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
        border: 1px solid #000000;
        img,
        svg {
          border-radius: 6px;
          width: 100%;
          height: 100%;
          color: #fff;
          background-color: white;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    & .title {
      font-size: 30px;
    }
    & .links {
      margin-top: 10px;
      flex-wrap: wrap;
      border-radius: 20px;
      justify-content: space-between;
      & .link {
        max-width: 50%;
        div.content {
          font-size: 12px;
          min-width: 100px;
          display: flex;
          align-items: center;
          img {
            width: 20px;
            height: 20px;
          }
        }
        & .svg {
          width: 40px;
          height: 40px;
          img,
          svg {
            width: 38px;
            height: 38px;
          }
        }
      }
    }
  }
`;

export const Functions = styled.div`
  width: 100%;
  height: 100%;
  min-height: 1100px;
  & .container {
    width: 100%;
    height: 100%;
    & .img-bg {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 1200px;
      min-width: 1200px;
      min-height: 1000px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        max-width: 1500px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    min-height: auto;
    & .container {
      & .img-bg {
        min-width: 100%;
        /* max-height: 700px; */
        width: 100%;
        flex-direction: column;
        & > div.weeklyNews {
          margin-top: 70px;
          margin-bottom: 20px;
        }
        & > div.events {
          margin-top: 70px;
          margin-bottom: 100px;
        }

        img {
          display: none;
        }
        & .title-1 {
          top: 20px;
          left: 10px;
          font-size: 18px;
        }
        & .title-2 {
          top: 990px;
          left: 10px;
          font-size: 18px;
        }
        & .title-3 {
          top: 1450px;
          left: 10px;
          font-size: 18px;
        }
      }
    }
  }
`;

export const WeeklyNewsContainer = styled.div`
  --height-constraints: 880px;
  box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  position: relative;
  padding: 20px;
  max-width: 660px;
  min-width: 660px;
  min-height: var(--height-constraints);
  max-height: var(--height-constraints);
  top: 180px;
  left: -160px;
  z-index: 100;
  border-radius: 20px;
  border: 5px solid #000000;
  background-color: #ffffff;
  position: absolute;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: block;
    position: static;
    max-width: 400px;
    min-width: auto;
    border-width: 2px;
    padding: 10px;
    box-shadow: none;
  }
`;

export const Events = styled.div`
  --width-constraints: 650px;
  box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  border: 5px solid #000000;
  max-width: var(--width-constraints);
  min-width: var(--width-constraints);
  max-height: 450px;
  overflow: scroll;
  position: absolute;
  left: 700px;
  top: 180px;
  z-index: 100;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    display: block;
    position: static;
    max-width: 400px;
    min-width: auto;
    border-width: 2px;
    padding: 10px;
    box-shadow: none;
  }
`;

export const JobTrackersContainer = styled.div`
  --width-constraints: 650px;
  --height-constraints: 400px;
  box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -webkit-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  -moz-box-shadow: 2px 13px 48px 1px rgba(0, 0, 0, 0.68);
  background-color: #ffffff;
  border-radius: 10px;
  border: 5px solid #000000;
  padding: 20px;
  border-radius: 20px;
  position: absolute;
  left: 700px;
  bottom: -50px;
  max-width: var(--width-constraints);
  min-width: var(--width-constraints);
  min-height: var(--height-constraints);
  max-height: var(--height-constraints);
  z-index: 100;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  & .job-content {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    display: block;
    position: static;
    max-width: 360px;
    min-width: auto;
    border-width: 2px;
    padding: 10px;
    box-shadow: none;
    margin-bottom: 180px;
  }
`;
