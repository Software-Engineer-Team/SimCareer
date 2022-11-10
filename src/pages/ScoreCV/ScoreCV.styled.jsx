import styled from "styled-components";

export const ScoreCVContainer = styled.div`
  width: 100%;
  background-color: #2d3d6e;
  max-height: 100%;
  overflow-y: auto;
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
  padding: 15px 0;
  height: 100%;
  width: 100%;

  .score-show-container {
    max-width: 1400px;
    margin: 0 auto;
    /* min-height: 300px; */

    .score-show-content {
      display: flex;
      flex-direction: column;

      h3 {
        margin: 0;
        font-size: 42px;
        text-align: center;
        text-transform: uppercase;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 0%,
          rgba(209, 208, 209, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .score-number {
        font-size: 152px;
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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    --btn-color: #771fd3;

    h3 {
      font-size: 30px;
      font-style: italic;
      font-family: Cambria, Georgia, serif;
      font-weight: 700;
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
        width: 150px;
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
          font-size: 17px;
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
      &:last-child {
        margin-bottom: 100px;
      }

      height: 100%;
      h3 {
        margin: 0;
        font-size: 30px;
      }

      .break-line {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
        & > div {
          height: 2px;
          width: 100%;
          background-color: #e2dfdf;
        }
      }

      canvas {
        min-width: 400px !important;
        max-height: 800px !important;
        position: relative;
        z-index: 50;
      }
    }
  }
`;
