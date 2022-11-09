import styled from "styled-components";

export const ScoreCVContainer = styled.div``;

export const ScoreCVContent = styled.div``;

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

  .chart-container {
    max-width: 1400px;
    margin: 0 auto;

    .specific-chart {
      height: 100%;
      h3 {
        margin: 0;
      }

      .break-line {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        & > div {
          height: 2px;
          width: 70%;
          background-color: #e2dfdf;
        }
      }
    }
  }
`;
