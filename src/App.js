import React, { useState } from "react";
import { lightTheme, darkTheme, buttonTheme } from "./theme";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState("light");
  console.log();

  const themeToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="App" style={theme === "light" ? lightTheme : darkTheme}>
      <h1>{theme}</h1>
      <button
        onClick={themeToggle}
        className="btn"
        style={theme === "light" ? buttonTheme.light : buttonTheme.dark}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
