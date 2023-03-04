import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Root from "./Root.tsx";

function App() {
  const theme = createTheme({
    colors: {
      danger: "red",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
