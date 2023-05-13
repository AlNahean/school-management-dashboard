import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const Card = ({ children, title = "Default Title", sx }) => {
  const theme = useTheme();
  return (
    <Box
      className=" card w-100 h-100 "
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // border: " 1px solid red",
        borderRadius: "0.5rem",
        backgroundColor: theme.palette.grey[800],
        ...sx,
      }}
    >
      <div
        className=" card-header w-100  "
        style={{
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <h4 className=" mb-0">{title}</h4>
      </div>
      <div
        className=" card-body h-100 w-100 p-0   "
        //   style={{ flex: "1", height: "400px" }}
      >
        {children}
      </div>

      {/* <RecipeReviewCard /> */}
    </Box>
  );
};

export default Card;
