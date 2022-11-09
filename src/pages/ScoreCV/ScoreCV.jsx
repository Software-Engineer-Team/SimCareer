import React from "react";
import {
  ScoreCVBody,
  ScoreCVContainer,
  ScoreCVContent,
  ScoreCVHeader,
} from "./ScoreCV.styled";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

const ScoreCV = () => {
  const data = {
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        /* fill: true, */
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
      {
        label: "My Second Dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        /* fill: true, */
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <ScoreCVContainer>
      <ScoreCVContent>
        <ScoreCVHeader>
          <div className="score-header">
            <img src="/images/simcareer-not-label.png" alt="" />
            <div>SIMCV FEEDBACK</div>
          </div>
        </ScoreCVHeader>
        <ScoreCVBody>
          <div className="chart-container">
            <div className="specific-chart">
              <h3>1.Điểm mạnh</h3>
              <div className="break-line">
                <div></div>
              </div>
              <Radar data={data} style={{ width: "200px!important" }}></Radar>
            </div>
            <div className="specific-chart"></div>
            <div className="specific-chart"></div>
          </div>
        </ScoreCVBody>
      </ScoreCVContent>
    </ScoreCVContainer>
  );
};

export default ScoreCV;
