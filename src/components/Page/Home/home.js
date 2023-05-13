import React, { useState, useRef, useEffect } from "react";
import Appbar from "../Shared/Appbar/Appbar";
import Container from "@mui/material/Container";
import Section1 from "./Subcomponents/Section1/Section1";
import { useTheme } from "@mui/material";
import Section2 from "./Subcomponents/Section2/Section2";
import Section3 from "./Subcomponents/Section3/Section3";

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <Appbar />

      <Container
        maxWidth="100"
        sx={{
          backgroundColor: "background.default",
          color: theme.palette.text.primary,
          height: "100%",
          // minHeight: "200vh",
          width: "100%",
          flex: "1",
          paddingTop: "100px",
        }}
      >
        <Section1 />
        <Section2 />
        <Section3 />
      </Container>
    </div>
  );
};

export default Home;
