import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import RecipeReviewCard from "./CardTest";
import TestChart from "./TestChart";
import Card from "../../../Shared/Card/Card";

import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import PieChart from "../../../Shared/Charts/Pie/PieChart";
import AreaChart from "../../../Shared/Charts/Line/AreaChart";

const data = [
  {
    id: 1,
    title: "Admissiion",
    inProgress: 50,
    done: 50,
  },
  {
    id: 2,
    title: "Fees Collection",
    inProgress: 50,
    done: 50,
  },
  {
    id: 3,
    title: "Syllabus",
    inProgress: 50,
    done: 50,
  },
  {
    id: 4,
    title: "Sports Activity",
    inProgress: 50,
    done: 50,
  },
];

const Section2 = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "16px",
          //   gridAutoRows: "440px",
          marginTop: "20px",
        }}
      >
        {/*
         *************************************************************************************************
         ********************************** First Graph ****************************************************************
         *************************************************************************************************
         */}
        {/* <Box
          className=" card w-100 h-100 "
          sx={{
            // display: "flex",
            // alignItems: "start",
            // justifyContent: "space-between",
            // flexDirection: "column",
            // border: " 1px solid red",
            borderRadius: "10px",
            // backgroundColor: theme.palette.primary.main,
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "span 5",
              xl: "span 6",
              gap: "20px",
            },
            backgroundColor: theme.palette.grey[800],
          }}
        >
          <div
            className=" card-header w-100"
            style={{
              backgroundColor: theme.palette.primary.dark,
            }}
          >
            Chart Header
          </div>
          <div
            className=" card-body  w-100 center "
            //   style={{ flex: "1", height: "400px" }}
          >
            <TestChart />
          </div>
        </Box> */}
        <Card
          title="Daily Attendance Overview"
          sx={{
            // display: "flex",
            // alignItems: "start",
            // justifyContent: "space-between",
            // flexDirection: "column",
            // border: " 1px solid red",

            // backgroundColor: theme.palette.primary.main,
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "span 5",
              xl: "span 6",
            },
          }}
        >
          <div className=" h-100 w-100 center">
            <AreaChart />
          </div>
          {/* <TestChart /> */}
        </Card>
        {/*
         *************************************************************************************************
         **************************************************************************************************
         *************************************************************************************************
         */}
        <Box
          className=""
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",

            // alignItems: "center",
            // justifyContent: "space-between",
            // border: " 1px solid red",
            borderRadius: "10px",
            // backgroundColor: theme.palette.primary.main,
            minHeight: "400px",
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 6",
              lg: "span 4",
              xl: "span 3",
              gap: "20px",
            },
            // padding: "20px",
          }}
        >
          {data.map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  title={item.title}
                  sx={{
                    // backgroundColor: theme.palette.primary.main,
                    gridColumn: {
                      xs: "span 6",
                      sm: "span 6",
                      md: "span 6",
                      lg: "span 6",
                      xl: "span 6",
                    },

                    flex: "1",
                    height: "100%",
                  }}
                >
                  <PieChart chartData={item} />
                </Card>
              </>
            );
          })}
        </Box>
        {/*
         *************************************************************************************************
         **************************************************************************************************
         *************************************************************************************************
         */}

        <Card
          title="Calender"
          sx={{
            backgroundColor: theme.palette.grey[800],
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 6",
              lg: "span 3",
              xl: "span 3",
            },
          }}
        >
          <div className="   h-100 center" sx={{ border: " 1px solid red" }}>
            <StaticDatePicker
              sx={{
                width: "100%",
                padding: "0px",
                backgroundColor: theme.palette.grey[800],
              }}
            />
          </div>
        </Card>
        {/* <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            // border: " 1px solid red",
            borderRadius: "10px",
            backgroundColor: theme.palette.grey[800],
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 6",
              lg: "span 3",
              xl: "span 3",
              gap: "20px",
            },
            padding: "20px",
          }}
        >
          A
        </Box> */}
      </Box>
    </>
  );
};

export default Section2;
