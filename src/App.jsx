import React, { useState } from "react";
import Memo from "./components/Memo";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as colors from "@material-ui/core/colors";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import "./App.css";

export const Mode = React.createContext();

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "on" ? true : false
  );

  // DarkMode ON
  const handleDarkModeOn = () => {
    localStorage.setItem("darkMode", "on");
    setDarkMode(true);
  };

  // DarkMode OFF
  const handleDarkModeOff = () => {
    localStorage.setItem("darkMode", "off");
    setDarkMode(false);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.blue[800],
      },
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="mode">
          {darkMode ? (
            <IconButton color="inherit" onClick={handleDarkModeOff}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleDarkModeOn}>
              <Brightness4Icon />
            </IconButton>
          )}
        </div>
        <Mode.Provider value={[darkMode, setDarkMode]}>
          <Memo />
        </Mode.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
