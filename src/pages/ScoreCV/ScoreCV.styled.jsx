import styled from "styled-components";

export const ScoreCVContainer = styled.div`
  width: 100%;
  background-color: #2d3d6e;
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    height: 100vh;
  }
`;

export const ScoreCVContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const ScoreCVHeader = styled.header`
  background: #231f20;
  width: 100%;
  color: #ffffff;
  display: flex;
  padding: 15px 35px;
  justify-content: center;

  .score-header {
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
`;

export const ScoreCVBody = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .score-show-container {
    max-width: 1400px;
    margin: 0 auto;
    /* min-height: 300px; */

    .score-show-content {
      display: flex;
      flex-direction: column;
      margin: 90px 0;

      h3 {
        margin: 0;
        font-size: 52px;
        text-align: center;
        text-transform: uppercase;
        background: rgb(255, 255, 255);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .score-number {
        font-size: 92px;
        font-family: "Anton", sans-serif;
        letter-spacing: 1.2px;
        text-align: center;

        background: rgb(211, 25, 213);
        background: linear-gradient(
          90deg,
          rgba(211, 25, 213, 1) 0%,
          rgba(138, 90, 199, 1) 0%,
          rgba(180, 117, 189, 1) 100%
        );
        background-size: 200% auto;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: shine 1s linear infinite;
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      }
    }
  }

  .join-with-us {
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 70px;
    display: flex;
    position: relative;
    z-index: 100;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    --btn-color: #771fd3;

    h3 {
      font-size: 40px;
      font-style: italic;
      font-family: Cambria, Georgia, serif;
      font-weight: 700;
      color: #ffffff;
    }

    .join-logo {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;

      img {
        width: 90px;
        height: 90px;
        object-fit: cover;
      }
    }

    .join-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;

      .join-btn-content {
        padding: 5px 0px;
        width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--btn-color);
        border-radius: 10px;
        color: #ffffff;
        transition: all 100ms ease-in;
        border: 1px solid var(--btn-color);
        cursor: pointer;
        text-decoration: none;

        &:hover {
          background-color: #ffffff;
          color: var(--btn-color);
        }

        & > span {
          font-family: "Anton", sans-serif;
          font-size: 23px;
          text-transform: uppercase;
          font-weight: 400 !important;
        }
      }
    }
  }

  .chart-container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .specific-chart {
      position: relative;
      z-index: 100;
      margin-bottom: 100px;

      height: 100%;
      h3 {
        color: #ffffff;
        margin: 0;
        font-size: 60px;
        font-family: Cambria, Georgia, serif;
        font-weight: 400;
        letter-spacing: 2.2px;
        margin-bottom: 10px;
      }

      .break-line {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
        & > div {
          height: 2px;
          width: 100%;
          background-color: #354163;
          &.another-color {
            background-color: #525f8b;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .score-show-container {
      .score-show-content {
        margin: 30px 0;

        .score-number {
          font-size: 40px;
          line-height: 1;
          letter-spacing: 2.2px;
          font-family: "Times New Roman", Times, serif;
          font-weight: 700;
        }
      }
    }

    .join-with-us {
      margin-bottom: 0px;
      position: absolute;
      bottom: 0;
      width: 100%;
      h3 {
        display: none;
      }

      .join-logo {
        display: none;
      }

      .join-btn {
        /* margin-bottom: 10px; */

        .join-btn-content {
          padding: 5px 0px;
          width: 100px;
          border-radius: 6px;
          & > span {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
