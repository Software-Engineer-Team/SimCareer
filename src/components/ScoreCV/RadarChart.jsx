import React, { useRef } from "react";

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
  return <Radar data={data} options={options} />;
};

export default RadarChart;
