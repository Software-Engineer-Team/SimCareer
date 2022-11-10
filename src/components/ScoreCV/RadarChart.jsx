import React, { useRef } from "react";
import styled from "styled-components";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  Tooltip,
  Filler,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  Filler,
  Tooltip
);

const RadarChart = () => {
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
        label: "Đánh giá chung",
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
        display: false,
        text: "Đánh giá chung",
        position: "bottom",
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
          color: "#ffffff",
        },
      },
    },
    maintainAspectRatio: true,
    scales: {
      r: {
        ticks: {
          display: false,
          color: "#ffffff",
          font: {
            size: 25,
          },
          stepSize: 16.7,
        },
        angleLines: {
          color: "#ffffff",
          lineWidth: 2,
        },
        min: 0,
        max: 100,
        grid: {
          color: "#ffffff",
          lineWidth: 2,
        },
        pointLabels: {
          color: "#8b93ac",
          font: {
            size: 25,
          },
        },
      },
    },
  };
  return (
    <RadarContainer>
      <Radar data={data} options={options} />
    </RadarContainer>
  );
};

export default RadarChart;

const RadarContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  z-index: 1000 !important;

  canvas {
    min-width: 400px !important;
    max-height: 800px !important;
  }
`;
