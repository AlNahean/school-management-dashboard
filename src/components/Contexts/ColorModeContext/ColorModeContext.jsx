import React, { useContext } from "react";
const ColorModeContext = React.createContext({});

const ColorModeContextProvider = ({ children, colorMode, mode, setMode }) => {
  const toggleColorMode = () => {
    colorMode.toggleColorMode();
    // setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    // alert("Toggle color mode");
  };
  return (
    <>
      <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
        {children}
      </ColorModeContext.Provider>
    </>
  );
};

const useColorModeContext = () => {
  return useContext(ColorModeContext);
};

export { ColorModeContextProvider, useColorModeContext };
