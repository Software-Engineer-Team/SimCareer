import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 20,
          family: "vazir",
        },
      },
      title: {
        display: true,
        text: "Title of x axes",
      },
    },
    y: {
      ticks: {
        font: {
          size: 20,
          family: "vazir",
        },
        padding: 10,
        stepSize: 20,
      },
      title: {
        display: true,
        text: "Title of y axes",
      },
      min: 0,
      max: 100,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const data = {
  labels: ["IB", "MBB", "MT", "Big4"],
  datasets: [
    {
      fill: "+1",
      label: "Dataset 2",
      data: [40, 13, 60, 65],
      borderColor: "#0c84fe",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [20, 10, 60, 65],
      borderColor: "#fea00c",
      backgroundColor: "#fea00c",
    },
    {
      fill: " ",
      label: "Dataset 3",
      data: [16, 7, 60, 65],
      borderColor: "#ffd515",
      backgroundColor: "#ffd515",
    },
    {
      fill: true,
      label: "Dataset 2",
      data: [10, 2, 60, 65],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function AreaChart() {
  return <Line options={options} data={data} />;
}
