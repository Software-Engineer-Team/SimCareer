import React, { useRef } from "react";
import {
  ScoreCVBody,
  ScoreCVContainer,
  ScoreCVContent,
  ScoreCVHeader,
} from "./ScoreCV.styled";

import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  RadialLinearScale,
} from "chart.js";
import { PieChart, RadarChart, WaveAnimation } from "@components/index";

ChartJS.register(
  RadialLinearScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

const ScoreCV = () => {
  const delayed = useRef(null);

  const data = {
    labels: [
      "Trình độ học vấn",
      "Kĩ năng",
      "Hình thức",
      "Thương hiệu cá nhân",
      "Kinh nghiệm",
    ],
    datasets: [
      {
        label: "Điểm mạnh",
        data: [58.3, 50, 58.3, 40, 41.7],
        fill: true,
        backgroundColor: "#841a9e95",
        borderColor: "#841a9e95",
        pointBackgroundColor: "#841a9e95",
        pointBorderColor: "#841a9e95",
        pointHoverBackgroundColor: "#841a9e",
        pointHoverBorderColor: "#841a9e",
      },
    ],
  };

  const options = {
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        borderWidth: 1,
      },
    },
    animation: {
      onComplete: () => {
        delayed.current = true;
      },
      delay: (context) => {
        let delay = 0;
        if (
          context.type === "data" &&
          context.mode === "default" &&
          !delayed.current
        ) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    hoverRadius: 12,
    interaction: {
      mode: "nearest",
      intersect: false,
      axis: "x",
    },
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Đánh giá chung",
        padding: {
          top: 0,
        },
        font: {
          size: 35,
        },
        color: "#000000",
      },
      tooltip: {
        enabled: true,
        position: "average",
        titleFont: {
          size: 20,
          color: "#ffffff",
          lineHeight: 1.2,
        },
        bodyFont: {
          size: 18,
          color: "#ffffff",
          lineHeight: 1.2,
        },
        bodyAlign: "left",
        padding: 10,
        boxPadding: 10,
      },
      legend: {
        display: true,
        position: "chartArea",
        align: "start",
        labels: {
          padding: 150,
          font: {
            size: 25,
          },
          color: "#000000",
        },
      },
    },
    maintainAspectRatio: true,
    scales: {
      r: {
        ticks: {
          display: false,
          color: "#000000",
          font: {
            size: 25,
          },
          stepSize: 16.7,
        },
        angleLines: {
          color: "#000000",
        },
        min: 0,
        max: 100,
        grid: {
          color: "#000000",
        },
        pointLabels: {
          color: "#595857",
          font: {
            size: 25,
          },
        },
      },
    },
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
          <div className="score-show-container">
            <div className="score-show-content">
              <h3>Your CV Score</h3>
              <div className="score-number">6/10</div>
            </div>
          </div>
          <div className="chart-container">
            <div className="specific-chart">
              <h3>1.Điểm mạnh</h3>
              <div className="break-line">
                <div></div>
              </div>
              <RadarChart />
              {/* <AreaChart /> */}
            </div>
            <div className="specific-chart">
              <h3>1.Điểm mạnh</h3>
              <div className="break-line">
                <div></div>
              </div>
              <PieChart />
            </div>
            {/* <div className="specific-chart"></div> */}
          </div>
          <WaveAnimation top={100} height={"900px"} />
          <WaveAnimation top={1300} height={"100vh"} />
        </ScoreCVBody>
      </ScoreCVContent>
    </ScoreCVContainer>
  );
};

export default ScoreCV;
