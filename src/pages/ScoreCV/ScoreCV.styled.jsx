import styled from "styled-components";

export const ScoreCVContainer = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 15px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  .score-show-container {
    max-width: 1400px;
    margin: 0 auto;

    .score-show-content {
      display: flex;
      flex-direction: column;

      h3 {
        margin: 0;
        font-size: 72px;
        color: #fff;
        background: -webkit-linear-gradient(#eee, #333);
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

  .chart-container {
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100%;
    display: flex;
    flex-direction: column;

    .specific-chart {
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
      }
    }
  }
`;
