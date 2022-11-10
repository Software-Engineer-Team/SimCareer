import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const data = {
  labels: ["Sales Intern", "Digital Marketing Intern"],
  datasets: [
    {
      label: "# of Votes",
      data: [64, 36],
      backgroundColor: ["#2ed058", "#fed517"],

      // go together with each other
      borderWidth: 3,
      hoverOffset: 3,
      offset: 3,
      /* borderJoinStyle: "round", */
      // go together with each other
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
  tooltips: {
    enabled: false,
  },
  plugins: {
    title: {
      display: false,
      text: "Pie Chart",
      padding: 60,
      font: {
        size: 65,
      },
      color: "#000",
    },
    datalabels: {
      // Write percent
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.forEach((data) => {
          sum += data;
        });
        let percentage = ((value * 100) / sum).toFixed(0) + "%";
        return percentage;
      },
      color: "#eefffa",
      font: {
        size: 40,
      },
    },
    legend: {
      display: true,
      position: "right",
      align: "start",
      reverse: true,
      labels: {
        padding: 10,
        font: {
          size: 30,
        },
      },
      fullSize: true,
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
  },
};

export default function PieChart() {
  return (
    <PieContainer>
      <Pie data={data} options={options} />;
    </PieContainer>
  );
}

const PieContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1000 !important;
`;
