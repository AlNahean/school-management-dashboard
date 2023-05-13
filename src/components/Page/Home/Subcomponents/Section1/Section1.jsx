import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
// import { useColorModeContext } from "../../../../Contexts/ColorModeContext/ColorModeContext";

import PeopleIcon from "@mui/icons-material/People";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaidIcon from "@mui/icons-material/Paid";

const Widget = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        className=""
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          // border: " 1px solid red",
          borderRadius: "10px",
          backgroundColor: theme.palette.primary.dark,
          gridColumn: {
            xs: "span 12",
            sm: "span 6",
            lg: "span 3",
            gap: "20px",
          },
          padding: "20px",
          // backgroundColor: theme.palette.grey[800],
        }}
      >
        <PeopleIcon sx={{ fontSize: "7rem" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={
              {
                // fontWeight: "bold",
              }
            }
          >
            234
          </Typography>
          <Typography variant="h4">Students</Typography>
        </Box>
      </Box>
    </>
  );
};

const Section1 = () => {
  const theme = useTheme();

  // const { mode, toggleColorMode } = useColorModeContext();
  console.log(theme);
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "16px",
          gridAutoRows: "200px",
        }}
      >
        {/* {[0, 1, 2, 3].map((item) => {
          return ( */}
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            // border: " 1px solid red",
            borderRadius: "10px",
            backgroundColor: theme.palette.primary.dark,
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              lg: "span 3",
              gap: "20px",
            },
            padding: "20px",
            // backgroundColor: theme.palette.grey[800],
          }}
        >
          <PeopleIcon sx={{ fontSize: "7rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={
                {
                  // fontWeight: "bold",
                }
              }
            >
              234
            </Typography>
            <Typography variant="h4">Students</Typography>
          </Box>
        </Box>
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            // border: " 1px solid red",
            borderRadius: "10px",
            backgroundColor: theme.palette.secondary.dark,
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              lg: "span 3",
              gap: "20px",
            },
            padding: "20px",
            // backgroundColor: theme.palette.grey[800],
          }}
        >
          <PersonOutlineIcon sx={{ fontSize: "7rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={
                {
                  // fontWeight: "bold",
                }
              }
            >
              68
            </Typography>
            <Typography variant="h4">Employees</Typography>
          </Box>
        </Box>
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            // border: " 1px solid red",
            borderRadius: "10px",
            backgroundColor: theme.palette.error.dark,
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              lg: "span 3",
              gap: "20px",
            },
            padding: "20px",
            // backgroundColor: theme.palette.grey[800],
          }}
        >
          <AutoStoriesIcon sx={{ fontSize: "7rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography variant="h3">16</Typography>
            <Typography variant="h4">Course</Typography>
          </Box>
        </Box>
        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            // border: " 1px solid red",
            borderRadius: "10px",
            backgroundColor: theme.palette.warning.main,
            gridColumn: {
              xs: "span 12",
              sm: "span 6",
              lg: "span 3",
              gap: "20px",
            },
            padding: "20px",
            // backgroundColor: theme.palette.grey[800],
          }}
        >
          <PaidIcon sx={{ fontSize: "7rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Typography variant="h3"> 3,47,000</Typography>
            <Typography variant="h4">Revenew</Typography>
          </Box>
        </Box>
        {/* );
        })} */}
      </Box>
    </>
  );
};

export default Section1;
