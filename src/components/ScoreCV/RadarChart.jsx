import React, { useRef } from "react";
import styled from "styled-components";

import { isMobile } from "react-device-detect";
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
    labels: ["Học tập", "Thái Độ", "Hoạt Động Xã Hội", "Kỹ Năng", "Thể Chất"],
    datasets: [
      {
        label: "Năm 1",
        data: [3, 1, 4, 1, 3],
        fill: true,
        backgroundColor: "#841a9e95",
        borderColor: "#841a9e95",
        pointBackgroundColor: "#841a9e95",
        pointBorderColor: "#841a9e95",
        pointHoverBackgroundColor: "#841a9e",
        pointHoverBorderColor: "#841a9e",
        hidden: true,
      },
      {
        label: "Năm 2",
        data: [5, 1, 6, 3, 3],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, .8)",

        pointBackgroundColor: "rgba(255, 99, 132, .8)",
        pointBorderColor: "rgba(255, 99, 132, .8)",

        pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
        pointHoverBorderColor: "rgba(255, 99, 132, 1)",

        borderWidth: 1,
        hidden: true,
      },
      {
        label: "Năm 3",
        data: [6, 1, 7, 4, 4],
        fill: true,
        backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderColor: "rgba(255, 206, 86, .8)",
        pointBackgroundColor: "rgba(255, 206, 86, .8)",
        pointBorderColor: "rgba(255, 206, 86, .8)",
        pointHoverBackgroundColor: "rgba(255, 206, 86, 1)",
        pointHoverBorderColor: "rgba(255, 206, 86, 1)",
        hidden: true,
      },
      {
        label: "Năm 4",
        data: [9, 3, 7, 4, 4],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, .8)",
        pointBackgroundColor: "rgba(75, 192, 192, .8)",
        pointBorderColor: "rgba(75, 192, 192, .8)",
        pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        hidden: true,
      },
    ],
  };

  let options;
  if (isMobile) {
    options = {
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
      hoverRadius: 8,
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
            size: 16,
            color: "#ffffff",
            lineHeight: 1.2,
          },
          bodyFont: {
            size: 15,
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
            padding: 15,
            boxWidth: 12,
            boxHeight: 12,
            font: {
              size: 14,
            },
            color: "#ffffff",
          },
        },
      },
      maintainAspectRatio: true,
      scales: {
        r: {
          weight: 1,
          ticks: {
            display: false,
            color: "#ffffff",
            font: {
              size: 15,
            },
            stepSize: 2,
          },
          angleLines: {
            color: "#ffffff",
            lineWidth: 1,
          },
          min: 0,
          max: 10,
          grid: {
            color: "#ffffff",
            lineWidth: 2,
          },
          pointLabels: {
            color: "#ffffff",
            font: {
              size: 15,
            },
          },
        },
      },
    };
  } else {
    options = {
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
            padding: 15,
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
            stepSize: 2,
          },
          angleLines: {
            color: "#ffffff",
            lineWidth: 2,
          },
          min: 0,
          max: 10,
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
  }

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
  margin-top: 80px;
  z-index: 1000 !important;

  canvas {
    /* min-width: 400px !important; */
    max-height: 800px !important;
  }
`;
