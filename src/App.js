// import './components/Styles/App.scss';
import React from "react";

import Router from "./components/Router";
import { AppProvider } from "./components/Context";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

import "./components/Styles/App.scss";
import { ColorModeContextProvider } from "./components/Contexts/ColorModeContext/ColorModeContext";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // const colorMode = () => {
  //   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  // };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <>
      <React.StrictMode>
        <ColorModeContextProvider
          colorMode={colorMode}
          mode={mode}
          setMode={setMode}
        >
          <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <AppProvider>
                <Router />
              </AppProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </ColorModeContextProvider>
      </React.StrictMode>
    </>
  );
}

export default App;
