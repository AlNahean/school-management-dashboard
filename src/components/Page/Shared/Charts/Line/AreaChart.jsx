import React, { useRef, useEffect } from "react";
import { useTheme } from "@emotion/react";

import { Chart, registerables } from "chart.js";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";

Chart.register(...registerables); //vvi must do

const AreaChart = () => {
  let delayed = false;
  const theme = useTheme();
  console.log(theme);
  const el = useRef();

  useEffect(() => {
    const tooltipline = {
      id: "tooltipline",
      beforeDraw: (chart) => {
        if (chart.tooltip._active && chart.tooltip._active.length) {
          const ctx = chart.ctx;
          ctx.save();
          const activePoint = chart.tooltip._active[0];
          ctx.beginPath();
          ctx.setLineDash([5, 7]);
          ctx.moveTo(activePoint.element.x, chart.chartArea.top);
          ctx.lineTo(activePoint.element.x, chart.chartArea.bottom);
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#8391a2";
          ctx.stroke();
          ctx.restore();

          console.log("act");
        }
        // console.log(chart);
      },
    };
    const ctx2 = el.current.getContext("2d");
    const gradient = ctx2.createLinearGradient(0, 0, 0, 400);

    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "green");
    const RevenewChart1 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

        datasets: [
          {
            label: "Student",
            data: [10, 20, 15, 25, 20, 30, 20],
            backgroundColor: [theme.palette.warning.dark + "50"],

            fill: true,

            borderWidth: 4,
            borderColor: theme.palette.warning.dark,
            tension: 0.4,
          },
          {
            label: "Employee",
            data: [0, 15, 10, 30, 15, 35, 25],
            fill: true,
            backgroundColor: [theme.palette.error.dark + "50"],

            borderWidth: 4,
            borderColor: theme.palette.error.dark,
            tension: 0.4,
          },
        ],
      },
      plugins: [tooltipline],
      options: {
        hitRadius: 100,
        pointRadius: 5,
        hoverRadius: 5,
        // plugins: {
        //   title: {
        //     display: true,
        //     text: "Grid Line Settings",
        //   },
        // },
        plugins: {
          datalabels: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
            callbacks: {
              //   label: function (context) {
              //     // console.log(context.dataset, context);
              //     let label = context.dataset.label;
              //     let value = context.raw;
              //     return `${label}: $${value}k`;
              //   },
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "#8080802e",

              // display: false,
            },
            ticks: {
              //   callback: (value) => {
              //     return `$${value}k`;
              //   },
            },
          },
          x: {
            grid: {
              color: "#8080802e",
            },
          },
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
    });

    return () => {
      RevenewChart1.destroy(); // remove the initialized chart upon reRender
    };
  }, []);
  return (
    <>
      <canvas ref={el} />
    </>
  );
};

export default AreaChart;
