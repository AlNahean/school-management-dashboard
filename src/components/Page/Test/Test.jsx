import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SearchAppBar from "./TestAppBar";
import { useColorModeContext } from "../../Contexts/ColorModeContext/ColorModeContext";

import { AppBar, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { useTheme } from "@mui/material";
// import ProTip from './ProTip';
const Test = () => {
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorModeContext();

  console.log(theme);
  return (
    <div className=" min-vh-100">
      <AppBar className=" bg-primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: theme.palette.text.primary,
            }}
          >
            MUI
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        // maxWidth="sm"

        maxWidth="100"
        sx={{
          backgroundColor: "background.default",
          height: "100%",
          minHeight: "200vh",
          width: "100%",
          flex: "1",
          paddingTop: "70px",
        }}
      >
        {/* <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
          Material UI Create React App example
          </Typography>
        </Box> */}

        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>
              xs=4
              <p>a</p>
              <p>a</p>
            </Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} className=" mt-5">
          <Grid item md={3} xs={12}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>
              xs=4
              <p>a</p>
              <p>a</p>
            </Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item md={3} xs={12}>
            <Item>
              <Grid container spacing={2} className=" mt-5">
                <Grid item md={3} xs={12}>
                  <Item>xs=8</Item>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Item>
                    xs=4
                    <p>a</p>
                    <p>a</p>
                  </Item>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Item>xs=4</Item>
                </Grid>
                <Grid item md={3} xs={12}>
                  <Item></Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            border: "1px solid red",
            p: 3,
          }}
          onClick={() => {
            toggleColorMode();
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            onClick={() => {
              toggleColorMode();
            }}
          >
            {mode}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

const Item = ({ children }) => {
  return (
    <div className=" bg-danger " style={{ height: "100%" }}>
      {children}
    </div>
  );
};

export default Test;
