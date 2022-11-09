import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Digital Marketing Intern", "Sales Intern"],
  datasets: [
    {
      label: "# of Votes",
      data: [64, 36],
      backgroundColor: ["#2ed058", "#fed517"],

      // go together with each other
      borderWidth: 5,
      hoverOffset: 5,
      offset: 5,
      /* borderJoinStyle: "round", */
      // go together with each other
    },
  ],
};

export function DoughnutChart() {
  return (
    <Doughnut
      data={data}
      options={{
        tooltips: {
          enabled: false,
        },
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "#eefffa",
            font: {
              size: 30,
            },
          },
          legend: {
            display: true,
            position: "right",
            align: "start",
            labels: {
              padding: 10,
              font: {
                size: 30,
              },
            },
          },
        },
      }}
    />
  );
}
