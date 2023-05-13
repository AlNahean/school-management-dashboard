import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
import Card from "../../../Shared/Card/Card";
import DataGrid from "./DataGrid";
import BarChart from "../../../Shared/Charts/Bar/BarChart";
import LineChart from "../../../Shared/Charts/Line/LineChart";

const Section3 = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "16px",
          // gridAutoRows: "440px",
          marginTop: "20px",
        }}
      >
        {/*
         *************************************************************************************************
         ********************************** First Graph ****************************************************************
         *************************************************************************************************
         */}
        <Card
          title="Student Fees Details"
          sx={{
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
          <DataGrid />
        </Card>

        {/*
         *************************************************************************************************
         ******************************** 2nd ******************************************************************
         *************************************************************************************************
         */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",

            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "10px",
            // backgroundColor: theme.palette.primary.main,
            gridColumn: {
              xs: "span 12",
              sm: "span 12",
              md: "span 12",
              lg: "span 7",
              xl: "span 6",
            },
            gap: "20px",
          }}
        >
          <Card
            title="Batch"
            sx={{
              // backgroundColor: theme.palette.primary.main,
              gridColumn: {
                xs: "span 12",
                sm: "span 12",
                md: "span 6",
                lg: "span 6",
                xl: "span 6",
              },

              flex: "1",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            <LineChart />
          </Card>
          <Card
            title="Birthdays"
            sx={{
              // backgroundColor: theme.palette.primary.main,
              gridColumn: {
                xs: "span 12",
                sm: "span 12",
                md: "span 6",
                lg: "span 6",
                xl: "span 6",
              },

              flex: "1",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            <BarChart />
          </Card>
          <Card
            title="Earnings"
            sx={{
              // backgroundColor: theme.palette.primary.main,
              gridColumn: {
                xs: "span 12",
                sm: "span 12",
                md: "span 6",
                lg: "span 6",
                xl: "span 6",
              },

              flex: "1",
              height: "100%",
              borderRadius: "10px",
            }}
          >
            <BarChart />
          </Card>
          {[0].map((item) => {
            return (
              <>
                <Card
                  title="Title"
                  sx={{
                    // backgroundColor: theme.palette.primary.main,
                    gridColumn: {
                      xs: "span 12",
                      sm: "span 12",
                      md: "span 6",
                      lg: "span 6",
                      xl: "span 6",
                    },

                    flex: "1",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <BarChart />
                </Card>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Section3;
