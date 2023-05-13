import React from "react";
import Typography from "@mui/material/Typography";

import { AppBar, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material";

import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useColorModeContext } from "../../../Contexts/ColorModeContext/ColorModeContext";
const Appbar = () => {
  const theme = useTheme();
  // alert(theme.palette.grey[900]);

  const { mode, toggleColorMode } = useColorModeContext();
  return (
    <AppBar className=" ">
      <Toolbar
        sx={{
          backgroundColor: theme.palette.grey["900"],
        }}
      >
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

            color: theme.palette.text.primary,
          }}
        >
          SchoolMentor
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <OutlinedInput
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              // backgroundColor: theme.palette.grey[900],
              width: "400px",
              // border: `1px solid ${theme.palette.text.primary}`,
              borderRadius: "0.6rem",
            }}
            placeholder="password"
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment
                sx={{
                  backgroundColor: theme.palette.grey[800],
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <IconButton aria-label="toggle password visibility">
                  <VisibilityOff />
                </IconButton>
              </InputAdornment>
            }
          />

          <IconButton
            aria-label="toggle password visibility"
            sx={{
              backgroundColor: theme.palette.grey[800],
              height: "100%",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <VisibilityOff />
          </IconButton>
          <IconButton
            aria-label="toggle password visibility"
            sx={{
              backgroundColor: theme.palette.grey[800],
              height: "100%",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "10px",
              padding: "15px",
            }}
            onClick={() => {
              toggleColorMode();
            }}
          >
            <VisibilityOff />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
