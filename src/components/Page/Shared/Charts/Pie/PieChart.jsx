import React, { useEffect, useRef } from "react";

import { Chart, registerables } from "chart.js";
import ChartJsDataLabels from "chartjs-plugin-datalabels";
import { useTheme } from "@emotion/react";
Chart.register(...registerables); //vvi must do
// Chart.register(ChartJsDataLabels); //vvi must do

const totalSales = [
  {
    id: 1,
    title: "Direct",
    color: "#5158b4",
    sales: 300.56,
    num: 44,
  },
  {
    id: 2,
    title: "Affiliate",
    color: "#0acf97",
    sales: 135.18,
    num: 55,
  },
  //   {
  //     id: 3,
  //     title: "Sponsored",
  //     color: "#fa5c7c",
  //     sales: 48.96,
  //     num: 41,
  //   },
  //   {
  //     id: 4,
  //     title: "Email",
  //     color: "#ffbc00",
  //     sales: 154.96,
  //     num: 17,
  //   },
];

// const centerText = {
//   id: "centerText",
//   afterDatasetsDraw(chart, args, ptugin0ptions) {
//     const { ctx, data } = chart;
//     const text = data.lebels[data.labels.length - 1];
//     ctx.save();

//     alert("a");

//     console.log(chart, "chart");

//     // const x = chart.getDatasetMeta(0).data[Ø].x;
//     // const y = chart.getDatasetMeta(0).data[Ø].y;
//     // ctx.fillRect(x - 10, y - 10, 20, 20);

//     ctx.font = "bold 12px sans-serif";
//     // ctx.fillText(text, x, y);
//   },
// };

const PieChart = ({ chartData }) => {
  const el = useRef();
  Chart.register(ChartJsDataLabels); //vvi must do
  //   Chart.register(centerText); //vvi must do
  let delayed = false;

  const theme = useTheme();

  useEffect(() => {
    const ctx2 = el.current.getContext("2d");
    const RevenewChart1 = new Chart(ctx2, {
      type: "doughnut",
      data: {
        // labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        labels: totalSales.map((item) => item.title),
        // dataset: totalSales.map((item) => {
        //   return { label: item.title, data: item.num };
        // }),

        datasets: [
          {
            // label: totalSales.map((item) => item.title),
            // data: [10, 20, 15, 25, 20, 30, 20],
            data: [chartData.inProgress, chartData.done],
            backgroundColor: [
              theme.palette.error.dark,
              theme.palette.warning.dark,
            ],
          },
          // {
          //   label: "Previous Week",
          //   data: [0, 15, 10, 30, 15, 35, 25],
          //   backgroundColor: ["#0ACF97"],
          //   // backgroundColor: [
          //   //   "rgba(255, 99, 132, 1)",
          //   //   "rgba(54, 162, 235, 1)",
          //   //   "rgba(255, 206, 86, 1)",
          //   //   "rgba(75, 192, 192, 1)",
          //   //   "rgba(153, 102, 255, 1)",
          //   //   "rgba(255, 159, 64, 1)",
          //   // ],
          //   // borderColor: [
          //   //   "rgba(255, 99, 132, 1)",
          //   //   "rgba(54, 162, 235, 1)",
          //   //   "rgba(255, 206, 86, 1)",
          //   //   "rgba(75, 192, 192, 1)",
          //   //   "rgba(153, 102, 255, 1)",
          //   //   "rgba(255, 159, 64, 1)",
          //   // ],
          //   borderWidth: 4,
          //   borderColor: "#0ACF97",
          //   tension: 0.4,
          // },
        ],
      },
      options: {
        borderWidth: 0,
        hitRadius: 100,
        pointRadius: 5,
        hoverRadius: 5,
        // radius: 140,
        // plugins: {
        //   title: {
        //     display: true,
        //     text: "Grid Line Settings",
        //   },
        // },
        plugins: {
          datalabels: {
            color: "White",
            labels: {
              title: {
                font: {
                  weight: "bold",
                },
              },
              value: {
                color: "green",
              },
            },
            formatter: (value, context) => {
              // console.log(context.chart.data.datasets[0].data);
              let datapoint = context.chart.data.datasets[0].data;
              const totalSum = (total, dataPoint) => {
                return total + dataPoint;
              };
              let totalValue = datapoint.reduce(totalSum, 0);

              let percentageValue = ((value / totalValue) * 100).toFixed(1);

              // console.log(totalvalue, percentageValue);
              let display = [`${percentageValue}% `];
              return display;
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                // console.log(
                //   context.dataset,
                //   context,
                //   "skdjlfhljfhbsdlkjgbldfkgb"
                // );
                // alert("aa");
                let label = context.label;
                let value = context.raw;
                return `${label}: ${value}`;
              },
            },
          },
        },
        scales: {
          // y: {
          //   beginAtZero: true,
          //   grid: {
          //     color: "#80808000",
          //     // display: false,
          //   },
          //   // ticks: {
          //   //   callback: (value) => {
          //   //     return `$${value}k`;
          //   //   },
          //   // },
          // },
          // x: {
          //   grid: {
          //     color: "#80808000",
          //   },
          // },
          // y: {
          //   grid: {
          //     drawBorder: false,
          //     color: function(context) {
          //       if (context.tick.value > 0) {
          //         return Utils.CHART_COLORS.green;
          //       } else if (context.tick.value < 0) {
          //         return Utils.CHART_COLORS.red;
          //       }
          //       return '#000000';
          //     },
          //   },
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (
              context.type === "data" &&
              context.mode === "default" &&
              !delayed
            ) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
      //   plugins: [centerText],
    });

    return () => {
      RevenewChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      <canvas className="my-chart" ref={el} style={{ padding: "10px" }} />
    </>
  );
};

export default PieChart;
